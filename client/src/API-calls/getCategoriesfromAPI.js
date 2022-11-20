import axios from "axios";

const getCategoriesFromAPI = async() => {
    let result

    let response = await axios.get('http://127.0.0.1:8000/categories')
    .catch((error)=> {
        console.log(error)
    })

    response !== null && Array.isArray(response.data) ? result  = response.data.filter(c=> c.name.length > 0) : result = []

    return result
}

export default getCategoriesFromAPI;