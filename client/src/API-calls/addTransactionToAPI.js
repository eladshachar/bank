import axios from "axios";

const addTransactionToAPI = async(transaction) => {
    let added = true
    
    await axios.post('http://127.0.0.1:8000/transactions', transaction)
        
    .catch((error)=> {
            added = false
            console.log(error)
        })
    
    return added
}

export default addTransactionToAPI;