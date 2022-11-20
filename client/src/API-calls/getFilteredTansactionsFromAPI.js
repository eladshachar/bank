import axios from "axios";

const getFilteredTransactionsFromAPI = async(category) => {
    let transactions = []
    
    await axios.get(`http://127.0.0.1:8000/transactions?category=${category}`)   
      .then((result)=> {  
        if(result !== null && Array.isArray(result.data)) {
            transactions = result.data
          }  
      })
      .catch((error)=> {
         console.log(error)
      })
    return transactions  
}

export default getFilteredTransactionsFromAPI;