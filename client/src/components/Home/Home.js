import React, { useMemo, useEffect, useState } from 'react'
import Transaction from '../Transaction/Transaction'
import { useTable } from "react-table";
import './Home.css'

export default function Home(props) {

    
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
                <tbody>
                    {props.transactions.map(t=> {
                        return(
                            <Transaction key={t.transaction_id} transaction={t}/>
                        )
                    })}
                </tbody> 
            </table>        
        </div>
    )
}
