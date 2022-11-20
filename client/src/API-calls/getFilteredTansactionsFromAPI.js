import axios from "axios";

const getFilteredTransactionsFromAPI = async(category) => {
    let transactions = []
    
    let response =  await axios.get(`http://127.0.0.1:8000/transactions?category=${category}`)   
    .catch((error)=> {
      console.log(error)
    })
    
    if(response !== null && Array.isArray(response.data)) {
        transactions = response.data
    }  


    
    return transactions  
}

export default getFilteredTransactionsFromAPI;