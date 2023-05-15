import React, { useState } from "react";
import "./stepper.css";
import { TiTick } from "react-icons/ti";
import parceltransfer from "../../../services/parceltransfer";
const Stepper = ({id,status}) => {
  const steps = ["Pickup Ready", "Courier Assigned", "Deliverying", "Delivered"];
  const currentStep = parseInt(status);
  const [complete, setComplete] = useState(false);
// console.log(id)
  return (
    <>
      <div className="flex justify-between py-3">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            } `}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
            </div>
            <p className="text-[#000] font-bold text-[0.7em] py-2">{step}</p>
          </div>
        ))}
      </div>
      <div className="py-5 text-my-blue detail text-center">

      </div>
       {/* {currentStep === steps.length && (
        <button
        className="border h-[2.5em] border-my-blue w-[7em] text-my-blue font-bold hover:text-[#ffff] hover:bg-my-blue"
        onClick={async() => {
          try {
            await parceltransfer.request({id:id, status:5})
          } catch (error) {
            console.log(error)
          }finally {
            window.location.reload();
          }

        }}
        >
           Confirm

        </button>
      )}
      {currentStep == 1 && (
        <button
        className="border h-[2.5em] border-rose-700 w-[7em] text-rose-700 font-bold hover:text-[#ffff] hover:bg-rose-700"
          onClick={async() => {
            try {
              await parceltransfer.request({id:id, status:6,})
            } catch (error) {
              console.log(error)
            }finally {
              window.location.reload();
            }

          }}
        >
           Cancel

        </button>
      )} */}
    </>
  );
};

export default Stepper;