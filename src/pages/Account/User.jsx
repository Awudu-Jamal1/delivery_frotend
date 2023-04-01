import { useState } from "react";
import { useForm } from "react-hook-form";
import axios, { Axios } from 'axios'


export default function User() {
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
          <h1 className="text-3xl py-3 font-bold">Create A Customer Account</h1>
          <p className="px-16 py-5">
            Lorem ipsum dolor sit amet consrecusandae soluta voluptatem illo!
            Consequuntur, expedita?
          </p>
        </div>
        <div>
          <form action="" method="post">
            <div className="grid grid-cols-2 gap-10 py-2">
              <div className=" ">
                <label htmlFor="" className={labels}>
                  First Name
                </label>
                <input
                  {...register("firstnames", { required: "Enter first name" })}
                  name
                  type="text"
                  className={errors.firstnames ? estyle : style}
                  placeholder="Enter your First Name"
                />
                {errors.firstnames && (
                  <p className="text-rose-600 font-bold text-[0.8em] px-2 py-1 ">
                    {errors.firstname?.message}
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
            <div className="grid grid-cols-2 gap-10 py-2">
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
            <div className="grid grid-cols-2 gap-10 py-2">
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
            <button
              className="w-30 py-3 px-3"
              onClick={handleSubmit(async(data) => {
                console.log(data);
                let datas ={"User":{"role":"Customer",
  "firstName":data.firstnames,
  "lastName":data.lastname,
  "email":data.email,
  "password":data.password,
  "phone":data.phone,
  "address":data.address},
  "roles":{}
}

                try {
                  let response = await axios.post('http://localhost:8081/user',datas)
                } catch (error) {
                  console.log("User create error")
                }

              })}
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
