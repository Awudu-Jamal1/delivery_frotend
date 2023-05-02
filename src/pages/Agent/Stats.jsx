import { useLoaderData } from "react-router-dom";
import AllInfo from "./statscomponents/allinfo";
import Filter from "./statscomponents/filter";
import Summary from "./statscomponents/sumamry";

function Stats() {
        const data = useLoaderData();
        console.log(data.orders)
const filterData = data.orders.filter(e=> e.status == 5)
console.log(filterData)

    return ( <>

    <div className="flex justify-center ">
        <div className=" w-[40em]">
        <h1>HISTORY</h1>
        <div>
<Summary info={filterData}/>
        </div>
        <div className="flex py-4 justify-between ">
        <div className=""><Filter/></div>
        <div><input type="text" placeholder="Search" className="h-10 placeholder:text-black px-3" /></div>
        </div>
        <div>
<AllInfo/>
        </div>

        </div>
        </div></> );
}

export default Stats;