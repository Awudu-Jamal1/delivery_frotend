import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import UserAuthenticate from "../../services/UserAuthenticate";
import { useState } from "react";
import { SpinnerCircular } from 'spinners-react';

export default function AgentAcc() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const navigate = useNavigate();
  const [shows, setShow] = useState(false);

  const style =
    "mt-2 block w-full px-3 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6";
  const estyle =
    "mt-2 block w-full px-3 py-1.5 text-gray-900 bg-rose-100 ring-1 ring-inset ring-red-600 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6";

  const labels = "block text-md font-bold";

  const onSubmit = async (data) => {
    const payload = {
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

    setShow(true);
    try {
      let response = (await UserAuthenticate.register(payload)).data;
      navigate("/signin");
    } catch (error) {
      console.error("User create error:", error);
    } finally {
      setShow(false);
    }
  };

  return (
    <div className="border w-[45em] signup py-2 px-8">
      <div className="text-center">
        <h1 className="text-3xl py-3 font-bold">Create A Agent Account</h1>
        <p className="px-16 py-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, expedita?
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="max-sm:text-[0.9em]" method="post">
        <div className="grid grid-cols-2 gap-10 py-2">
          <div>
            <label htmlFor="firsts" className={labels}>First Name</label>
            <input
              {...register("firsts", { required: "Enter first name" })}
              type="text"
              className={errors.firsts ? estyle : style}
              placeholder="Enter your First Name"
            />
            {errors.firsts && <p className="text-rose-600 font-bold text-[0.8em] px-2 py-1">{errors.firsts.message}</p>}
          </div>
          <div>
            <label htmlFor="lastname" className={labels}>Last Name</label>
            <input
              {...register("lastname", { required: "Enter Last name" })}
              type="text"
              className={errors.lastname ? estyle : style}
              placeholder="Enter your Last Name"
            />
            {errors.lastname && <p className="text-rose-600 font-bold text-[0.8em] px-2 py-1">{errors.lastname.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 py-2">
          <div>
            <label htmlFor="email" className={labels}>Email Address</label>
            <input
              {...register("email", {
                required: "Enter Email",
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Wrong email format",
                },
              })}
              type="email"
              className={errors.email ? estyle : style}
              placeholder="Enter your Email Address"
            />
            {errors.email && <p className="text-rose-600 font-bold text-[0.8em] px-2 py-1">{errors.email.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-10 py-2">
          <div>
            <label htmlFor="phone" className={labels}>Phone Number</label>
            <input
              {...register("phone", { required: "Enter Phone number" })}
              type="text"
              className={errors.phone ? estyle : style}
              placeholder="Enter your Phone"
            />
            {errors.phone && <p className="text-rose-600 font-bold text-[0.8em] px-2 py-1">{errors.phone.message}</p>}
          </div>
          <div>
            <label htmlFor="address" className={labels}>Address</label>
            <input
              {...register("address", { required: "Enter Address" })}
              type="text"
              className={errors.address ? estyle : style}
              placeholder="Enter Business Address"
            />
            {errors.address && <p className="text-rose-600 font-bold text-[0.8em] px-2 py-1">{errors.address.message}</p>}
          </div>
          <div>
            <label htmlFor="vehicle" className={labels}>Vehicle Number</label>
            <input
              {...register("vehicle", { required: "Enter Vehicle Number" })}
              type="text"
              className={errors.vehicle ? estyle : style}
              placeholder="Enter Vehicle Number"
            />
            {errors.vehicle && <p className="text-rose-600 font-bold text-[0.8em] px-2 py-1">{errors.vehicle.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 py-2">
          <div>
            <label htmlFor="password" className={labels}>Password</label>
            <input
              {...register("password", {
                required: "Enter Password",
                minLength: { value: 8, message: "Password is short. Minimum length is 8" },
                pattern: {
                  value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/,
                  message: "Password must contain at least one numeric digit and a special character",
                },
              })}
              type="password"
              className={errors.password ? estyle : style}
              placeholder="Enter your Password"
            />
            {errors.password && <p className="text-rose-600 font-bold text-[0.8em] px-2 py-1">{errors.password.message}</p>}
          </div>
          <div>
            <label htmlFor="compare" className={labels}>Confirm Password</label>
            <input
              {...register("compare", {
                required: "Confirm Password",
                minLength: { value: 8, message: "Password is short. Minimum length is 8" },
                validate: (val) => val === watch("password") || "Your Passwords do not match",
              })}
              type="password"
              className={errors.compare ? estyle : style}
              placeholder="Confirm Password"
            />
            {errors.compare && <p className="text-rose-600 font-bold text-[0.8em] px-2 py-1">{errors.compare.message}</p>}
          </div>
        </div>

        <div className="flex justify-center py-6">
          {!shows ? (
            <button type="submit" className="w-30 py-3 px-3 bg-blue-500 text-white font-bold rounded">
              Create Account
            </button>
          ) : (
            <div className="w-40 text-center flex justify-center h-10 bg-red-500 text-white rounded">
              <SpinnerCircular color="#ffffff" size="1.5em" thickness="400" />
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
