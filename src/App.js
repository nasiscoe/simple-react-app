import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { ThemeContext, themes } from './constants/themes';
import Home from './views/home';

const App = () => {
  const [state, setState] = useState({
    theme: themes.primary
  });

  return (
    <div style={{'background-color': state.theme.body, 'min-height': '100vh'}}>
      <ThemeContext.Provider value={state.theme}>
        <Router>
          <Switch>
            <Route exact path='/' render={(props) => <Home {...props}/>} />
          </Switch>
        </Router>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
