import {io} from "socket.io-client";

export default()=>{
    return io(process.env.VITE_APP_BASE_URL)}
// const socket  =