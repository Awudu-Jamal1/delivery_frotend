import { useEffect, useState } from "react";
import Stepper from "./steppers";
import parceltransfer from "../../../services/parceltransfer";
import socket from "../../../services/socket";
import Transits from "./transits";

export default function ProgressBars({ id, type }) {
  const [res, setRes] = useState([]);
  const [emit, setEmit] = useState([]);
  const [catchs, setCatchs] = useState(false);
  console.log(id,type)
  socket().on("update", (data) => {
    setEmit(data);
    // console.log(data)
    setCatchs(true);
  });
const role = 'Customer'
  let cm;
  console.log("emit", emit)
  console.log("res",res)

  useEffect(() => {
    let fetched = async () => {
      const response = (
        await parceltransfer.getTransaction({ Id: id, type: type })
      ).data;

      setRes(response.orders);
    };
    fetched();
  }, []);
  cm = emit.filter((e, i) => e[role] == id);
  return (
    <>
      <div>
      {<div>{(emit.length ===0 || res.length===0) && <p>No Transaction</p>}</div> }
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
