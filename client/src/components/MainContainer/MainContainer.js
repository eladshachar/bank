import './MainContainer.css'
import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import Expenses from './Expenses/Expenses';
import Transactions from './Transactions/Transactions';
import getTransactionsFromAPI from '../../API-calls/getTransactionsFromAPI';
import getFilteredTransactionsFromAPI from '../../API-calls/getFilteredTansactionsFromAPI';
import removeTransactionFromAPI from '../../API-calls/removeTransactionFromAPI';
import Operations from './Operations/Operations';


function MainContainer(props) {

  const [transactions, setTransactions] = useState([])
  const [filteredTransactions, setFilteredTransactions] = useState([])
  const [currentCategory, setCurrentCategory] = useState("")

  
  useEffect(() => {
    refreshTransactionDisplay()
  }, [])


  useEffect(()=> {
    calculateBalance()
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


  const refreshTransactionDisplay = () => {
    getAllTransactions()
    filterByCategory(currentCategory)
  }

  const removeTransaction = id => {
    removeTransactionFromAPI(id).then(()=> {
        refreshTransactionDisplay()
    })
  }


  const calculateBalance = () => {
    props.calculateBalance(transactions)
  }


  return (
    <div id='main-container'>
        <Route path="/" exact render={()=> <Transactions transactions={transactions} removeTransaction={removeTransaction}/>}/>
        <Route path='/operations' exact render={()=> <Operations balance={props.balance} refreshTransactionsDisplay={refreshTransactionDisplay}/>}/>
        <Route path='/expenses' exact render={()=> <Expenses filteredTransactions={filteredTransactions} filterByCategory={filterByCategory} removeTransaction={removeTransaction} updateCategory={updateCategory}/>}/>
    </div>
  );
}

export default MainContainer;
