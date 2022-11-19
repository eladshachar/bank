import './MainContainer.css'
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import axios from 'axios'
import Operations from '../Operations/Operations';
import Expenses from '../Expenses/Expenses';
import Transactions from '../Transactions/Transactions';


function MainContainer(props) {

  const [transactions, setTransactions] = useState([])
  const [filteredTransactions, setFilteredTransactions] = useState([])
  const [currentCategory, setCurrentCategory] = useState("nothing")

  useEffect(() => {
    getAllTransactions()
    filterByCategory(currentCategory)
  }, [])

  useEffect(()=> {
    calculateBalance()
  }, [transactions])

  
  const updateCategory = category => {
    setCurrentCategory(category)
  }

  const getAllTransactions = () => {
    axios.get('http://127.0.0.1:8000/transactions').then((res) => { 
      res !== null && Array.isArray(res.data) ? setTransactions(res.data) : setTransactions([])
    })
    .catch((error)=> {
      console.log(error)
    })
  }

  const removeTransaction = id => {
    axios.delete(`http://127.0.0.1:8000/transactions/${id}`).then(()=> {
      getAllTransactions()
      filterByCategory(currentCategory)
    })
    .catch((error)=> {
      console.log(error)
    })
  }

  const filterByCategory = category => {
    axios.get(`http://127.0.0.1:8000/transactions?category=${category}`).then((result)=> { 
      console.log(result)  
      result !== null && Array.isArray(result.data) ? setFilteredTransactions(result.data) : setFilteredTransactions([])
    })
    .catch((error)=> {
      console.log(error)
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
