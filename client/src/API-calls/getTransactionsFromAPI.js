import axios from "axios";

const getTransactionsFromAPI = async () => {
    let transactions = []
    
    let response = await axios.get('http://127.0.0.1:8000/transactions')
    .catch((error)=> {
       console.log(error) 
    })
    
    if(response !== null && Array.isArray(response.data)) {
       transactions = response.data
    }   



    return transactions
  }

  export default getTransactionsFromAPI;