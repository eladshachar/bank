import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import axios from 'axios'
import Operations from './components/Operations/Operations';
import Expences from './components/Expences/Expences';
import Balance from './components/Balance/Balance';
import Transactions from './components/Transactions/Transactions';


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
          <Link to='/expences' className='link'>Expences </Link>
          <Balance transactions={transactions}/>
        </div>
        <Route path="/" exact render={()=> <Transactions transactions={transactions} removeTransaction={removeTransaction}/>}/>
        <Route path='/operations' exact render={()=> <Operations />}/>
        <Route path='/expences' exact render={()=> <Expences transactions={transactions}/>}/>
      </div>
    </Router>

  );
}

export default App;
