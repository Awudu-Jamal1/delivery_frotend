export default function Tracking(){
    return(
        <div  className="flex justify-center ">
            <div className="intro pl-20 max-sm:pl-0">
            <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-2   ">
                <div className="col-span-2 "><input className=" w-full h-12 bg-[#f7fff7] text-[#000] font-bold px-4 placeholder-[#000] placeholder-opacity-100" placeholder="TRACK ID" type="text" /></div>
                <div className="max-sm:pl-36  "><button className="h-12 text-white font-bold w-36 text-center bg-red-500 hover:bg-[#023e8a]">TRACK</button></div>
            </div>
            <div className="font-bold py-4 text-right pr-20 max-sm:pr-0">DELIVERY HISTORY</div>
            </div>
          </div>
    )
}