import { Outlet } from "react-router-dom";
import accounting from "../../assets/accounting.svg";
import Intro from "./intro";
import NoService from "./progress/Noservice";
import ProgressBar from "./progress/ProgressBar";
import Request from "./Request";
import Tracking from "./tracking";

export default function Userpage() {

  return (
    <>

      <div>
        <div >
        <div className="">
            <div className="flex justify-center ">
            <Intro/>
            </div>
<Outlet/>
          {/* <Request/> */}
    </div>
        </div>
        <div className="flex justify-center my-12">

          <div>
          <ProgressBar/>
          </div>
        </div>
      </div>
    </>
  );
}
