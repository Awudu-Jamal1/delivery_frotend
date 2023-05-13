import { useLocation } from "react-router-dom";

import { HiArrowLeftCircle} from 'react-icons/hi2';
import Stepper from "./progress/steppers";
import ProgressBars from "./progress/ProgressBar";

function Progressin() {
    const location = useLocation()
    console.log(location.state)
    return ( <>


       <div className="mt-[5em] text-[#000]">
<div>
    <div className="flex justify-center "> <div  className="grid grid-cols-3 py-4 px-5  bg-[#fff] w-[29em]">
        <div className="flex self-center "><HiArrowLeftCircle className="text-[1.5em] "/></div>
        <div><h2 className="font-bold">Details</h2></div>
        <div></div>
        </div></div>

</div>
<div  className="flex justify-center  " >
            <div className="w-[29em] bg-[#fff]">
            <div className="py-4 px-8 font-semibold">
                1234561789
            </div>
            <div className="py-4 px-8">
                <div><h2 className="text-[0.9em]">Rider Details</h2></div>
                <div className=" text-[0.8em] py-3">
                <div >Name</div>
                <div>Number</div>
                <div>Bic Number</div>
                </div>

            </div>


            </div>

        </div>
<div className="flex justify-center  ">
    <div className=" w-[29em] bg-[#fff] py-5">
    <Stepper/>

    </div>
 </div>

        </div> </> );
}

export default Progressin;