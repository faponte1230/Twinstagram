import React from 'react';
import { Switch, Route} from 'react-router-dom'
import './Style.css';
import Home from './Home';
import NavBar from './NavBar';
import LoginForm from "./LoginForm";
import Header from './Header';

function App() {
  return (
    <div>
      <Header/>
      <NavBar/>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/login'>
          <LoginForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
