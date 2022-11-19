import './App.css';
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import axios from 'axios'
import Operations from './components/Operations/Operations';
import Expenses from './components/Expenses/Expenses';
import Balance from './components/Balance/Balance';
import Transactions from './components/Transactions/Transactions';
import MainContainer from './components/MainContainer/MainContainer';


function App() {

  const[balance, setBalance] = useState(0)

  const calculateBalance = transactions => {
    let newBalance = 0
    
    transactions.forEach(t => {
        t.transaction_type === 'deposit' ? newBalance += t.amount : newBalance -= t.amount
    });

    setBalance(newBalance)
}

  return (
    <Router>
      <div className="App">
        <div id="header">
          <Link to='/' className='link'>Home </Link>
          <Link to='/operations' className='link'>Operations </Link>
          <Link to='/expenses' className='link'>Expenses </Link>
          <Balance balance={balance}/>
        </div>
        <MainContainer calculateBalance={calculateBalance}/>
      </div>
    </Router>

  );
}

export default App;
