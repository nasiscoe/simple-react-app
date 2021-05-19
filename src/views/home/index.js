import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../constants/themes';
import { store } from '../../utils/store';
import Type from '../../components/atoms/Type/';
import Button from '../../components/atoms/Button';
import logo from '../../assets/img/logo.svg';
import cssModules from './index.module.css';
  
const App = () => {
  const theme = useContext(ThemeContext);
  const globalState = useContext(store);
  const { state, dispatch } = globalState;

  const [localState, setLocalState] = useState({
    
  });

  useEffect(() => {
    dispatch({type: 'SET_DUMMY', payload: process.env.NODE_ENV});
  }, []);

  return (
    <div className={cssModules['background']} style={{backgroundColor: theme.body}}>
      <img src={logo} className={cssModules['logo']} alt="logo" />
      <Type type="h1">Simple React App</Type>
      <Type type="h3">Success! Running this <code>{state.dummy || '-'}</code> React app.</Type>
      <Type>Want to learn more about React?</Type>
      <Button value="React Documentation" href="https://reactjs.org"/>
      <br/>
      <br/>
      <Type type="caption">Enjoy this template? Follow <a className={cssModules['link']} href="https://twitter.com/nasiscoe" target="_blank">@nasiscoe</a> for more fun stuff.</Type>
    </div>
  );
}
  
export default App;
  