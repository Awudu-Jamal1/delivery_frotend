import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from  '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { SlWallet  } from "react-icons/sl";

import { useDispatch,useSelector } from "react-redux";
import { login, logout, setTokens ,loggin} from '../features/userAcc/users';


const navigation = [
  { name: 'About', href: 'about' },
  // { name: 'Pricing', href: 'pricing' },
  // { name: 'Tracking', href: '#' },
  { name: 'Contact', href: '#' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const dispatch = useDispatch();
  const logof = useSelector(loggin)
  console.log(logof)

  return (
    <div className="">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <h1>Logo</h1>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link key={item.name} to={item.href} className="text-sm font-semibold leading-6 ">
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden   lg:flex lg:flex-1 lg:justify-end">
            <div className='flex  justify-around  items-center w-2/4'>
            {/* <div className='text-sm font-semibold leading-6'>
            {logof &&<div className='pl-1'>
            <SlWallet className=''/>
            </div>}

            <div className=''>0.00</div>
            </div> */}

            {!logof && <Link to='signin' className="text-sm font-semibold leading-6">

              Log in <span aria-hidden="true">&rarr;</span>
            </Link>}

            </div>
            {logof && <div><button onClick={()=>{
dispatch(logout(null))

            }}>Logout</button></div>}
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-50 overflow-y-auto bg-[#edf6f9] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <h1>Logo</h1>

              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7  hover:bg-my-blue hover:text-white"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  {/* {logof &&<div className='-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 hover:bg-my-blue hover:text-white'>
                    <SlWallet/>
                    <span>0.00</span>
                  </div>} */}
                  {!logof &&<Link
                    to='signin'
                    className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 hover:bg-my-blue hover:text-white"
                  >
                    Log in
                  </Link>}
                  {logof && <div><button onClick={()=>{
dispatch(logout(null))

            }}>Logout</button></div>}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      </div>
      )}