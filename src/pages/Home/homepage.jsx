import Navbar from "../../components/Navbar"
import deli    from "../../assets/delivery.jpg"
import Service from "./Service"

const Homepage=()=>{
    return(
        <div className="relative isolate px-6 pt-14 lg:px-8">
<div class="grid grid-cols-2 md:grid-cols-2 max-sm:grid-cols-1 gap-3 px-6 py-9 ">
  <div className="content-center self-center " > <div className="text-4xl leading-snug text-center font-bold ">
    Fastest delivery Service ff Across Ghana</div> </div>
  <div>
    <img src={deli} alt="" />
  </div>
</div>

<Service/>

</div>
    )
}

export default Homepage