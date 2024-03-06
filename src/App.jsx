import React, { Suspense } from "react";
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userAcc/users";

import "./App.css";

function App() {
  const logged = useSelector(selectUser);
  const user = logged;
  const status = user?.role === "Agent" ? true : false;
  const agentId = user?.Agents ? user?.Agents[0]?.id : '';

  // Dynamic imports for components
  const Navbar = React.lazy(() => import("./components/Navbar"));
  const SignUp = React.lazy(() => import("./pages/Account/SignUp"));
  const Homepage = React.lazy(() => import("./pages/Home/homepage"));
  const Layout = React.lazy(() => import("./components/Layout"));
  const ErrorPage = React.lazy(() => import("./components/Errorpage"));
  const Login = React.lazy(() => import("./pages/Account/login"));
  const Userpage = React.lazy(() => import("./pages/customer/Userpage"));
  const Tracking = React.lazy(() => import("./pages/customer/tracking"));
  const Request = React.lazy(() => import("./pages/customer/Request"));
  const Agent = React.lazy(() => import("./pages/Agent/Agentpage"));
  const Requests = React.lazy(() => import("./pages/Agent/Requests"));
  const Stats = React.lazy(() => import("./pages/Agent/Stats"));
  const User = React.lazy(() => import("./pages/Account/User"));
  const AgentAcc = React.lazy(() => import("./pages/Account/Agentacc"));
  const MerchantAcc = React.lazy(() => import("./pages/Account/Merchantacc"));
  const LoggedUser = React.lazy(() => import("./components/loggedUser"));
  const AuthProvider = React.lazy(() => import("./util/auth"));
  const ProtectedRoute = React.lazy(() => import("./util/protect"));
  const Landing = React.lazy(() => import("./components/Landing"));
  const parceltransfer = React.lazy(() => import("./services/parceltransfer"));
  const Activate = React.lazy(() => import("./pages/Agent/activate"));
  const Progressin = React.lazy(() => import("./pages/customer/Progressin"));

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route>
          <Route element={<Layout />} errorElement={<ErrorPage />}>
            <Route
              element={
                <Landing
                  users={user}
                />
              }
              path="/"
            >
              {status ? (
                <Route
                  element={
                    <Suspense fallback={<div>Loading...</div>}>
                      <AuthProvider user={!!user && user?.role === "Agent"} />
                    </Suspense>
                  }
                >
                  <Route
                    index
                    element={
                      <Suspense fallback={<div>Loading...</div>}>
                        <Requests user={user} />
                      </Suspense>
                    }
                    loader={async () => {
                      return (await parceltransfer.getall()).data;
                    }}
                  />
                  <Route
                    path="request"
                    element={
                      <Suspense fallback={<div>Loading...</div>}>
                        <Activate />
                      </Suspense>
                    }
                    loader={async () => {
                      return (await parceltransfer.active({ id: agentId })).data;
                    }}
                  />
                  <Route
                    path="stats"
                    element={
                      <Suspense fallback={<div>Loading...</div>}>
                        <Stats />
                      </Suspense>
                    }
                    loader={async () => {
                      return (await parceltransfer.historyA({ id: agentId })).data;
                    }}
                  />
                </Route>
              ) : (
                <Route
                  element={
                    <Suspense fallback={<div>Loading...</div>}>
                      <AuthProvider
                        user={
                          (!!user && user?.role === "Customer") ||
                          user?.role === "Merchant"
                        }
                      />
                    </Suspense>
                  }
                >
                  <Route
                    index
                    element={
                      <Suspense fallback={<div>Loading...</div>}>
                        <Tracking user={user} />
                      </Suspense>
                    }
                  />
                  <Route
                    path="request"
                    element={
                      <Suspense fallback={<div>Loading...</div>}>
                        <Request user={user} />
                      </Suspense>
                    }
                  />
                </Route>
              )}
            </Route>
            <Route
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <AuthProvider
                    user={
                      (!!user && user?.role === "Customer") ||
                      user?.role === "Merchant"
                    }
                  />
                </Suspense>
              }
            >
              <Route
                path="progessing"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Progressin />
                  </Suspense>
                }
              />
            </Route>

            <Route
              path="signin"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Login />
                </Suspense>
              }
              errorElement={
                <Suspense fallback={<div>Loading...</div>}>
                  <ErrorPage />
                </Suspense>
              }
            />

            <Route
              path="signup"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <SignUp />
                </Suspense>
              }
            >
              <Route
                path="user"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <User />
                  </Suspense>
                }
              />
              <Route
                path="merchant"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <MerchantAcc />
                  </Suspense>
                }
              />
              <Route
                path="agent"
                errorElement={
                  <Suspense fallback={<div>Loading...</div>}>
                    <ErrorPage />
                  </Suspense>
                }
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <AgentAcc />
                  </Suspense>
                }
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