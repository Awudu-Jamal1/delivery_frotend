const AllInfo = () => {
    return (<>
    <div className="my-4">
        <div
        className="grid grid-cols-5 font-bold border py-3 px-2  max-sm:text-[0.9em]">
            <div>SENDER</div>
            <div>RECEIVER</div>
            <div>PARCEL ID</div>
            <div>WEIGHT</div>
            <div>STATUS </div>
        </div>
        <div
        className="grid grid-cols-5 hover:bg-my-blue hover:text-white text-[0.8em] max-sm:text-[0.7em] py-4 px-2 border">
            <div className="px-1"><div className="">Awudu Jamal</div>
            <div className="">Lashibi community 17</div></div>
            <div className="px-1"><div>Awudu Jamal</div>
            <div className="">Lashibi community 17</div></div>
            <div className="px-1">F12356464</div>
            <div className="px-1">5kg</div>
            <div className="px1 text-green-600  font-bold">Delivered</div>
        </div>


        </div></>  );
}

export default AllInfo;