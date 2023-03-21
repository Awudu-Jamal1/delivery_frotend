import accounting from "../../assets/accounting.svg";
import Intro from "./intro";
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

          <Tracking/>
    </div>
        </div>
        <div className="flex justify-center my-12">
          <div><h1 className="font-bold">No Delivery Available </h1></div>
        </div>
      </div>
    </>
  );
}
