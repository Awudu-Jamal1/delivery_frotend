import { useLocation } from "react-router-dom";

import { HiArrowLeftCircle} from 'react-icons/hi2';
import Stepper from "./progress/steppers";
import ProgressBars from "./progress/ProgressBars";

function Progressin() {
    const location = useLocation()
     const info =location.state
    const riders =info.rider
     console.log(location)
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
                {info.id}
            </div>
            <div className="py-4 px-8">
                {riders ==null? (<div>{riders.User.length ===0 &&<p>Searching for Agent</p>}</div>):(<div> <div><h2 className="text-[0.9em]">Rider Details</h2></div>
                <div className=" text-[0.8em] py-3">
                <div className=" py-1">{ riders.User.firstName +" "+ riders.User.lastName}</div>
                <div className=" py-1" >0{riders.User.phone}</div>
                <div className=" py-1">{}</div>
                
                </div> </div>) }

            </div>


            </div>

        </div>
<div className="flex justify-center  ">
    <div className=" w-[29em] bg-[#fff] py-5">
    <Stepper id={info.ids} status={info.status}/>

    </div>
 </div>

        </div> </> );
}

export default Progressin;