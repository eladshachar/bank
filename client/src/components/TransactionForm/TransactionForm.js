import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './TransactionForm.css'
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MuiAlert from '@mui/material/Alert';

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


export default function TransactionForm() {
    

    const [transaction, setTransaction] = useState(initialTransactionValues)
    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState("success")
    const [statusText, setStatusText] = useState("Added successfully!")
    

    
    const handleInputChange = (e) => {
        const {name, value} = e.target

        setTransaction({...transaction, [name]: value})
    }
    

    const addTransaction = () => {
        axios.post('http://127.0.0.1:8000/operations', transaction)
        .then((response)=> {
            console.log(response.status)
            setStatus("success")  
            setStatusText("Added successfully!") 
        })
        .catch((error)=> {
            setStatus("error")
            setStatusText("Failed")
            console.log(error)
        })

        setOpen(true)

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
            <input className='input' name='amount' placeholder='Amount in Dollars' onChange={handleInputChange}></input>
            <button id='submit-button' onClick={addTransaction}>Submit</button>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={status} sx={{ width: '100%' }}>
                    {statusText}
                </Alert>
            </Snackbar>
        </form>
    )
}