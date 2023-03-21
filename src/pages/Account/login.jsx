import { Link } from "react-router-dom"

export default function Login (){
    const style = "mt-2 block w-full h-10 order-0 px-3 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  "
    const labels ="block text-md font-bold"
    const drop ="mt-2  w-36 px-2 h-10 order-0 px-5 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-md sm:leading-6  "
    return(
        <>

        <div className='flex min-h-full items-center justify-center py-10 '>
        <div className="signup  w-max py-5">
            <div className="text-left">
                <h1 className="font-bold px-20">Login to your Quickly Account </h1>
            </div>
            <div>
                <form action="" method="post" className="py-5 px-16">
                    <div className="py-2">
                        <label htmlFor="" className={labels}>Email Address</label>
                        <input type="email" className={style} placeholder="Enter Email Address" />
                    </div>
                    <div className="py-2">
                        <label htmlFor="" className={labels}>Password</label>
                        <input type="password" className={style} placeholder="Enter Password" />
                    </div>
                    <div className="py-2">
                        <label htmlFor="" className={labels}>Select Status:  </label>
                        <select name="status" className={drop} id="status">
                            <option value="User">User</option>
                            <option value="Merchant">Merchant</option>
                            <option value="Agent">Agent</option>
                        </select>
                    </div>
                    <div className="flex justify-between">
                        <div>Remember Me</div>
                        <div><Link>Forgot Password</Link></div>
                    </div>

                    <div className=" flex py-5 justify-center">
                        <button className="w-40  text-center h-10 bg-red-500 text-white">Sign In</button>
                    </div>
                </form>
                <div className="text-center">Dont have an account yet? <span className="font-bold">Sign Up</span></div>

            </div>
        </div>
        </div>


        </>
    )
}