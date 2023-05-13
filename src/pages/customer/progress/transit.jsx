function transit() {
    return ( <>
     <div>
          <div className="py-3 px-3 mx-5 shadow-md ">
            <div className="font-semibold text-[0.9em] py-2">1234567890MJ</div>
            <div className="py-4 text-[0.9em] font-bold">In transit</div>
            <div className=""><ProgressBar className="h-[0.5em]" completed = {70}  isLabelVisible = {false} bgColor = "#03045e" height="5px" animateOnRender = {true} /></div>
            <div className="py-2  "><button onClick={()=>{navigate('/progessing',{state:{id:500}})}} className=" border-b-2 font-semibold border-b-[#000]  text-[0.85em] h-[2.5em] px-3 pt-2 flex "> <div className="flex self-center">Details</div> <div className="flex self-center"><IoIosArrowForward/></div></button> </div>
          </div>
        </div>

    </>  );
}

export default transit;