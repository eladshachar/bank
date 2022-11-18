import './App.css';
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import axios from 'axios'
import Operations from './components/Operations/Operations';
import Expenses from './components/Expenses/Expenses';
import Balance from './components/Balance/Balance';
import Transactions from './components/Transactions/Transactions';


function App() {

  const [transactions, setTransactions] = useState([])
  const [filteredTransactions, setFilteredTransactions] = useState([])
  const [currentCategory, setCurrentCategory] = useState("nothing")

  useEffect(() => {
    getAllTransactions()
    filterByCategory(currentCategory)
  }, [])

  
  const updateCategory = category => {
    setCurrentCategory(category)
  }

  const getAllTransactions = () => {
    axios.get('http://127.0.0.1:8000/transactions').then((res) => { 
    setTransactions(res.data)
    res.data !== Object ? setTransactions(res.data) : setTransactions([])
    })
  }

  const removeTransaction = id => {
    axios.delete(`http://127.0.0.1:8000/transactions/${id}`).then(()=> {
      getAllTransactions()
      filterByCategory()
    })
  }

  const filterByCategory = category => {
    axios.get(`http://127.0.0.1:8000/transactions?category=${category}`).then((result)=> { 
        result.data !== Object ? setFilteredTransactions(result.data) : setFilteredTransactions([])
    })
  }


  return (
    <Router>
      <div className="App">
        <div id="header">
          <Link to='/' className='link'>Home </Link>
          <Link to='/operations' className='link'>Operations </Link>
          <Link to='/expenses' className='link'>Expenses </Link>
          <Balance transactions={transactions}/>
        </div>
        <div id='main-container'>
          <Route path="/" exact render={()=> <Transactions transactions={transactions} removeTransaction={removeTransaction}/>}/>
          <Route path='/operations' exact render={()=> <Operations />}/>
          <Route path='/expenses' exact render={()=> <Expenses filteredTransactions={filteredTransactions} filterByCategory={filterByCategory} removeTransaction={removeTransaction} updateCategory={updateCategory}/>}/>
        </div>
        
      </div>
    </Router>

  );
}

export default App;
