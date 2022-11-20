import React, { useEffect, useState } from 'react'
import './TransactionForm.css'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import addTransactionToAPI from '../../../../API-calls/addTransactionToAPI';

const initialTransactionValues ={
    transaction_type: "deposit",
    product: "",
    category: "",
    vendor: "",
    num_items: 0,
    amount: 0

}


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export default function TransactionForm(props) {
    

    const [transaction, setTransaction] = useState(initialTransactionValues)
    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState("success")
    const [statusText, setStatusText] = useState("Added successfully!")
    

    
    const handleInputChange = (e) => {
        const {name, value} = e.target

        setTransaction({...transaction, [name]: value})
    }
    

    const addTransaction = (e) => {

        if(transaction.transaction_type === 'withdrawl' && props.balance < 500){
            e.preventDefault()
            setStatus("warning")
            console.log("warning")
            setStatusText("Insufficient Funds")
            setOpen(true)
        }
        else if(transaction.amount !== 0){
            addTransactionToAPI(transaction).then((res)=> {
                res == true ? setStatus("success") : setStatus("error")
                res == true ? setStatusText("Added successfully!") : setStatusText("Failed")
                setOpen(true)
            })
        }
        
    }


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
    };



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
            <input className='input' name='amount' placeholder='Amount in Dollars' onChange={handleInputChange} required></input>
            <button id='submit-button' onClick={addTransaction}>Submit</button>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={status} sx={{ width: '100%' }}>
                    {statusText}
                </Alert>
            </Snackbar>
        </form>
    )
}