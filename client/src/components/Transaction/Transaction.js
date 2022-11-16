import React from 'react'
import './Transaction.css'

export default function Transaction(props) {

    const transaction = props.transaction

    const removeTransaction = () => {
        props.removeTransaction(transaction.transaction_id)
    }

    return(
       <tr className={transaction.transaction_type === 'deposit' ? 'deposit' : 'withdrawl'}>
            <td>{transaction.transaction_id}</td>
            <td>{transaction.transaction_type}</td>
            <td>{transaction.product}</td>
            <td>{transaction.category}</td>
            <td>{transaction.vendor}</td>
            <td>{transaction.num_items}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.created_date}</td>
            <td><button className='remove-button' onClick={removeTransaction}>Remove</button></td>
       </tr>
    )
}