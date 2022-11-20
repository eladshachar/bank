import './App.css';
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import MainContainer from './components/MainContainer/MainContainer';
import Header from './components/Header/Header';


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
        <Header balance={balance}/>
        <MainContainer calculateBalance={calculateBalance} balance={balance}/>
      </div>
    </Router>

  );
}

export default App;
