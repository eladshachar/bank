import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import axios from 'axios'
import Home from './components/Home/Home';
import Operations from './components/Operations/Operations';
import Breakdown from './components/Breakdown/Breakdown';
import Balance from './components/Balance/Balance';


function App() {

  const[transactions, setTransactions] = useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/transactions').then((res) => { 
    setTransactions(res.data)
    })
  }, [])

  const removeTransaction = id => {
    axios.delete(`http://127.0.0.1:8000/transactions?id=${id}`).then(()=> {
      window.location.reload(false)
    })
  }

  return (
    <Router>
      <div className="App">
        <div id="main-links">
          <Link to='/' className='link'>Home </Link>
          <Link to='/operations' className='link'>Operations </Link>
          <Link to='/breakdown' className='link'>Breakdown </Link>
          <Balance transactions={transactions}/>
        </div>
        <Route path="/" exact render={()=> <Home transactions={transactions} removeTransaction={removeTransaction}/>}/>
        <Route path='/operations' exact render={()=> <Operations />}/>
        <Route path='/breakdown' exact render={()=> <Breakdown />}/>
      </div>
    </Router>

  );
}

export default App;
