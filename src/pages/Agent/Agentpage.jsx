import { Outlet } from "react-router-dom";
import Intro from "./intro";

const Agent = ({user}) => {
    return ( <>
    <div>
        <div className="flex justify-center">
            <Intro users={user}/>
        </div>
        <div>
            <Outlet/>
        </div>
    </div>
    </> );
}

export default Agent;