import axios from "axios";

const getTransactionsFromAPI = async () => {
    let transactions = []
    
    await axios.get('http://127.0.0.1:8000/transactions').then((res) => { 
      if(res !== null && Array.isArray(res.data)) {
        transactions = res.data
      }   
    })
    .catch((error)=> {
      console.log(error) 
    })

    return transactions
  }

  export default getTransactionsFromAPI;