import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector, useStore } from "react-redux";
import { login, selectUser, setTokens } from "../../features/userAcc/users";
import UserAuthenticate from "../../services/UserAuthenticate";
import { SpinnerCircular } from "spinners-react";
import { useState } from "react";

export default function Login() {
  let dispatch = useDispatch();
  let using = useSelector(selectUser);
  let navigate = useNavigate();
  const [shows, setShow] = useState(false);
  const [wrong, setWrong] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const estyle =
    "mt-2 block w-full order-0 px-3 bg-rose-100 py-1.5 text-gray-900 ring-1 ring-inset ring-red-600 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  ";

  const style =
    "mt-2 block w-full h-10 order-0 px-3 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  ";
  const labels = "block text-md font-bold";
  const drop =
    "mt-2  w-36 px-2 h-10 order-0 px-5 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-md sm:leading-6  ";
  return (
    <>
      <div className="flex min-h-full items-center justify-center py-10 ">
        <div className="signup  w-max py-5">
          <div className="text-left">
            <h1 className="font-bold text-center text-[2em] px-20">Login to your Quickly Account </h1>
          </div>
          <div className="text-rose-600 font-bold text-[0.8em] px-2 py-1">
            {wrong}
          </div>
          <div>
            <form action="" method="post" className="py-5 px-16">
              <div className="py-2">
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
              <div className="py-2">
                <label htmlFor="" className={labels}>
                  Password
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Enter Password",
                    minLength: {
                      value: 6,
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
              <div className="py-2">
                <label htmlFor="" className={labels}>
                  Select Status:{" "}
                </label>
                <select {...register("Status")} id="status">
                  <option value="Customer">Customer</option>
                  <option value="Agent">Agent</option>
                </select>
              </div>
              <div className="flex justify-between">
                <div>Remember Me</div>
                <div>
                  <Link>Forgot Password</Link>
                </div>
              </div>

              <div className=" flex py-5 justify-center">
                {!shows ? (
                  <button
                    className="w-40  text-center h-10 bg-red-500 text-white"
                    onClick={handleSubmit(async (data) => {
                      console.log(data);

                      let datas = {
                        role: data.Status,
                        email: data.email,
                        password: data.password,
                      };
                      setShow(true);
                      try {
                        let response = (await UserAuthenticate.logins(datas))
                          .data;

                        dispatch(login(response.user));
                        dispatch(setTokens(response.token));

                        navigate("/");
                        //   login.
                      } catch (error) {
                        console.log("User Login error");
                        setWrong(error);
                      } finally {
                        setShow(false);
                      }
                    })}
                  >
                    Sign In
                  </button>
                ) : (
                  <button className="w-40  text-center flex justify-center h-10  bg-red-500 text-white">
                    <SpinnerCircular
                      color="#ffff"
                      size="1.5em"
                      thickness="400"
                    />
                  </button>
                )}
              </div>
            </form>
            <div className="text-center">
              Dont have an account yet?{" "}
              <span className="font-bold">Sign Up</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
