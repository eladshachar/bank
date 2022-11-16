import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Category from '../Category/Category'
import Transactions from '../Transactions/Transactions'
import './Expences.css'

export default function Expences(props) {

    const [categories, setCategories] = useState([])
    
    
    
    useEffect(()=> {
        getCategories()
    }, [props.transactions])
    
    
    
    const getCategories = () => {
        axios.get('http://127.0.0.1:8000/categories').then((results)=> {
            results.data !== null ? setCategories(results.data) : setCategories([])
        })
    }

    
    return(
        <div>
            <h1>Expences By Category:</h1>
            <div id='categories-container'>
               {categories.map(c=> {
                    return(
                      <Category key={c.name} category={c} filterByCategory={props.filterByCategory}/>
                    )
               })} 
            </div>

            <div id='filterd-results'>
                <Transactions transactions={props.filteredTransactions} removeTransaction={props.removeTransaction} updateCategory={props.updateCategory}/>
            </div>
        </div>
    )
}