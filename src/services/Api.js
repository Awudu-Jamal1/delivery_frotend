
import axios from 'axios'
export default()=>{
    return axios.create({
        baseURL:"https://delivery-app-backend-tdi9.onrender.com"
    
    })
}