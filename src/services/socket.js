import {io} from "socket.io-client";

export default()=>{
    return io(import.meta.env.VITE_APP_BASE_URL)}
// const socket  =