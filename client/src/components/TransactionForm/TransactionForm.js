import React from 'react'
import './TransactionForm.css'

export default function TransactionForm() {

    return(
        <div id='add-container'>
            <h1>Add Transaction:</h1>
            <label for='type'>Type: </label>
            <select name='type' id='transaction-type'>
                <option value='deposit'>deposit</option>
                <option value='withdrawl'>withdrawl</option>
            </select>
            <input class='input' placeholder='Product'></input>
            <input class='input' placeholder='Category'></input>
            <input class='input' placeholder='Vendor'></input>
            <input class='input' placeholder='Number of Items'></input>
            <input class='input' placeholder='Amount in Dollars'></input>
            <button id='submit-button'>Submit</button>
        </div>
    )
}