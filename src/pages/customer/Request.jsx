export default function Request(){
    return(
        <>
        <div className="flex justify-center ">
            <div className=" w-[40em] py-10 px-12 bg-[#f7fff7] text-white">
                <div className="text-center">
                    <h1>Start Request</h1>
                </div>
                <div className="w-full ">
                    {/* <label htmlFor=""></label> */}


                    <div className="my-5">
                    <input type="text" placeholder="Where is Parcel?" name="" id="" className=" px-2 w-full placeholder-[#000] h-12 font-bold " />
                    </div>
                    <div className="my-5">
                    <input type="text" placeholder="Parcel Destination?" name="" id="" className="h-12 px-2 w-full placeholder-[#000] font-bold" />
                    </div>
                    <div className="my-5">
                    <input type="text" placeholder="Weight(kg)" name="" id="" className="h-12 px-2 w-full placeholder-[#000] font-bold" />
                    </div>
                    <div className="text-center pt-5 "><button className="bg-green-400 py-2 px-4">Process Request</button></div>
                </div>
            </div>

        </div>
        </>
    )
}