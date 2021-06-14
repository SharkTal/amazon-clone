
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Router path="/checkout" >
            <h1>Checkout</h1>
          </Router>
          <Router path="/login">
            <h1>Login</h1>
          </Router>
          <Router path="/">
            <Header />
            <h1>Homepage</h1>
          </Router>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
