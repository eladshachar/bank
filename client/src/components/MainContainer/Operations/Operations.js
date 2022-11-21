import React from 'react'
import TransactionForm from './TransactionForm/TransactionForm'

export default function Operations(props) {

    return(
        <div>
           <TransactionForm balance={props.balance} refreshTransactionsDisplay={props.refreshTransactionsDisplay}/> 
        </div>
    )
}
