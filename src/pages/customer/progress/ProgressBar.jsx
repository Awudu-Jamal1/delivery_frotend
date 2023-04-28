import { useEffect, useState } from "react";
import Stepper from "./steppers";
import { useLoaderData} from "react-router-dom";
import parceltransfer from "../../../services/parceltransfer";
import {io} from "socket.io-client";

const socket  = io('http://localhost:8081')

export default function ProgressBars() {
  const [res,setRes]=useState([])
  const [emit,setEmit]=useState([])
  const [catchs,setCatchs]=useState(false)

  socket.on('update',(data)=>{
    setEmit(data)
    setCatchs(true)
  })
  const orders = useLoaderData()

  let cm;

  useEffect(()=>{
    let fetched =async()=>{
    const response= (await parceltransfer.getTransaction({"Id":3,"type":"Customer"})).data

    setRes(response.orders)
  }
  fetched()


},[])
cm = emit.filter((e,i) =>e.customer_id ==3)
//  const realData = cm === undefined? res:emit
console.log()
  return (
    <>

    <div  >
    <div >
        <h1 className="font-bold text-center">Progress Bar </h1>
      </div>
      {catchs?cm.map((e,i)=>( <div  key={i} className="bg-[#f7fff7] text-[#000]  text-center py-3 my-6">
        <div className="">
          <div className="pl-12 my-4 font-bold">
          <p>{e.transaction_id}</p>
          <p>{e.delivery_location}</p>
          <p className="leading-loose font-bold">{e.total_price}</p>
          </div>

        </div>
        <div className=" my-3 pt-4"><Stepper  status ={e.status}/></div>
      </div>)):res.map((e,i)=>( <div  key={i} className="bg-[#f7fff7] text-[#000]  text-center py-3 my-6">
        <div className="">
          <div className="pl-12 my-4 font-bold">
          <p>{e.transaction_id}</p>
          <p>{e.delivery_location}</p>
          <p className="leading-loose font-bold">{e.total_price}</p>
          </div>

        </div>
        <div className=" my-3 pt-4"><Stepper  status ={e.status}/></div>
      </div>))}
    </div>

    </>
  );
}
