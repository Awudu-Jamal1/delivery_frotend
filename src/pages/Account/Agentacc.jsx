export default function AgentAcc (){
    const style = "mt-2 block w-full order-0 px-3 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  "
    const labels ="block text-md font-bold"
    return(

        <>
        <div className="border w-3/5 signup py-2  px-8">
            <div className="text-center">
                <h1 className="text-3xl py-3 font-bold">Create A Agent Account</h1>
                <p className="px-16 py-5">Lorem ipsum dolor sit amet consrecusandae soluta voluptatem illo! Consequuntur, expedita?</p>
            </div>
            <div>
                <form action="" method="post">
                    <div className="grid grid-cols-2 gap-10 py-2">
                        <div className=" ">
                            <label htmlFor="" className={labels}>First Name</label>
                            <input type="text" className={style} placeholder="Enter your First Name" />
                        </div>
                        <div>
                            <label htmlFor=""className={labels}>Last Name</label>
                            <input type="text" className={style} placeholder="Enter your Last Name"/>
                        </div>
                    </div>
                    <div className="grid grid-cols-1  py-2">
                        <div className=" ">
                            <label htmlFor="" className={labels}>Email Address</label>
                            <input type="email" className={style} placeholder="Enter your Email Address"/>
                        </div>

                    </div>
                    <div className="grid grid-cols-2 gap-10 py-2">
                        <div className=" ">
                            <label htmlFor="" className={labels}>Phone Number</label>
                            <input type="text" className={style}  placeholder="Enter your Phone"/>
                        </div>
                        <div>
                            <label htmlFor=""className={labels}>Address</label>
                            <input type="text" className={style}  placeholder="Enter your Address"/>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-10 py-2">
                        <div className=" ">
                            <label htmlFor="" className={labels}>Password</label>
                            <input type="password"  autoComplete="false" autoSave="false" required className={style} placeholder="Enter your Password" />
                        </div>
                        <div>
                            <label htmlFor=""className={labels}>Confirm Password</label>
                            <input autoComplete="false" autoSave="false" type="password" className={style} placeholder="Confirm Password" />
                        </div>
                    </div>
                </form>
                <div className="flex justify-center py-6 "><button className="w-30 py-3 px-3">Create Account</button></div>
            </div>
        </div>
        </>
    )
}