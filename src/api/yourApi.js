import Auth from './auth';

export default class Redwood {
  constructor() {
    this.API_URL = process.env.REACT_APP_API_URL;
    this.auth = new Auth();
  }

  aPostRequestWithBody = async (data) => {
    const accessToken = await this.auth.getAccessToken();
    return fetch(this.API_URL + '/app/api/post/', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    }).then(response => {
      if (!response.ok) {
        console.log('response was not a 200-299 status code');
      }
      return response.json();
    }).catch(err => {
      console.log('Error', err);
    });
  }

  aGetRequest = async () => {
    const accessToken = await this.auth.getAccessToken();
    return fetch(this.API_URL + '/app/api/get/', {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer'
    }).then(response => {
      if (!response.ok) {
        console.log('response was not a 200-299 status code');
      }
      return response.json();
    }).catch(err => {
      console.log('Error', err);
    });
  }
}
