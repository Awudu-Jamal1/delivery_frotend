function Sucess() {
    return (<>
    <div className="bg-white w-[20em] grid grid-cols-15  ">
        <div className="bg-green-500  w-[0.5em]"></div>
        <div className="col-start-2 col-end-10 w-[2em] py-4"><svg className="w-[4em]" xmlns="http://www.w3.org/2000/svg" width='3em' fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="#10b981" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</div>
        <div className="col-start-10 col-end-15 py-4 ">
            <h2 className="text-black text-[1.2em]">Sucess</h2>
            <p className='text-[0.8em] text-[#979dac]'>Request has successfully being made</p>
        </div>
         {/* <div></div> */}
      </div>
    </>  );
}

export default Sucess;