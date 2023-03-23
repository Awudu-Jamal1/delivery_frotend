import { Outlet } from "react-router-dom";
import Intro from "./intro";

const Agent = () => {
    return ( <>
    <div>
        <div className="flex justify-center">
            <Intro/>
        </div>
        <div>
            <Outlet/>
        </div>
    </div>
    </> );
}

export default Agent;