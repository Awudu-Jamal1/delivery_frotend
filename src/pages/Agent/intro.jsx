import { NavLink } from "react-router-dom";

export default function Intro({users}) {
  let style = "bg-[#f7fff7] py-5 px-5";
  let isstyle = "bg-my-blue py-5 px-5 text-white";
  let Nsvg = "fill-my-blue stroke-my-blue h-14";
  let Asvg = "fill-white stroke-white h-14";
  let areq = "fill-white stroke-my-blue h-14";
  let label = "my-4 ";
  return (
    <>
      <div className="py-5">
        <div className="text-center py-16">
          <h1>Welcome {users?.lastName}</h1>
        </div>
        <div className="grid grid-cols-3 text-center ">
          <NavLink
            to="stats"
            className={({ isActive }) => (isActive ? isstyle : style)}
            children={({ isActive }) => {
              return (
                <>
                  <div className="flex justify-center">
                    <svg
                      className={isActive ? areq : Nsvg}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                    >
                      <path
                        stroke-width="0"
                        d="M8,40H24.06v2H8a3,3,0,0,1-3-3V7A3,3,0,0,1,8,4h6V6H8A1,1,0,0,0,7,7V39A1,1,0,0,0,8,40ZM37,7V18h2V7a3,3,0,0,0-3-3H30V6h6A1,1,0,0,1,37,7ZM14,10V8H10A1,1,0,0,0,9,9V37a1,1,0,0,0,1,1H24V36H11V10Zm19,7.93h2V9a1,1,0,0,0-1-1H30v2h3ZM15,11V3a1,1,0,0,1,1-1H28a1,1,0,0,1,1,1v8a1,1,0,0,1-1,1H16A1,1,0,0,1,15,11Zm2-1H27V4H17Zm12,6H15v2H29Zm-5,6H15v2h9Zm0,6H15v2h9ZM20,8h4V6H20ZM44,23V43a3,3,0,0,1-3,3H29a3,3,0,0,1-3-3V23a3,3,0,0,1,3-3H41A3,3,0,0,1,44,23Zm-2,0a1,1,0,0,0-1-1H29a1,1,0,0,0-1,1V43a1,1,0,0,0,1,1H41a1,1,0,0,0,1-1Zm-2,2v4a1,1,0,0,1-1,1H31a1,1,0,0,1-1-1V25a1,1,0,0,1,1-1h8A1,1,0,0,1,40,25Zm-2,1H32v2h6Zm-8,8h4V32H30Zm6,0h4V32H36Zm-6,4h4V36H30Zm6,0h4V36H36Zm-6,4h4V40H30Zm6,0h4V40H36Z"
                        data-name="66 Accounting, Business, Calculate, Finance, Math"
                      />
                    </svg>
                  </div>

                  <div className={label}>STATISTICS</div>
                </>
              );
            }}
          />

          <NavLink
            to="."
            end
            className={({ isActive }) => (isActive ? isstyle : style)}
            children={({ isActive }) => {
              return (
                <>
                  <div className="flex justify-center">
                    <svg
                      className={isActive ? Asvg : Nsvg}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 100"
                    >
                      <path
                        fill="none"
                        //   stroke="#000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="2"
                        stroke-width="3"
                        d="M95 8.438H30.704L5 27.266h64.296zM47.707 47.651l-10.909-4.202-10.209 4.202V27.266h21.118z"
                      />
                      <path
                        fill="none"
                        //   stroke="#000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="2"
                        stroke-width="3"
                        d="M73.411 8.438H52.293L26.589 27.266h21.118z"
                      />
                      <path
                        fill="none"
                        //   stroke="#000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        stroke-width="3"
                        d="m64.092 61.75 4.233 4.531 6.46-7.156"
                      />
                      <path
                        fill="none"
                        //   stroke="#000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        stroke-width="3"
                        d="M81.303 73.567c-6.542 6.542-17.187 6.542-23.729 0-6.542-6.542-6.542-17.186 0-23.728 6.542-6.542 17.186-6.542 23.728 0 6.543 6.542 6.543 17.186.001 23.728z"
                      />
                      <circle
                        cx="69.439"
                        cy="61.703"
                        r="11.779"
                        fill="none"
                        //   stroke="#000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        stroke-width="3"
                      />
                      <path
                        fill="none"
                        //   stroke="#000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        stroke-width="3"
                        d="M81.303 73.567a16.723 16.723 0 0 1-1.998 1.683L90.01 85.954a2.603 2.603 0 0 0 3.68 0h0a2.603 2.603 0 0 0 0-3.68L82.986 71.569a16.63 16.63 0 0 1-1.683 1.998z"
                      />
                      <path
                        fill="none"
                        //   stroke="#000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="2"
                        stroke-width="3"
                        d="M57.575 73.567c-6.542-6.542-6.542-17.186 0-23.728 3.235-3.235 7.472-4.864 11.721-4.9V27.266H5v64.296h64.296V78.467c-4.249-.036-8.487-1.665-11.721-4.9zm21.73 1.683.029-.022a16.744 16.744 0 0 1-10.038 3.239v13.095l15.193-11.129-5.184-5.183z"
                      />
                      <path
                        fill="none"
                        //   stroke="#000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="2"
                        stroke-width="3"
                        d="M69.296 27.266v17.673c4.344-.037 8.7 1.592 12.007 4.9 5.915 5.915 6.463 15.174 1.682 21.732l.001-.001 5.752 5.752L95 72.734V8.438L69.296 27.266z"
                      />
                    </svg>
                  </div>
                  <div className={label}>REQUEST</div>
                </>
              );
            }}
          />

          <NavLink
            to="request"
            className={({ isActive }) => (isActive ? isstyle : style)}
            children={({ isActive }) => {
              return (
                <>
                  <div className="flex justify-center">
                    <svg
                      className={isActive ? areq : Nsvg}
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Layer 1"
                      viewBox="0 0 64 64"
                    >
                      <path
                        stroke-width="0"
                        d="M36.66 46.15l-4 1.45a1 1 0 10.68 1.88l4-1.45a1 1 0 00-.68-1.88zM33 45.55a1 1 0 00.34-.06l2-.73a1 1 0 00-.68-1.88l-2 .73A1 1 0 0033 45.55z"
                      />
                      <path
                        stroke-width="0"
                        d="M59,35a11,11,0,0,0-8-10.57V18a1,1,0,0,0-.07-.35l0-.1a1,1,0,0,0-.14-.2l-.08-.08a1,1,0,0,0-.21-.14l-.08,0h0l-22-8a1,1,0,0,0-.68,0l-22,8h0l-.08,0a1,1,0,0,0-.21.14l-.08.08a1,1,0,0,0-.14.2l0,.1A1,1,0,0,0,5,18V48a1,1,0,0,0,.66.94l22,8h0A1,1,0,0,0,28,57h0a1,1,0,0,0,.3-.05h0l22-8A1,1,0,0,0,51,48V45.57A11,11,0,0,0,59,35ZM28,24.94l-3.52-1.28,17.9-7.32,0,0L47.07,18Zm-13-2.6,5,1.82v4.43l-2.29-2.29a1,1,0,0,0-1-.24L15,26.61Zm2-1.41,18.37-7a1,1,0,0,0,.2-.12l4.08,1.49-18,7.34Zm11-9.87,4.74,1.73-18.63,7.1L8.93,18ZM7,47.3V19.43l6,2.18V28a1,1,0,0,0,1.32.95l2.41-.8,3.56,3.56A1,1,0,0,0,22,31V24.88l5,1.82V54.57Zm42,0L29,54.57V26.7l20-7.27v4.62c-.33,0-.66-.05-1-.05a11,11,0,0,0,0,22c.34,0,.67,0,1-.05ZM48,44a9,9,0,1,1,9-9A9,9,0,0,1,48,44Z"
                      />
                      <path
                        stroke-width="0"
                        d="M52,34H49V31a1,1,0,0,0-2,0v3H44a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V36h3a1,1,0,0,0,0-2Z"
                      />
                    </svg>
                  </div>
                  <div className={label}>ACTIVE DELIVERIES</div>
                </>
              );
            }}
          />
        </div>
      </div>
    </>
  );
}
