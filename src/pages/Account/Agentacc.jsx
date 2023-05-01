import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import UserAuthenticate from "../../services/UserAuthenticate";
import { useState } from "react";
import { SpinnerCircular } from 'spinners-react';

export default function AgentAcc() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  let navigate = useNavigate();
  const [shows,setShow]=useState(false)

  const style =
    "mt-2 block w-full order-0 px-3 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  ";
  const estyle =
    "mt-2 block w-full order-0 px-3 bg-rose-100 py-1.5 text-gray-900 ring-1 ring-inset ring-red-600 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  ";

  const labels = "block text-md font-bold";
  return (
    <>
      <div className="border w-[45em] signup py-2  px-8">
        <div className="text-center">
          <h1 className="text-3xl py-3 font-bold">Create A Agent Account</h1>
          <p className="px-16 py-5">
            Lorem ipsum dolor sit amet consrecusandae soluta voluptatem illo!
            Consequuntur, expedita?
          </p>
        </div>
        <div>
          <form action="" className="max-sm:text-[0.9em]" method="post">
            <div className="grid grid-cols-2 gap-10 py-2">
              <div className=" ">
                <label htmlFor="" className={labels}>
                  First Name
                </label>
                <input
                  {...register("firsts", { required: "Enter first name" })}
                  name
                  type="text"
                  className={errors.firsts ? estyle : style}
                  placeholder="Enter your First Name"
                />
                {errors.firsts && (
                  <p className="text-rose-600 font-bold text-[0.8em] px-2 py-1 ">
                    {errors.firsts?.message}
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
            <div className="grid grid-cols-3 gap-10 py-2">
              <div className=" ">
                <label className={labels}>Phone Number</label>
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
                <label className={labels}>Address</label>
                <input
                  type="text"
                  {...register("address", { required: "Enter Address" })}
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
              <div className=" ">
                <label htmlFor="" className={labels}>
                  Vehicle Number
                </label>
                <input
                  type="text"
                  {...register("vehicle", { required: "Enter Vehicle Number" })}
                  className={errors.vehicle ? estyle : style}
                  placeholder="Enter Vehicle Number "
                />
                {errors.lastname && (
                  <p className="text-rose-600 font-bold text-[0.8em] px-2 py-1 ">
                    {" "}
                    {errors.vehicle?.message}
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
            {!shows?<button
              className="w-30 py-3 px-3"
              onClick={handleSubmit(async (data) => {
                console.log(data);
                let datas = {
                  User: {
                    role: "Agent",
                    firstName: data.firsts,
                    lastName: data.lastname,
                    email: data.email,
                    password: data.password,
                    phone: data.phone,
                    address: data.address,
                  },
                  roles: {
                    vehicle_number: data.vehicle,
                  },
                };
setShow(true)
                try {
                  console.log(datas);
                  let response = (await UserAuthenticate.register(datas)).data;
                  navigate("/signin");
                } catch (error) {
                  console.log("User create error");
                }finally{setShow(false)}
              })}
            >
              Create Account
            </button>:<button className="w-40  text-center flex justify-center h-10  bg-red-500 text-white">
                <SpinnerCircular color="#ffff" size='1.5em' thickness='400'/>
                </button>}
          </div>
        </div>
      </div>
    </>
  );
}
