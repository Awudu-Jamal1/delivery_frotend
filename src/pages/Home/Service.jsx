import { BiUserCircle } from 'react-icons/bi';
import {TbTruckDelivery } from 'react-icons/tb';
import { AiOutlineShop} from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const Service=()=>{
    let grid ="my-4 shadow-md bg-red-500 shadow-blue-100 back"
    return(
        <div >
            <div className="grid px-6 grid-cols-3 max-sm:grid-cols-1 text-center gap-6 join">
                <div className={grid}>

                    <div className="flex justify-center items-center h-20  py-2">
                    <BiUserCircle className=' text-[4em]  '/></div>
                    <p className="px-4 leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                        facere quasi eius. Sunt cum, delectus, voluptas necessitatibus earum
                         placeat nemo corporis, animi dolorem alias vitae pariatur
                         mollitia laboriosam provident reiciendis.</p>
                         <NavLink to="/signup/user">     <button className="my-5  bg-red-500">Join As User</button>
                    </NavLink>

                </div>
                {/* <div className={grid}>

                    <div className="flex justify-center items-center h-20  py-3">
                  <AiOutlineShop className='text-[4em]'/> </div>
                    <p className="px-4 leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                        facere quasi eius. Sunt cum, delectus, voluptas necessitatibus earum
                         placeat nemo corporis, animi dolorem alias vitae pariatur
                         mollitia laboriosam provident reiciendis.</p>
                         <NavLink to="/signup/merchant">   <button className="my-5  bg-red-500">Join As Merchant</button>
                    </NavLink>

                </div> */}

                <div className={grid}>

                    <div className="flex justify-center items-center h-20  py-3">

                       <TbTruckDelivery className='text-[4em]'/></div>
                       <p className="px-4 leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                        facere quasi eius. Sunt cum, delectus, voluptas necessitatibus earum
                         placeat nemo corporis, animi dolorem alias vitae pariatur
                         mollitia laboriosam provident reiciendis.</p>
                         <NavLink to="/signup/agent">
                <button className="my-5  bg-red-500">Join As Rider</button>
                </NavLink>

                </div>
            </div>
        </div>
    )
}
export default Service