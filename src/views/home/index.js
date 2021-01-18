import { ThemeContext } from '../../constants/themes';
import Type from '../../components/atoms/Type/';
import Button from '../../components/atoms/Button';
import logo from '../../assets/img/logo.svg';
import './index.css';
  
const App = () => {

  return (
    <ThemeContext.Consumer>
      {theme => (
        <div className="background" style={{backgroundColor: theme.body}}>
          <img src={logo} className="logo" alt="logo" />
          <Type type="h1">Simple React App</Type>
          <Type type="h3">Success! Running this <code>{process.env.NODE_ENV}</code> React app.</Type>
          <Type>Want to learn more about React?</Type>
          <Button value="📝 React Documentation" href="https://reactjs.org"/>
          <br/>
          <br/>
          <Type type="caption">Enjoy this template? Follow <a className="link" href="https://twitter.com/nasiscoe" target="_blank">@nasiscoe</a> for more fun stuff.</Type>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}
  
export default App;
  