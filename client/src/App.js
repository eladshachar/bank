import logo from './logo.svg';
import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './components/Home/Home';
import Operations from './components/Operations/Operations';
import Breakdown from './components/Breakdown/Breakdown';
import Balance from './components/Balance/Balance';


function App() {
  return (
    <Router>
      <div className="App">
        <div id="main-links">
          <Link to='/' className='link'>Home </Link>
          <Link to='/operations' className='link'>Operations </Link>
          <Link to='/breakdown' className='link'>Breakdown </Link>
          <Balance />
        </div>
        <Route path="/" exact render={()=> <Home/>}/>
        <Route path='/operations' exact render={()=> <Operations />}/>
        <Route path='/breakdown' exact render={()=> <Breakdown />}/>
      </div>
    </Router>

  );
}

export default App;
