import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Category from '../Category/Category'
import Transactions from '../Transactions/Transactions'
import './Expences.css'

export default function Expences(props) {

    const [categories, setCategories] = useState([])
    const [filteredTransactions, setFilteredTransactions] = useState([])
    
    
    useEffect(()=> {
        getCategories()
    }, [props.transactions])
    
    
    
    const getCategories = () => {
        axios.get('http://127.0.0.1:8000/categories').then((results)=> {
            setCategories(results.data)
        })
    }


    const filterByCategory = category => {
        axios.get(`http://127.0.0.1:8000/transactions?category=${category}`).then((result)=> {
            setFilteredTransactions(result.data)
        })
    }


    return(
        <div>
            <h1>Expences By Category:</h1>
            <div id='categories-container'>
               {categories.map(c=> {
                    return(
                      <Category key={c.name} category={c} filterByCategory={filterByCategory}/>
                    )
               })} 
            </div>

            <div id='filterd-results'>
                <Transactions transactions={filteredTransactions}/>
            </div>
        </div>
    )
}