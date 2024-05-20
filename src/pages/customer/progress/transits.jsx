import ProgressBar from "@ramonak/react-progress-bar";

import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { parse } from "@fortawesome/fontawesome-svg-core";
import parceltransfer from "../../../services/parceltransfer";

import { ImCancelCircle } from "react-icons/im";

function Transits({ info }) {
  const rider = info?.Agent == null ? "Waiting For Rider":info?.Agent.User
  console.log(rider)
  const agent = info?.Agent;
  const navigate = useNavigate();
  const steps = [
    "Pickup Ready",
    "Courier Assigned",
    "Deliverying",
    "Delivered",
  ];
  const cancels = async () => {
    try {
      await parceltransfer.request({ id: info.id, status: 6 });
    } catch (error) {
      console.log(error);
    } finally {
      window.location.reload();
    }
  };

  const verify = async () => {
    try {
      await parceltransfer.request({ id: info.id, status: 5 });
    } catch (error) {
      console.log(error);
    } finally {
      window.location.reload();
    }
  };
  return (
    <>
      <div className="my-8">
        <div className="py-8 px-5  mx-5 shadow-[0px_0px_3px_rgba(3,102,214,0.3)]">
          <div className="grid grid-cols-2">
            <div className="font-semibold text-[0.9em] py-2">
              {info.transaction_id}
            </div>
            <div className="flex justify-end">
              {info.status == 1 && (
                <button onClick={cancels}>
                  <ImCancelCircle className="text-rose-700" />
                </button>
              )}
            </div>
          </div>

          <div className="py-4 text-[0.8em] text-red-700 font-bold">
            {" "}
            {steps[info.status - 1]}{" "}
          </div>
          <div className="">
            <ProgressBar
              className="h-[0.5em]"
              completed={parseInt(info.status) * 25}
              isLabelVisible={false}
              bgColor="#023e8a"
              height="5px"
              animateOnRender={true}
            />
          </div>
          <div className="py-2  ">
            <button
              onClick={() => {
                navigate("/progessing", {
                  state: {
                    ids: info.id,
                    id: info.transaction_id,
                    status: info.status,
                    rider: rider,
                  },
                });
              }}
              className=" border-b-2 font-semibold border-b-[#000]  text-[0.85em] h-[2.5em] px-3 pt-2 flex "
            >
              {" "}
              <div className="flex self-center">Details</div>{" "}
              <div className="flex self-center">
                <IoIosArrowForward />
              </div>
            </button>{" "}
          </div>
          <div className="flex justify-center">
            {info.status == 4 && (
              <button
                onClick={verify}
                className="bg-green-600 text-white text-[0.8em] py-2 px-1 font-bold"
              >
                Verify Parcel
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Transits;
