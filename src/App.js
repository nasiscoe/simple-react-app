import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './views/home';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' render={(props) => <Home {...props}/>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;