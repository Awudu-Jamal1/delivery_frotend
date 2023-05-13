import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import SignUp from "./pages/Account/SignUp";
import Homepage from "./pages/Home/homepage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Router,
  RouterProvider,
  Routes,

  // BrowserRouter as Router,Routes,Route,
} from "react-router-dom";
import Layout from "./components/Layout";
import ErrorPage from "./components/Errorpage";
import Login from "./pages/Account/login";
import Userpage from "./pages/customer/Userpage";
import Tracking from "./pages/customer/tracking";
import Request from "./pages/customer/Request";
import Agent from "./pages/Agent/Agentpage";
import Requests from "./pages/Agent/Requests";
import Stats from "./pages/Agent/Stats";
import User from "./pages/Account/User";
import AgentAcc from "./pages/Account/Agentacc";
import MerchantAcc from "./pages/Account/Merchantacc";
import LoggedUser from "./components/loggedUser";
import AuthProvider from "./util/auth";
import ProtectedRoute from "./util/protect";
import Landing from "./components/Landing";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userAcc/users";
import parceltransfer from "./services/parceltransfer";
import Activate from "./pages/Agent/activate";
import Progressin from "./pages/customer/Progressin";

function App() {
  let logged = useSelector(selectUser);
  const user = logged;

  const status = user?.role === "Agent" ? true : false;
  // const statusid = user?.Customers[0]?.id;
const agentId =user?.Agents ? user?.Agents[0]?.id : ''

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route>
          <Route element={<Layout />} errorElement={<ErrorPage />}>
            <Route
              element={
                <Landing
                  // loader={async () => {
                  //   const response = await parceltransfer.getTransaction({
                  //     Id: statusid,
                  //     type: user?.role,
                  //   });
                  //   return response;
                  // }}
                  users={user}
                />
              }
              path="/"
            >
              {status ? (
                <Route
                  element={
                    <AuthProvider user={!!user && user?.role === "Agent"} />
                  }
                >
                  <Route
                    index
                    element={<Requests user={user}  />}
                    loader={async () => {
                      return (await parceltransfer.getall()).data;
                    }}
                  />
                  <Route
                    path="request"
                    element={<Activate  />}
                    loader={async () => {
                      return (await parceltransfer.active({id:agentId})).data;
                    }}
                  />
                  <Route path="stats" element={<Stats />}
                    loader={async () => {
                      return (await parceltransfer.historyA({id:agentId})).data;
                    }} />
                </Route>
              ) : (
                <Route
                  element={
                    <AuthProvider
                      user={
                        (!!user && user?.role === "Customer") ||
                        user?.role === "Merchant"
                      }
                    />
                  }
                >
                  <Route index element={<Tracking users={user} />} />
                  <Route path="request" element={<Request user={user} />} />

                </Route>
              )}{" "}
            </Route>
            <Route
                  element={
                    <AuthProvider
                      user={
                        (!!user && user?.role === "Customer") ||
                        user?.role === "Merchant"
                      }
                    />
                  }
                >
                  <Route path="progessing" element={<Progressin />} />
                </Route>

            <Route
              path="signin"
              element={<Login />}
              errorElement={<ErrorPage />}
            />

            <Route path="signup" element={<SignUp />}>
              <Route path="user" element={<User />} />
              <Route path="merchant" element={<MerchantAcc />} />
              <Route
                path="agent"
                errorElement={<ErrorPage />}
                element={<AgentAcc />}
              />
            </Route>
          </Route>
        </Route>
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
