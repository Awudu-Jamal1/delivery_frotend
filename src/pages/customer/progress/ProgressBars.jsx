import { useEffect, useState } from "react";
import Stepper from "./steppers";
import parceltransfer from "../../../services/parceltransfer";
import socket from "../../../services/socket";
import Transits from "./transits";

export default function ProgressBars({ id, type }) {
  const [res, setRes] = useState([]);
  const [emit, setEmit] = useState([]);
  const [catchs, setCatchs] = useState(false);

  socket().on("update", (data) => {
    setEmit(data);
    setCatchs(true);
  });

  let cm;

  useEffect(() => {
    let fetched = async () => {
      const response = (
        await parceltransfer.getTransaction({ Id: id, type: type })
      ).data;

      setRes(response.orders);
    };
    fetched();
  }, []);
  cm = emit.filter((e, i) => e.customer_id == 3);
  return (
    <>
      <div>

        {catchs
          ? cm.map((e, i) => (
              <div
                key={i}

              >
                 <Transits  info={e}/>
              </div>
            ))
          : res.map((e, i) => (
              <div
                key={i}
              >
                <Transits info={e}/>
              </div>
            ))}
      </div>
    </>
  );
}
