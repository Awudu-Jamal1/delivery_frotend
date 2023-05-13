import { useForm } from "react-hook-form";
import parceltransfer from "../../services/parceltransfer";
import { IoIosArrowForward } from 'react-icons/io';
import ProgressBar from "@ramonak/react-progress-bar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Tracking() {
  const navigate = useNavigate()
  const [searche, setSearch] = useState();
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div>
    <div className="flex justify-center ">
      <div className="intro pl-20 max-sm:pl-0">
        <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-2   ">
          <div className="col-span-2 ">
            <input
              {...register("search", {
                required: "Enter Tracking Id",
                maxLength: {
                  value: 10,
                  message: "Wrong Tracking Id",
                },
              })}
              className="  w-full h-12 bg-[#f7fff7] text-[#000] font-bold px-4 placeholder-[#000] placeholder-opacity-100"
              placeholder="TRACK ID"
              type="text"
            />
          </div>
          <div className="max-sm:pl-36  ">
            <button
              onClick={handleSubmit(async (data) => {
                console.log(data);

                try {
                  let response = (await parceltransfer.track(data.search)).data;
                  setSearch(response.orders);
                  setShow(true);
                } catch (error) {
                  console.log("User Login error");
                }
              })}
              className="h-12 text-white font-bold w-36 text-center bg-red-500 hover:bg-[#023e8a]"
            >
              TRACK
            </button>
          </div>
        </div>
        <div className="font-bold py-4 text-right pr-20 max-sm:pr-0">
          DELIVERY HISTORY
        </div>
        {show && (
          <div>{searche === "null" ? "Parcel Does not exist" : "Wzz"}</div>
        )}
      </div>

    </div>
    <div className=" flex justify-center  ">
      <div className="border  text-[#000] bg-[#ffff] py-2 pb-5 px-4 w-[32em]">
        <div><h2 className="mb-3">My Parcel</h2></div>
        <div>
          <div className="py-3 px-3 mx-5 shadow-md ">
            <div className="font-semibold text-[0.9em] py-2">1234567890MJ</div>
            <div className="py-4 text-[0.9em] font-bold">In transit</div>
            <div className=""><ProgressBar className="h-[0.5em]" completed = {70}  isLabelVisible = {false} bgColor = "#03045e" height="5px" animateOnRender = {true} /></div>
            <div className="py-2  "><button onClick={()=>{navigate('/progessing',{state:{id:500}})}} className=" border-b-2 font-semibold border-b-[#000]  text-[0.85em] h-[2.5em] px-3 pt-2 flex "> <div className="flex self-center">Details</div> <div className="flex self-center"><IoIosArrowForward/></div></button> </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
