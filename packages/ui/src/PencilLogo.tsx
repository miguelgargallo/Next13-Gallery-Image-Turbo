import { generateJSXMeshGradient } from "meshgrad";
const ELEMENTS = 12;

export const PencilLogo = () => {
  return (
    <div
      className="m-2 hidden rounded-full text-xs font-bold text-black shadow-md hover:shadow-xl md:block"
      style={generateJSXMeshGradient(ELEMENTS)}
    >
      <a href="https://pylar.org" className="">
        <picture>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="150" /* 150 x 2 = 300 */
            height="25" /* 25 x 2 = 50 */
            viewBox="0 0 3000 678"
            className="m-3 h-6 w-24"
          >
            <g
              fill="#be0aff"
              fill-rule="evenodd"
              transform="translate(-151 -173)"
            >
              <path
                fill="#be0aff"
                d="M508.516097,232.032195 L783.120976,781.241951 C791.271621,797.543242 784.664217,817.365452 768.362927,825.516097 C763.780698,827.807212 758.727967,829 753.604878,829 L204.395122,829 C186.169725,829 171.395122,814.225397 171.395122,796 C171.395122,790.876912 172.58791,785.824181 174.879024,781.241951 L449.483903,232.032195 C457.634548,215.730904 477.456758,209.123501 493.758049,217.274146 C500.144453,220.467348 505.322895,225.64579 508.516097,232.032195 Z"
                transform="matrix(0 -1 -1 0 980 980)"
              ></path>
              <path
                fill="#147df5"
                d="M419.705262,277.910524 L658,754.5 L658,754.5 L151,754.5 L389.294738,277.910524 C393.493555,269.51289 403.704997,266.109076 412.102631,270.307893 C415.392597,271.952876 418.060279,274.620559 419.705262,277.910524 Z"
                transform="matrix(0 -1 -1 0 905.5 905.5)"
              ></path>
              <path
                fill="#0aff99"
                d="M356.705262,340.910524 L532,691.5 L532,691.5 L151,691.5 L326.294738,340.910524 C330.493555,332.51289 340.704997,329.109076 349.102631,333.307893 C352.392597,334.952876 355.060279,337.620559 356.705262,340.910524 Z"
                transform="matrix(0 -1 -1 0 842.5 842.5)"
              ></path>
              <path
                fill="#deff0a"
                d="M293.205262,404.410524 L405,628 L405,628 L151,628 L262.794738,404.410524 C266.993555,396.01289 277.204997,392.609076 285.602631,396.807893 C288.892597,398.452876 291.560279,401.120559 293.205262,404.410524 Z"
                transform="matrix(0 -1 -1 0 779 779)"
              ></path>
              <path
                fill="#ff0000"
                d="M230.599689,469.699379 L278,564.5 L278,564.5 L151,564.5 L198.400311,469.699379 C202.846117,460.807766 213.658232,457.203728 222.549845,461.649534 C226.033338,463.391281 228.857943,466.215886 230.599689,469.699379 Z"
                transform="matrix(0 -1 -1 0 715.5 715.5)"
              ></path>
              <text
                fill="#000000"
                font-family="Roboto, sans-serif"
                font-size="500"
                font-weight="500"
              >
                <tspan x="993.25" y="697" className="underline">
                  Pencil&trade;
                </tspan>
              </text>
              <text
                fill="#000000"
                font-family="Roboto, sans-serif"
                font-size="100"
                font-weight="500"
              >
                <tspan x="690.95" y="829">
                  ©
                </tspan>
              </text>
              <text
                fill="#000000"
                font-family="Roboto, sans-serif"
                font-size="75"
                font-weight="500"
              ></text>
            </g>
          </svg>
        </picture>
      </a>
    </div>
  );
};
