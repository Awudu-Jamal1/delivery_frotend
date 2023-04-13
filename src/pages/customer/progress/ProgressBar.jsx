import { useEffect, useState } from "react";
import Stepper from "./steppers";
import { useLoaderData} from "react-router-dom";
import parceltransfer from "../../../services/parceltransfer";

export default function ProgressBars() {
  const orders = useLoaderData()
  const [res,setRes]=useState([])
  useEffect(()=>{
    let fetched =async()=>{
    const response= (await parceltransfer.getTransaction({"Id":3,"type":"Customer"})).data

    setRes(response.orders)
  }
  fetched()

},[])


  return (
    <>

    <div  >
    <div >
        <h1 className="font-bold text-center">Progress Bar </h1>
      </div>
      {res.map((e,i)=>( <div  key={i} className="bg-[#f7fff7] text-[#000]  text-center py-3 my-6">
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
