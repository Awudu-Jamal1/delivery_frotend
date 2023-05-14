import { useState } from "react";
import {FaGreaterThan} from "react-icons/fa"
import Success from "../../components/modals/success";
import { useForm } from "react-hook-form";
import shortId from "short-unique-id";
import parceltransfer from "../../services/parceltransfer";
import socket from "../../services/socket";
import Sucess from "../../components/modals/notification/Sucess";
import { useNavigate } from "react-router-dom";


export default function Request({user}) {
  const [next, setNext] = useState(false);
  const [required, setRequired] = useState(false);
  const [requests, setRequests] = useState({ });
  const [model,setModel]=useState(false)
  const navigate =useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const uid = new shortId({ length: 12 });
  const estyle =
  "mt-2 block h-12 w-full order-0 px-3 bg-rose-100 py-1.5 text-gray-900 ring-1 ring-inset ring-red-600 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  ";

const style =
  "mt-2 block h-12 w-full h-10 order-0 px-3 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  ";


// const status =user.role
const statusid =user?.Customers[0]?.id

  const handleValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setRequests((values) => ({ ...values, [name]: value }));
  };


const priceCal=(w)=>{
  return 10 * w
}


  let details =
    "bg-my-blue text-white rounded-xl text-[0.8em] py-2 px-4 grid grid-cols-1 gap-2";
  let h2 = "py-2 font-bold text-[0.9em]";
  return (
    <>
    {model && <div className="fixed right-1 top-[15em]"><Sucess/></div>}
      <div className="flex justify-center ">

        <div className=" w-[40em] py-10 px-12 bg-[#f7fff7]">
          <div className="text-center " >
            <h1 className="font-bold text-[1em]" >{next ? " SUMMARY" : "Start Request"}</h1>
          </div>
          {next && (
            <div className="w-full">
              <div>
                <div className="">
                  <h2 className={h2}>Order Details</h2>
                  <div className={details}>
                    <div>
                      <p className="font-bold py-1">OrderId</p>
                      <p> {requests.order.transaction_id}</p>
                    </div>
                    <div>
                      <p className="font-bold py-1">Item Details</p>
                      <p> {requests.item.product_name}</p>
                    </div>
                    <div>
                      <p className="font-bold py-1">Weight</p>
                      <p> {requests.order.weight}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className={h2}>Receiver Details</h2>
                  <div className="bg-my-blue text-white text-[0.8em] rounded-xl py-2 px-4 grid grid-cols-1 gap-2">
                    <div className="">
                      <p className="font-bold py-1">Receiver Name</p>
                      <p> {requests.order.reciever_name}</p>
                    </div>
                    <div>
                      <p className="font-bold py-1">Receiver Number</p>
                      <p> {requests.order.reciever_no}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className={h2}>Delivery Address</h2>
                  <div className="bg-my-blue text-white text-[0.8em] rounded-xl py-2 px-4 grid grid-cols-1 gap-2">
                    <div className="">
                      <p className="font-bold py-1">MyLocation</p>
                      <p> {requests.order.From}</p>
                    </div>
                    <div>
                      <p className="font-bold py-1">Destination</p>
                      <p> {requests.order.To}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-5 ">

                <div className="flex justify-center">
                  <button onClick={async()=>{
setModel(true)
                    try {
                      const response = await  parceltransfer.accept(requests)
                      console.log(response)


                     } catch (error) {
                       console.log(error)

                     }finally{ setModel(false)
                      navigate('/')
                      socket().emit('news',{ 'message': 'Ready'})}
                  }} className="flex rounded-lg py-3 px-4 text-[0.9em] font-semibold bg-green-700 text-white  justify-center hover:bg-red-500">
                    Request <span className="font-bold px-2"> ${requests.order.Total_price}</span>
                  </button>
                </div>
              </div>
            </div>
          )}
          {!next && (
            <div className="w-full ">
              {/* <label htmlFor=""></label> */}
              {required && (
                <div className="text-rose-600 font-bold text-center py-4">
                  {" "}
                  FILL IN ALL INPUT{" "}
                </div>
              )}
              <div className="my-5">
                <input

                  {...register("receivers", {
                    required: "Enter Receiver Full Name"})}
                  type="text"
                  placeholder="Enter Receiver Full Name"
                  name="receivers"
                  id=""
                  className={errors.receivers? estyle : style}
                />
                {errors.receivers && (
                  <p className="text-rose-600 font-bold text-[0.8em] px-2 py-1 ">
                    {" "}
                    {errors.receivers?.message}
                  </p>
                )}
              </div>
              <div className="my-5">
                <input

                  {...register("numbs", {
                    required: "Enter Receiver Number"})}
                  type="text"
                  placeholder="Enter Receiver Number"
                  name="numbs"
                  id=""
                  className={errors.numbs? estyle : style}
                />
                {errors.numbs && (
                  <p className="text-rose-600 font-bold text-[0.8em] px-2 py-1 ">
                    {" "}
                    {errors.numbs?.message}
                  </p>
                )}
              </div>

              <div className="my-5">
                <input

                  {...register("pickup", {
                    required: "Enter Pickup Point"})}
                  type="text"
                  placeholder="Parcel Pickup Point"
                  name="pickup"
                  id=""
                  className={errors.pickup ? estyle : style}
                />
                {errors.pickup && (
                  <p className="text-rose-600 font-bold text-[0.8em] px-2 py-1 ">
                    {" "}
                    {errors.pickup?.message}
                  </p>
                )}
              </div>
              <div className="my-5">
              <input
                  onChange={handleValue}
                  {...register("destination", {
                    required: "Enter Destination"})}
                  type="text"
                  placeholder="Parcel Destination"
                  name="destination"
                  id=""
                  className={errors.destination ? estyle : style}
                />
                {errors.destination && (
                  <p className="text-rose-600 font-bold text-[0.8em] px-2 py-1 ">
                    {" "}
                    {errors.destination?.message}
                  </p>
                )}
              </div>
              <div className="my-5">
              <input
                  onChange={handleValue}
                  {...register("item", {
                    required: "Enter Item Information"})}
                  type="text"
                  placeholder="Item Information"

                  className={errors.item ? estyle : style}
                />
                {errors.item && (
                  <p className="text-rose-600 font-bold text-[0.8em] px-2 py-1 ">
                    {" "}
                    {errors.item?.message}
                  </p>
                )}
              </div>
              <div className="my-5">
              <input

                  {...register("weight", {
                    required: "Enter Parcel Weight"})}
                  type="text"
                  placeholder="Enter Parcel Weight"

                  className={errors.weight? estyle : style}
                />
                {errors.weight && (
                  <p className="text-rose-600 font-bold text-[0.8em] px-2 py-1 ">
                    {" "}
                    {errors.weight?.message}
                  </p>
                )}
              </div>
              <div  onClick={handleSubmit(async (data) => {
console.log(data)

setRequests({
  "order": {
    "transaction_id": uid(),
    "reciever_name": data.receivers,
    "reciever_no": data.numbs,
    "role":statusid,
    "Total_price": `${priceCal(data.weight)}`,
    "From": data.pickup,
    "To": data.destination,
    "status": 1,
    "type": user.role,
    "weight":data.weight
  },
  "item": {
    "product_name": data.item,
    "quantity": data.quantity
  }

})



setNext(!next);

})} className="text-center pt-5 ">
                <button className="bg-green-400 py-2 text-white px-4">
                  Process Request
                </button>
              </div>
              :
            </div>
          )}
        </div>
      </div>
    </>
  );
}
