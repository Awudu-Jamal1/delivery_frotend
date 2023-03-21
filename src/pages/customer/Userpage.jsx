import { Outlet } from "react-router-dom";
import accounting from "../../assets/accounting.svg";
import Intro from "./intro";
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
          <div><h1 className="font-bold">No Delivery Available </h1></div>
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 128 128"><path d="M52.77 74.89a2 2 0 0 0 2.83 0l8.4-8.4 8.4 8.4a2 2 0 0 0 2.83-2.83l-8.4-8.4 8.4-8.4a2 2 0 0 0-2.83-2.83l-8.4 8.4-8.4-8.4a2 2 0 0 0-2.83 2.83l8.4 8.4-8.4 8.4a2 2 0 0 0 0 2.83Z"/><path d="m127.11 36.34-24-16A2 2 0 0 0 102 20H2a2 2 0 0 0-1.49.68A2 2 0 0 0 0 22s0 68 0 68a2 2 0 0 0 .89 1.66l24 16A2.29 2.29 0 0 0 26 108h100a2 2 0 0 0 2-2s0-68 0-68a2 2 0 0 0-.89-1.66ZM104 25.74 119.39 36H104Zm-80 76.52L8.61 92H24ZM24 88H4V25.74l20 13.33ZM8.61 24H100v12H26.61ZM100 40v48H28V40Zm-72 64V92h73.39l18 12Zm96-1.74-20-13.33V40h20Z"/></svg>
          </div>
          <div>

          </div>
        </div>
      </div>
    </>
  );
}
