
import { useLoaderData } from 'react-router-dom';
import Delivery from './delivery';
import { useState } from 'react';
import socket from '../../services/socket';

const Requests = ({user}) => {
    const [refresh,setRefresh] = useState(false)
    const data = useLoaderData();
    const datas = data ?data.orders: []
    const id =user.Agents[0].id
    socket().on('news',(data)=>{
        console.log(data)
        setRefresh(true)

      })
const evals = datas.length === 0 ? true :false


    return ( <>
{refresh && <div><button className='bg-[]' onClick={()=>window.location.reload()}>New Orders</button></div> }
{ evals && <div className='text-center mt-7'><h1>No Request Available</h1></div>}
    {datas?.map((e,i)=><div key={i}><Delivery data={e} id={id} /></div>)}
    </> );
}

export default Requests;