import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch,useSelector } from "react-redux";
import { login,selectUser,setTokens } from "../../features/userAcc/users";
import UserAuthenticate from "../../services/UserAuthenticate";



export default function Login() {
    let dispatch =useDispatch()
    let using = useSelector(selectUser)
    let navigate = useNavigate()

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
            <h1 className="font-bold px-20">Login to your Quickly Account </h1>

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
                  <option value="Customer">User</option>
                  <option value="Merchant">Merchant</option>
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
                <button
                  className="w-40  text-center h-10 bg-red-500 text-white"
                  onClick={handleSubmit(async (data) => {

                    let datas = {
                      role: "Customer",
                      email: data.email,
                      password: data.password,
                    };

                    try {
                      let response = (await UserAuthenticate.logins(datas)).data


                      dispatch(login(response.user))
                      dispatch(setTokens(response.token))
                      navigate('/')
                    //   login.
                    } catch (error) {
                      console.log("User Login error");

                    }
                  })}
                >
                  Sign In
                </button>
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
