import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
    return(
         <div>
      <Navbar/>
      {/* <Homepage/> */}
      <main className="relative isolate px-6 pt-14 lg:px-8 ">
      <Outlet/>
      </main>

    </div>
    )}