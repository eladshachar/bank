import axios from 'axios'
import React, { useState } from 'react'
import './TransactionForm.css'

const initialTransactionValues ={
    transaction_type: "deposit",
    product: "",
    category: "",
    vendor: "",
    num_items: 0,
    amount: 0

}


export default function TransactionForm() {
    

    const [transaction, setTransaction] = useState(initialTransactionValues)
    

    const handleInputChange = (e) => {
        const {name, value} = e.target

        setTransaction({...transaction, [name]: value})
    }
    

    const addTransaction = () => {
      axios.post('http://127.0.0.1:8000/operations', transaction).then((response)=> {
        console.log(response.status)
      })  
    }


    return(
        <form id='add-container'>
            <h1>Add Transaction:</h1>
            <label htmlFor='transaction_type'>Type: </label>
            <select name='transaction_type' id='transaction-type' onChange={handleInputChange}>
                <option value='deposit'>deposit</option>
                <option value='withdrawl'>withdrawl</option>
            </select>
            <input className='input' name='product' placeholder='Product' onChange={handleInputChange}></input>
            <input className='input' name='category' placeholder='Category' onChange={handleInputChange}></input>
            <input className='input' name='vendor' placeholder='Vendor' onChange={handleInputChange}></input>
            <input className='input' name='num_items' placeholder='Number of Items' onChange={handleInputChange}></input>
            <input className='input' name='amount' placeholder='Amount in Dollars' onChange={handleInputChange}></input>
            <button id='submit-button' onClick={addTransaction}>Submit</button>
        </form>
    )
}