import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { ThemeContext, themes } from './constants/themes';
import { StateProvider } from './utils/store';
import Home from './views/home';

const App = () => {
  const [state, setState] = useState({
    theme: themes.light
  });

  return (
    <StateProvider>
      <div style={{backgroundColor: state.theme.body, minHeight: '100vh'}}>
        <ThemeContext.Provider value={state.theme}>
          <Router>
            <Switch>
              <Route exact path='/' render={(props) => <Home {...props}/>} />
            </Switch>
          </Router>
        </ThemeContext.Provider>
      </div>
    </StateProvider>
  );
}

export default App;
