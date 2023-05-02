function Summary({info}) {
    let title ='text-[0.6em] font-bold pl-2 py-1'
    let numbers ='flex justify-center font-bold text-3xl py-6'
const  numDeli = info.length !== 0? info.length:0
    return ( <>
    <div className=""><h1>Summary</h1>
    <div className="grid grid-cols-3 gap-5  ">
        <div className="bg-[#f7fff7]"><p className={title}>TOTAL ACCEPTED ORDERS</p><p className={numbers}>{numDeli}</p></div>
        <div className="bg-[#f7fff7]"><p className={title}>TOTAL ACCEPTED ORDERS</p><p className={numbers}>2000</p></div>
        <div className="bg-[#f7fff7]"><p className={title} >TOTAL ACCEPTED ORDERS</p><p className={numbers}> 2000</p></div>
    </div>

    </div></> );
}

export default Summary;