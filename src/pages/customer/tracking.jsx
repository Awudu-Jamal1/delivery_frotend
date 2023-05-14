import { useForm } from "react-hook-form";
import parceltransfer from "../../services/parceltransfer";
import { IoIosArrowForward } from 'react-icons/io';
import ProgressBar from "@ramonak/react-progress-bar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBars from "./progress/ProgressBars";
export default function Tracking({user}) {
  const users= user.role ==='Merchant' ? user?.Merchant[0]?.id : user?.Customers[0]?.id
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
    <div className=" flex justify-center  pl-15 max-sm:pl-0">
      <div className="  text-[#000] bg-[#f7fff7] py-8 px-8 w-[36em] ">
        <div><h2 className="mb-3">My Parcel</h2></div>
        <ProgressBars id={users} type={user.role}/>
      </div>
      </div>
    </div>
  );
}
