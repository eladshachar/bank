import React, { useEffect, useState } from 'react'
import Category from './Category/Category'
import Transactions from '../Transactions/Transactions'
import './Expenses.css'
import getCategoriesFromAPI from '../../../API-calls/getCategoriesfromAPI'

export default function Expenses(props) {

    const [categories, setCategories] = useState([])
    
    
    
    useEffect(()=> {
        getCategories()
    }, [props.filteredTransactions])
    
    
    
    const getCategories = () => {
       getCategoriesFromAPI().then((result)=> {
        setCategories(result)
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