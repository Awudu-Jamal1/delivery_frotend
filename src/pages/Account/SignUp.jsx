import { LockClosedIcon } from '@heroicons/react/20/solid'

export default function SignUp (){
    return(
        // <div className="relative isolate px-6 pt-14 lg:px-8"> Signiiing</div>
        <>

        <div className="flex   relative isolate px-6 pt-14 lg:px-8 items-center justify-center  ">
          <div className="w-full bg-white py-5 my-5 max-w-3xl space-y-8">
            <div>
              <img
                className="mx-auto h-12 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
              <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                Sign in to your account
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                Or{' '}
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  start your 14-day free trial
                </a>
              </p>
            </div>
            <form className=" mt-8 space-y-6  account px-4" action="#" method="POST">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="grid grid-cols-2 gap-5">
              {/* -space-y-px rounded-md shadow-sm */}
                <div>
                  <label  >
                    First Name
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"

                    required
                    className="relative block w-full  border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                  />
                </div>
                <div>
                  <label >
                    Last Name
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="text"

                    required
                    className="relative block w-full  border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
              {/* -space-y-px rounded-md shadow-sm */}
                <div>
                  <label  >
                    Email
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    required
                    className="relative block w-full border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10  px-2  sm:text-sm sm:leading-6"

                  />
                </div>
                <div>
                  <label >
                    Address
                  </label>
                  <input

                    name="address"
                    type="text"

                    required
                    className="relative block w-full  border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
              {/* -space-y-px rounded-md shadow-sm */}
                <div>
                  <label  >
                    Phone Number
                  </label>
                  <input
                    id="email-address"
                    name="telephone"
                    type="tel"

                    required
                    className="relative block w-full border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                  />
                </div>
                <div>
                  <label >
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="relative block w-full  border-0 py-1.5 text-gray-900 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div className='text-center'>
                <button
                text-center
                  type="submit"
                  className="group relative  rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >

                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    )
}