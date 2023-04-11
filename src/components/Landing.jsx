import Agent from "../pages/Agent/Agentpage";
import Homepage from "../pages/Home/homepage";
import Userpage from "../pages/customer/Userpage";


function Landing({users}) {


    const status = users?.role ==="Agent"?<Agent user={users}/>:<Userpage user={users}/>

    return ( <>
    {users?status:<Homepage/>}

    </> );
}

export default Landing;