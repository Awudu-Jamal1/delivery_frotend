import Summary from "./statscomponents/sumamry";

function Stats() {
    return ( <>

    <div className="flex justify-center ">
        <div className="border w-[40em]">
        <h1>HISTORY</h1>
        <div>
<Summary/>
        </div>
        </div>
        </div></> );
}

export default Stats;