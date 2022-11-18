import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Category from '../Category/Category'
import Transactions from '../Transactions/Transactions'
import './Expenses.css'

export default function Expenses(props) {

    const [categories, setCategories] = useState([])
    
    
    
    useEffect(()=> {
        getCategories()
    }, [props.filteredTransactions])
    
    
    
    const getCategories = () => {
        axios.get('http://127.0.0.1:8000/categories').then((results)=> {
            results.data !== Object ? setCategories(results.data) : setCategories([])
        })
    }

    
    return(
        <div id='expenses-container'>
            <h1>Expenses By Category:</h1>
            <div id='categories-container'>
               {categories.map(c=> {
                    return(
                      <Category key={c.name} category={c} filterByCategory={props.filterByCategory} updateCategory={props.updateCategory}/>
                    )
               })} 
            </div>

            <div id='filterd-results'>
                <Transactions transactions={props.filteredTransactions} removeTransaction={props.removeTransaction} updateCategory={props.updateCategory}/>
            </div>
        </div>
    )
}