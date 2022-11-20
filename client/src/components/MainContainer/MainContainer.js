import './MainContainer.css'
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Expenses from './Expenses/Expenses';
import Transactions from './Transactions/Transactions';
import getTransactionsFromAPI from '../../API-calls/getTransactionsFromAPI';
import getFilteredTransactionsFromAPI from '../../API-calls/getFilteredTansactionsFromAPI';
import removeTransactionFromAPI from '../../API-calls/removeTransactionFromAPI';
import Operations from './Operations/Operations';


function MainContainer(props) {

  const [transactions, setTransactions] = useState([])
  const [filteredTransactions, setFilteredTransactions] = useState([])
  const [currentCategory, setCurrentCategory] = useState("nothing")

  
  useEffect(() => {
    getAllTransactions()
  }, [])


  useEffect(()=> {
    calculateBalance()
    filterByCategory(currentCategory)
  }, [transactions])

  
  const updateCategory = category => {
    setCurrentCategory(category)
  }

  const getAllTransactions = () => {
    
    getTransactionsFromAPI().then(res=> {
        setTransactions(res)
    })
  }


  const filterByCategory = category => {
    
    getFilteredTransactionsFromAPI(category).then(res=> {
        setFilteredTransactions(res)
    })
  }


  const removeTransaction = id => {
    removeTransactionFromAPI(id).then(()=> {
        getAllTransactions()
    })
  }


  const calculateBalance = () => {
    props.calculateBalance(transactions)
  }


  return (
    <div id='main-container'>
        <Route path="/" exact render={()=> <Transactions transactions={transactions} removeTransaction={removeTransaction}/>}/>
        <Route path='/operations' exact render={()=> <Operations />}/>
        <Route path='/expenses' exact render={()=> <Expenses filteredTransactions={filteredTransactions} filterByCategory={filterByCategory} removeTransaction={removeTransaction} updateCategory={updateCategory}/>}/>
    </div>
  );
}

export default MainContainer;
