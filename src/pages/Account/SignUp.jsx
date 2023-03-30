import { LockClosedIcon } from '@heroicons/react/20/solid'
import { Outlet } from 'react-router-dom'
import Login from './login'
import User from './User'

export default function SignUp (){
    return(
       <>
        <div className='flex min-h-full items-center justify-center py-10 '>
        <Outlet/>

        </div>



       </>
    )
}