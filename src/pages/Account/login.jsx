export default function Login (){
    const style = "mt-2 block w-full h-14 order-0 px-3 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  "
    const labels ="block text-md font-bold"
    return(
        <>
        <div className="signup  w-max py-5">
            <div className="text-center">
                <h1 className="font-bold px-20">Login to your Quickly Account </h1>
            </div>
            <div>
                <form action="" method="post" className="py-5 px-10">
                    <div className="py-4">
                        <label htmlFor="" className={labels}>Email Address</label>
                        <input type="email" className={style} placeholder="Enter Email Address" />
                    </div>
                    <div className="py-4">
                        <label htmlFor="" className={labels}>Password</label>
                        <input type="password" className={style} placeholder="Enter Password" />
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}