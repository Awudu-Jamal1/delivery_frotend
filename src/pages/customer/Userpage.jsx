import accounting from "../../assets/accounting.svg";
import Intro from "./intro";

export default function Userpage() {

  return (
    <>

      <div>
        <div >
        <div className="border">
            <div className="flex justify-center ">
            <Intro/>
            </div>

          <div  className="flex justify-center ">
            <div className="border intro">
            <div className="grid grid-cols-3 gap-2 border  ">
                <div className="col-span-2 "><input className=" w-full h-12" type="text" /></div>
                <div className=" border "><button className="h-12 w-16 bg">TRACK</button></div>
            </div>
            <div>History</div>
            </div>
          </div>
    </div>
        </div>
      </div>
    </>
  );
}
