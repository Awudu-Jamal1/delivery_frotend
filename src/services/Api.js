import axios from 'axios'
export default()=>{
    return axios.create({
        baseURL:process.env.VITE_APP_BASE_URL
    })
}