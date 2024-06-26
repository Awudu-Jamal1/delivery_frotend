import { useState } from "react";
import { useForm } from "react-hook-form";
import axios, { Axios } from 'axios'
import UserAuthenticate from "../../services/UserAuthenticate";
import { SpinnerCircular } from 'spinners-react';


export default function User() {
  const [shows,setShow]=useState(false)
 const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
//   console.log(errors.compare);
  const style =
    "mt-2 block w-full order-0 px-3 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  ";
  const labels = "block text-md font-bold";
  const estyle =
    "mt-2 block w-full order-0 px-3 bg-rose-100 py-1.5 text-gray-900 ring-1 ring-inset ring-red-600 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  ";

  // console.log(errors.email.message)
  return (
    <>
      <div className="border w-[45em] signup py-2  px-8">
        <div className="text-center">
          <h1 className="text-[2em] py-3 font-bold">Create A Customer Account</h1>
          <p className="px-16 py-5">
            Lorem ipsum dolor sit amet consrecusandae soluta voluptatem illo!
            Consequuntur, expedita?
          </p>
        </div>
        <div>
          <form action="" method="post">
            <div className="grid lg:grid-cols-2 sm:grid-col-12 gap-10 py-2">
              <div className=" ">
                <label htmlFor="" className={labels}>
                  First Name
                </label>
                <input
                  type="text"
                  {...register("first", { required: "Enter First name" })}
                  className={errors.first ? estyle : style}
                  placeholder="Enter your Last Name"
                />
                {errors.first&& (
                  <p className="text-rose-600 font-bold text-[0.8em] px-2 py-1 ">
                    {" "}
                    {errors.first?.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="" className={labels}>
                  Last Name
                </label>
                <input
                  type="text"
                  {...register("lastname", { required: "Enter Last name" })}
                  className={errors.lastname ? estyle : style}
                  placeholder="Enter your Last Name"
                />
                {errors.lastname && (
                  <p className="text-rose-600 font-bold text-[0.8em] px-2 py-1 ">
                    {" "}
                    {errors.lastname?.message}
                  </p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1  py-2">
              <div className=" ">
                <label htmlFor="" className={labels}>
                  Email Address
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Enter Email",
                    pattern: {
                      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                      message: "Wrong email format",
                    },
                  })}
                  className={errors.email ? estyle : style}
                  placeholder="Enter your Email Address"
                />
                {errors.email && (
                  <p className="text-rose-600 font-bold text-[0.8em] px-2 py-1 ">
                    {" "}
                    {errors.email?.message}
                  </p>
                )}
              </div>
            </div>
            <div className="grid lg:grid-cols-2 sm:grid-col-1 gap-10 py-2">
              <div className=" ">
                <label htmlFor="" className={labels}>
                  Phone Number
                </label>
                <input
                  type="text"
                  {...register("phone", {
                    required: "Enter Phone number",
                    min: { value: 10, message: "Wrong Number format" },
                  })}
                  className={errors.phone ? estyle : style}
                  placeholder="Enter your Phone"
                />
                {errors.phone && (
                  <p className="text-rose-600 font-bold text-[0.8em] px-2 py-1 ">
                    {" "}
                    {errors.phone?.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="" className={labels}>
                  Address
                </label>
                <input
                  type="text"
                  {...register("address", { required: "Enter Business Address" })}
                  className={errors.address ? estyle : style}
                  placeholder="Enter Business Address"
                />
                {errors.address && (
                  <p className="text-rose-600 font-bold text-[0.8em] px-2 py-1 ">
                    {" "}
                    {errors.address?.message}
                  </p>
                )}
              </div>
            </div>
            <div className="grid lg:grid-cols-2 sm:grid-col-1 gap-10 py-2">
              <div className=" ">
                <label htmlFor="" className={labels}>
                  Password
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Enter Password",
                    minLength: {
                      value: 8,
                      message: "Password is short.minimum length is 8",
                    },
                    pattern: {
                      value:
                        "/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/",
                      message:
                        "at least one numeric digit and a special character",
                    },
                  })}
                  autoComplete="false"
                  autoSave="false"
                  required
                  className={errors.password ? estyle : style}
                  placeholder="Enter your Password"
                />
                {errors.password && (
                  <p className="text-rose-600 font-bold text-[0.8em] px-2 py-1 ">
                    {" "}
                    {errors.password?.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="" className={labels}>
                  Confirm Password
                </label>
                <input
                  autoComplete="false"
                  {...register("compare", {
                    required: true,
                    minLength: 8,
                    validate: (val) => {
                      if (watch("password") !== val)
                        return "Your Password do not Match";
                    },
                  })}
                  autoSave="false"
                  type="password"
                  className={errors.compare ? estyle : style}
                  placeholder="Confirm Password"
                />
                {errors.compare && (
                  <p className="text-rose-600 font-bold text-[0.8em] px-2 py-1 ">
                    {" "}
                    {errors.compare?.message}
                  </p>
                )}
              </div>
            </div>
          </form>
          <div className="flex justify-center py-6 ">
           {!shows? <button
              className="w-30 py-3 px-3"
              onClick={handleSubmit(async(data) => {
                console.log(data);
                let datas ={"User":{"role":"Customer",
  "firstName":data.first,
  "lastName":data.lastname,
  "email":data.email,
  "password":data.password,
  "phone":data.phone,
  "address":data.address},
  "roles":{}
}
setShow(true)
                try {
                  console.log(datas)
                  let response = (await UserAuthenticate.register(datas)).data
                  console.log(response.user)
                } catch (error) {
                  console.log("User create error")
                }finally{setShow(false)}

              })}
            >
              Create Account
            </button>:<button className="w-40  text-center flex justify-center h-10  bg-red-500 text-white">
                <SpinnerCircular color="#ffff" size='1.5em' thickness='400'/>
                </button>
}          </div>
        </div>
      </div>
    </>
  );
}
