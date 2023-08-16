import React from "react";

export default function Star({ deviceSize }) {
  return (
    <div>
      <svg
        height={
          (deviceSize > 1200 && "16px") ||
          (deviceSize > 992 && "14px") ||
          (deviceSize > 576 && "12px") ||
          (deviceSize > 412 && "11px") ||
          (deviceSize < 412 && "10px")
        }
        width={
          (deviceSize > 1200 && "16px") ||
          (deviceSize > 992 && "14px") ||
          (deviceSize > 576 && "12px") ||
          (deviceSize > 412 && "11px") ||
          (deviceSize < 412 && "10px")
        }
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsk="http://www.w3.org/1999/xlink"
        viewBox="0 0 47.94 47.94"
        xml="preserve"
        style={{ display: "inline-block", marginLeft: "2px" }}
        className="rateStar"
      >
        <path
          fill="#ffc107"
          d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
	c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
	c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
	c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
	c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
	C22.602,0.567,25.338,0.567,26.285,2.486z"
        />
      </svg>
    </div>
  );
}
