import { useEffect, useState } from "react";
import Stepper from "./steppers";
import { useLoaderData} from "react-router-dom";
import parceltransfer from "../../../services/parceltransfer";

export default function ProgressBars() {
  const orders = useLoaderData()
  const [res,setRes]=useState({})
  useEffect(()=>{
    let fetched =async()=>{
    const response= (await parceltransfer.getTransaction({"Id":3,"type":"Customer"})).data

    setRes(response.orders)
  }
  fetched()

},[])

   console.log(res)
  return (
    <>
    <div >
    <div >
        <h1 className="font-bold text-center">Progress Bar </h1>
      </div>
      <div className="bg-[#f7fff7] text-[#000]  text-center py-3 my-6">
        <div className="">
          <div className="pl-12 my-4 font-bold">
          <p>Order   #15F621</p>
          <p className="leading-loose font-bold">Placed in June 1 ,2023</p>
          </div>

        </div>
        {res.map((e,i)=> <div className=" my-3 pt-4"><Stepper key={i} status ={e.status}/></div>)}
      </div>
    </div>

    </>
  );
}
