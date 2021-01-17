export default class Auth {
  constructor() {
    this.AUTH_URL = process.env.REACT_APP_AUTH_URL;
    this.AUTH_CLIENT_ID = process.env.REACT_APP_AUTH_CLIENT_ID;
    this.AUTH_AUDIENCE = process.env.REACT_APP_AUTH_AUDIENCE;
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.refreshAuthentication = this.refreshAuthentication.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.sendCodeToPhoneNumber = this.sendCodeToPhoneNumber.bind(this);
    this.authenticatePhoneNumberWithCode = this.authenticatePhoneNumberWithCode.bind(this);
    this.resetAuthentication = this.resetAuthentication.bind(this);
  }

  isAuthenticated = async () => {
    const expires = localStorage.getItem("expires");
    if (expires === undefined) {
      return false;
    }
    if (new Date(parseInt(expires)) <= new Date()) {
      return false;
    } else {
      return true;
    }
  }

  refreshAuthentication = async () => {
    const refreshToken = localStorage.getItem("refreshToken");
    if (refreshToken === undefined) {
      return null;
    }
    return fetch(this.AUTH_URL + '/oauth/token', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {'Content-Type': 'application/json'},
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({
        grant_type: 'refresh_token',
        client_id: this.AUTH_CLIENT_ID,
        refresh_token: refreshToken
      })
    }).then(res => res.json()).then(async response => {
      localStorage.setItem("accessToken", response.access_token);
      const expires = (Date.now() + response.expires_in).toString();
      localStorage.setItem("expires", expires);
      return response;
    });
  }

  getAccessToken = async () => {
    const isAuthenticated = await this.isAuthenticated();
    if (isAuthenticated) {
      return localStorage.getItem("accessToken");
    } else {
      const response = await this.refreshAuthentication();
      // If user has never authenticated (or authentication needs to be redone), return null
      if (response === null) {
        return null;
      } else {
        return response.access_token;
      }
    }
  }

  sendCodeToPhoneNumber = async (phoneNumber) => {
    const response = await fetch(this.AUTH_URL + '/passwordless/start', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {'Content-Type': 'application/json'},
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({
        client_id: this.AUTH_CLIENT_ID,
        connection: 'sms',
        phone_number: phoneNumber,
        send: 'code'
      })
    });
    return response.json();
  }

  authenticatePhoneNumberWithCode = async (phoneNumber, code) => {
    return fetch(this.AUTH_URL + '/oauth/token', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {'Content-Type': 'application/json'},
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({
        grant_type: 'http://auth0.com/oauth/grant-type/passwordless/otp',
        client_id: this.AUTH_CLIENT_ID,
        username: phoneNumber,
        otp: code.toString(),
        realm: 'sms',
        audience: this.AUTH_AUDIENCE,
        scope: 'openid profile offline_access'
      })
    }).then(res => res.json()).then(async response => {
      localStorage.setItem("refreshToken", response.refresh_token);
      localStorage.setItem("accessToken", response.access_token);
      /* Subtract 2000 milliseconds to mitigate a scenario where we think
      / the access token is valid (not expired) but it expires in
      / the short window of time that it takes for us to actually use it */
      const expires = (parseInt(Date.now()) + parseInt(response.expires_in) - 2000).toString();
      localStorage.setItem("expires", expires);
      return response;
    });
  }

  // Sign out
  resetAuthentication = async () => {
    try {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("expires");
      return true;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}
