import React, { useEffect, useState } from 'react'
import './Balance.css'

export default function Balance(props) {

    
    return(
        <div id={props.balance < 0 ? 'balance-negative' : 'balance-positive'}>Balance: {props.balance}</div>
    )
}