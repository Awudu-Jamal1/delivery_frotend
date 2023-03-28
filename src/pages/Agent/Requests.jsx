import {TfiPackage} from 'react-icons/tfi'

const Requests = () => {
    let main ='bg-[#f7fff7] px-4 py-1 h-24 rounded-2xl'
    let title ='leading-loose font-bold'
    return ( <>
    <div className="flex justify-center " >
        <div className="border-4 border-current shadow-2xl my-4 px-2">
    <div className=" grid grid-cols-5 gap-5 w-[45em] max-sm:w-[30em] py-5   ">
<div className=''>
    <div className=' h-full flex  justify-center items-center'>
    <div><TfiPackage className=' text center text-6xl'/><p className='block pt-4 font-bold'>5kg</p></div>
    </div>

</div>
<div className='col-span-2 '> <h2 className='pb-2'>Order Details</h2>
    <div className={main}>
        <p className={title}>F12358743</p>
<p className={title}>Awudu Jamal</p>
<p className='leading-loose '>05554526419</p>

    </div>
</div>
<div className='col-span-2' >
     <h2 className='pb-2'>Receiver Details</h2>
    <div className={main}>
        <p className={title}>Ibrahim Manidus</p>
        <p className='leading-loose'>0242515647</p>

    </div>
</div>

    </div>
    <div className='grid grid-cols-5 gap-5 font-bold py-4 px-4'><div><button className='text-[#f7b801] hover:text-[#007200]'>Accept Order</button></div> <div className='col-span-2'>Destination : <span>Tema community 25</span></div>
    <div className='col-span-2'>Destination : <span>Tema Community 10</span></div></div>
    </div>
    </div>
    </> );
}

export default Requests;