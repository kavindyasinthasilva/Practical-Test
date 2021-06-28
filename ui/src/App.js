import logo from './logo.svg';
import './App.css';


import login from './ui/login';
import registation from './ui/registation';
import home from './ui/home';

import update from './ui/update';





import {BrowserRouter  as Router, Switch,Route } from 'react-router-dom';



function App() {
  return (



<Router>


    <div className="App">


    <Route path="/" exact component={login}/>
    <Route path="/registation" exact component={registation}/>
    <Route path="/home" exact component={home}/>
    <Route path="/update" exact component={update}/>


    
     
    </div>

</Router>
  );
}

export default App;
