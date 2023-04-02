import React, {useState, useEffect} from 'react';
import { Switch, Route} from 'react-router-dom'
import './Style.css';
import Home from './Home';
import NavBar from './NavBar';
import Upload from "./Upload";
import Header from './Header';
import Gallery from './Gallery';
import Chat from './Chat';


function App() {
  const [twins, setTwins] = useState([])

  useEffect(() =>{
    fetch('http://localhost:3000/Twins')
    .then(res => res.json())
    .then(twinData => setTwins(twinData))
  }, [])

  function addTwin(newTwin){
     setTwins([...twins, newTwin])
  }

  function deleteTwin(id){
    const deletedTwins = twins.filter(twin => twin.id !== id)
    console.log(deletedTwins, 'in app')
    setTwins(deletedTwins)
  }

  return (
    <div>
      <Header/>
      <NavBar/>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/upload'>
          <Upload addTwin={addTwin}/>
        </Route>
        <Route exact path='/gallery'>
          <Gallery twins={twins} deleteTwin={deleteTwin} />
        </Route>
        <Route exact path='/chat'>
          <Chat />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
