import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser, setTokens } from "../../features/userAcc/users";
import UserAuthenticate from "../../services/UserAuthenticate";
import { SpinnerCircular } from "spinners-react";
import { useState } from "react";

export default function Login() {
  const dispatch = useDispatch();
  const using = useSelector(selectUser);
  const navigate = useNavigate();
  const [shows, setShow] = useState(false);
  const [wrong, setWrong] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const estyle =
    "mt-2 block w-full order-0 px-3 bg-rose-100 py-1.5 text-gray-900 ring-1 ring-inset ring-red-600 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6";
  const style =
    "mt-2 block w-full h-10 order-0 px-3 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6";
  const labels = "block text-md font-bold";
  const drop =
    "mt-2 w-36 px-2 h-10 order-0 px-5 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-md sm:leading-6";

  const onSubmit = async (data) => {
    const payload = {
      role: data.Status,
      email: data.email,
      password: data.password,
    };

    setShow(true);
    try {
      const response = await UserAuthenticate.logins(payload);
      dispatch(login(response.data.user));
      dispatch(setTokens(response.data.token));
      navigate("/");
    } catch (error) {
      setWrong("User login error: " + (error.response?.data?.message || error.message));
    } finally {
      setShow(false);
      reset();
    }
  };

  return (
    <div className="flex min-h-full items-center justify-center py-10">
      <div className="signup w-max py-5">
        <div className="text-left">
          <h1 className="font-bold text-center text-[2em] px-20">
            Login to your Quickly Account
          </h1>
        </div>
        {wrong && (
          <div className="text-rose-600 font-bold text-[0.8em] px-2 py-1">
            {wrong}
          </div>
        )}
        <form className="py-5 px-16" onSubmit={handleSubmit(onSubmit)}>
          <div className="py-2">
            <label htmlFor="email" className={labels}>
              Email Address
            </label>
            <input
              id="email"
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
              <p className="text-rose-600 font-bold text-[0.8em] px-2 py-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="py-2">
            <label htmlFor="password" className={labels}>
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register("password", {
                required: "Enter Password",
                minLength: {
                  value: 8,
                  message: "Password is short. Minimum length is 8",
                },
                pattern: {
                  value:
                    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/,
                  message:
                    "Password must include at least one numeric digit and a special character",
                },
              })}
              autoComplete="off"
              className={errors.password ? estyle : style}
              placeholder="Enter your Password"
            />
            {errors.password && (
              <p className="text-rose-600 font-bold text-[0.8em] px-2 py-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="py-2">
            <label htmlFor="status" className={labels}>
              Select Status:
            </label>
            <select id="status" {...register("Status")} className={drop}>
              <option value="Customer">Customer</option>
              <option value="Agent">Agent</option>
            </select>
          </div>
          <div className="flex justify-between">
            <div>
              <Link to="/forgot-password">Forgot Password</Link>
            </div>
          </div>
          <div className="flex py-5 justify-center">
            {!shows ? (
              <button
                type="submit"
                className="w-40 text-center h-10 bg-red-500 text-white"
              >
                Sign In
              </button>
            ) : (
              <button className="w-40 text-center flex justify-center h-10 bg-red-500 text-white">
                <SpinnerCircular color="#ffff" size="1.5em" thickness={400} />
              </button>
            )}
          </div>
        </form>
        <div className="text-center">
          Don't have an account yet?{" "}
          <Link to="/signup" className="font-bold">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
