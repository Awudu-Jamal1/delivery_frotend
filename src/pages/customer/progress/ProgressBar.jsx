import Stepper from "./steppers";

export default function ProgressBars() {
  return (
    <>
    <div >
    <div >
        <h1 className="font-bold text-center">Progress Bar </h1>
      </div>
      <div className="bg-[#f7fff7]  py-10 my-6">
        <div className="">
          <div className="pl-12 my-4 ">
          <p>Order   #15F621</p>
          <p className="leading-loose font-bold">Placed in June 1 ,2023</p>
          </div>

        </div>
        <Stepper/>
      </div>
    </div>

    </>
  );
}
