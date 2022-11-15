import React from 'react'
import './Transaction.css'

export default function Transaction(props) {

    return(
       <tr>
            <td>{props.transaction.transaction_id}</td>
            <td>{props.transaction.transaction_type}</td>
            <td>{props.transaction.product}</td>
            <td>{props.transaction.category}</td>
            <td>{props.transaction.vendor}</td>
            <td>{props.transaction.num_items}</td>
            <td>{props.transaction.amount}</td>
            <td><button id='remove'>Remove</button></td>
       </tr>
    )
}