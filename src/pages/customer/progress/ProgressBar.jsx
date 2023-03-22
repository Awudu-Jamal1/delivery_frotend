import { useState } from "react";

import { TiTick } from "react-icons/ti";
import "./stepper.css";

export default function ProgressBars(){

  const steps = ["Customer Info", "Shipping Info", "Payment", "Step 4"];
    const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

    return(
        <>
        <div><h1 className="font-bold">Progress Bar </h1></div>
       <div>
       <div className="flex justify-between">
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
            <p className="text-gray-500">{step}</p>
          </div>
        ))}
      </div>
      {!complete && (
        <button
          className="btn"
          onClick={() => {
            currentStep === steps.length
              ? setComplete(true)
              : setCurrentStep((prev) => prev + 1);
          }}
        >
          {currentStep === steps.length ? "Finish" : "Next"}
        </button>
      )}
       </div>

        </>
    )
}