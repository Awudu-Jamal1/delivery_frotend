import { useLocation } from "react-router-dom";

import { HiArrowLeftCircle} from 'react-icons/hi2';
import Stepper from "./progress/steppers";
import ProgressBars from "./progress/ProgressBar";

function Progressin() {
    const location = useLocation()
    console.log(location.state)
    return ( <>
    {/* <div className="mt-[3em] flex justify-center "><div className=" " >
       <div className="flex justify-center w-[30em]"> <div  className="grid grid-cols-3 py-2 px-2">
        <div className="flex self-center"><HiArrowLeftCircle/></div>
        <div><h2>Details</h2></div>
        <div></div>
        </div></div>
        <div  className="flex border " >
            <div>
            <div className="">
                1234561789
            </div>
            <div>
                <div><h2>Rider Details</h2></div>
                <div>Name</div>
                <div>Number</div>
                <div>Bic Number</div>
            </div>


            </div>

        </div>
        <div>
                <div className="w-[30em]">
                <ProgressBars/>
                </div>

            </div>

    </div>
        </div> */}

       <div>
<div>
    <div className="flex justify-center "> <div  className="grid grid-cols-3 py-2 px-2">
        <div className="flex self-center"><HiArrowLeftCircle/></div>
        <div><h2>Details</h2></div>
        <div></div>
        </div></div>

</div>
<div  className="flex justify-center " >
            <div className="border w-[32em]">
            <div className="py-2">
                1234561789
            </div>
            <div className="py-2 text-[0.8em]">
                <div><h2>Rider Details</h2></div>
                <div>Name</div>
                <div>Number</div>
                <div>Bic Number</div>
            </div>


            </div>

        </div>
<div className="flex justify-center ">
    <div className=" w-[29em]">
    <Stepper/>

    </div>
 </div>

        </div> </> );
}

export default Progressin;