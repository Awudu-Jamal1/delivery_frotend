import { Outlet } from "react-router-dom";
import accounting from "../../assets/accounting.svg";
import Intro from "./intro";
import NoService from "./progress/Noservice";
import ProgressBar from "./progress/ProgressBar";
import Request from "./Request";
import Tracking from "./tracking";

export default function Userpage({user}) {
const users= user.role ==='Merchant' ? user?.Merchant[0]?.id : user?.Customers[0]?.id
console.log(user.role)
  return (
    <>

      <div>
        <div >
        <div className="">
            <div className="flex justify-center ">
            <Intro user={user}/>
            </div>
<Outlet/>
          {/* <Request/> */}
    </div>
        </div>
        <div className="flex justify-center my-12">

          <div>
          <ProgressBar id={users} type={user.role}/>
          </div>
        </div>
      </div>
    </>
  );
}
