import React, { useEffect, useState } from 'react'
import './Balance.css'

export default function Balance(props) {

    const[balance, setBalance] = useState(0)
    
    const calculateBalance = () => {
        let newBalance = 0
        
        props.transactions.forEach(t => {
            t.transaction_type === 'deposit' ? newBalance += t.amount : newBalance -= t.amount
        });

        setBalance(newBalance)
    }

    useEffect(()=> {
        calculateBalance()
    }, [props.transactions])
    
    return(
        <div id='balance'>Balance: {balance}</div>
    )
}