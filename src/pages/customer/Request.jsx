import { useState } from "react"

export default function Request(){
    const [next,setNext]=useState(false)
    const [required,setRequired]=useState(false)
    const [requests,setRequests] = useState({
        destination:'',
        locations: '',
        weight:''

    })
    let errors =false
const handleValue=(e)=>{
    let name =e.target.name
    let value =e.target.value
    setRequests(values => ({...values, [name]: value}))
}
console.log(requests)
    const handleChange=()=>{
        const{ destination,locations,weight} =requests

        if(destination === '' || locations ===""||weight===""){
            console.log("error")
        setRequired(true)
        }else{
        setNext(!next)}
    }
    let details ="bg-my-blue text-white py-5 px-4 grid grid-cols-2"
    let h2 ='py-4'
    return(
        <>
        <div className="flex justify-center ">
            <div className=" w-[40em] py-10 px-12 bg-[#f7fff7]">
                <div className="text-center">
                    <h1>{next?'Summary':"Start Request"}</h1>
                </div>
                {next &&<div className="w-full">
                <div>
                    <div className="">
                        <h2 className={h2}>Order Details</h2>
                        <div className={details}>
                            <div>
                            <p className="font-bold py-1">OrderId</p>
                            <p> #2516gghghf</p>
                            </div>
                            <div>
                            <p className="font-bold py-1">Weight</p>
                            <p> 2Kg</p>
                            </div>


                        </div>
                    </div>

                    <div>
                        <h2 className={h2}>Delivery Address</h2>
                        <div className={details}>

                        <div className="">
                            <p className="font-bold py-1">MyLocation</p>
                            <p> Lashibi community 17</p>
                            </div>
                            <div>
                            <p className="font-bold py-1">Destination</p>
                            <p> Mamobi Parliament house</p>
                            </div>
                        </div>
                    </div>


                </div>
                </div>}
                {!next &&<div className="w-full ">
                    {/* <label htmlFor=""></label> */}
                    {required&& <div className="text-rose-600 font-bold text-center py-4"> FILL IN ALL INPUT </div>}


                    <div className="my-5">
                    <input  onChange={handleValue} value={requests.destination} type="text" placeholder="Where is Parcel?" name="destination" id="" className=" px-2 w-full placeholder-[#000] h-12 font-bold " />
                    </div>
                    <div className="my-5">
                    <input value={requests.locations} type="text" onChange={handleValue} placeholder="Parcel Destination?" name="locations" id="" className="h-12 px-2 w-full placeholder-[#000] font-bold" />
                    </div>
                    <div className="my-5">
                    <input value={requests.weight} type="number" onChange={handleValue} placeholder="Weight(kg)" name="weight" id="" className="h-12 px-2 w-full placeholder-[#000] font-bold" />
                    </div>
                    <div onClick={handleChange} className="text-center pt-5 "><button className="bg-green-400 py-2 text-white px-4">Process Request</button></div>
                </div>}
            </div>

        </div>
        </>
    )
}