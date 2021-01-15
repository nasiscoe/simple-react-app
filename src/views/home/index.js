import logo from '../../assets/img/logo.svg';
import './index.css';
  
const App = () => {
  return (
    <div className="home">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <p>
          This is production? {process.env.REACT_APP_IS_PROD}
        </p>
        <a
          className="link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
  
export default App;
  