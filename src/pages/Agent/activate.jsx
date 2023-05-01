import { useLoaderData } from "react-router-dom";
import Delivery from "./delivery";
function Activate() {
  const data = useLoaderData();
  const datas = data ? data.orders : [];
  const evals = datas.length === 0 ? true : false;
  return (
    <>
      {evals && (
        <div className="text-center mt-7">
          <h1>No Active Request </h1>
        </div>
      )}
      {datas?.map((e, i) => (
        <div key={i}>
          <Delivery data={e} />
        </div>
      ))}
    </>
  );
}

export default Activate;
