import axios from "axios";

const removeTransactionFromAPI = async(id) => {
    
    await axios.delete(`http://127.0.0.1:8000/transactions/${id}`)
      .catch((error)=> {
        console.log(error)
      }) 
}

export default removeTransactionFromAPI;