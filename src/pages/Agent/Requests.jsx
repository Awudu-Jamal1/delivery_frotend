
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



    return ( <>
{refresh && <div><button className='bg-[]' onClick={()=>window.location.reload()}>New Orders</button></div> }
    {datas?.map((e,i)=><div key={i}><Delivery data={e} id={id} /></div>)}
    </> );
}

export default Requests;