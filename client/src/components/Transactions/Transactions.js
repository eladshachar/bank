import React from 'react'
import Transaction from '../Transaction/Transaction'
import './Transactions.css'

export default function Transactions(props) {

    
    return(
        <div>
            <table>
                <th>id</th>
                <th>Transaction Type</th>
                <th>Product</th>
                <th>Category</th>
                <th>Vendor</th>
                <th>Number Of Items</th>
                <th>Amount</th>
                <th>Time</th>
                <tbody>
                    {props.transactions.map(t=> {
                        return(
                            <Transaction key={t.transaction_id} transaction={t} removeTransaction={props.removeTransaction}/>
                        )
                    })}
                </tbody> 
            </table>        
        </div>
    )
}
