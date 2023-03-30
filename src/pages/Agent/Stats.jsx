import AllInfo from "./statscomponents/allinfo";
import Filter from "./statscomponents/filter";
import Summary from "./statscomponents/sumamry";

function Stats() {
    return ( <>

    <div className="flex justify-center ">
        <div className=" w-[40em]">
        <h1>HISTORY</h1>
        <div>
<Summary/>
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