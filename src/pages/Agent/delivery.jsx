import { TfiPackage } from "react-icons/tfi";
import parceltransfer from "../../services/parceltransfer";

function Delivery({ data }) {
  console.log(data);
  let main = "bg-[#f7fff7] px-4 py-1 h-24 rounded-2xl";
  let title = "leading-loose font-bold";
  const accept = async () => {
    window.location.reload();
    try {
      await parceltransfer.request({ id: data.id, status: 2 });
    } catch (error) {
      console.log(error);
    }
  };
  const pickup = async () => {
    window.location.reload();
    try {
      await parceltransfer.request({ id: data.id, status: 3 });
    } catch (error) {
      console.log(error);
    }
  };
  const deliver = async () => {
    window.location.reload();
    try {
      await parceltransfer.request({ id: data.id, status: 4 });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex justify-center ">
        <div className="border-4 border-current shadow-2xl my-4 px-2">
          <div className=" grid grid-cols-5 gap-5 w-[45em] max-sm:w-[30em] py-5   ">
            <div className="">
              <div className=" h-full flex  justify-center items-center">
                <div>
                  <TfiPackage className=" text center text-6xl" />
                  <p className="block pt-4 font-bold">{data.weight}</p>
                </div>
              </div>
            </div>
            <div className="col-span-2 ">
              {" "}
              <h2 className="pb-2">Order Details</h2>
              <div className={main}>
                <p className={title}>{data.transaction_id}</p>
                <p className={title}>Awudu Jamal</p>
                <p className="leading-loose ">05554526419</p>
              </div>
            </div>
            <div className="col-span-2">
              <h2 className="pb-2">Receiver Details</h2>
              <div className={main}>
                <p className={title}>Ibrahim Manidus</p>
                <p className="leading-loose">0242515647</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-5 font-bold py-4 px-4">
            <div>
              {data.status == 1 ? (
                <button
                  onClick={accept}
                  className="text-[#f7b801] hover:text-[#007200]"
                >
                  Accept Order
                </button>
              ) : data.status == 2 ? (
                <button
                  onClick={pickup}
                  className="text-[#f7b801] hover:text-[#007200]"
                >
                  PickUp
                </button>
              ) : (
                <button
                  onClick={deliver}
                  className="text-[#f7b801] hover:text-[#007200]"
                >
                  Delivered
                </button>
              )}
            </div>{" "}
            <div className="col-span-2">
              Location : <span>{data.order_location}</span>
            </div>
            <div className="col-span-2">
              Destination : <span>{data.delivery_location}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Delivery;
