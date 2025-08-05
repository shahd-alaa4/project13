import React, { useState } from "react";
import port1 from "../../assets/poert1.png";
import port2 from "../../assets/port2.png";
import port3 from "../../assets/port3.png";

export default function Portfolio() {
  const [click, setClick] = useState("");

  function closeModal() {
    setClick("");
  }

  return (
    <>
      <h1 className="text-center text-uppercase text-color pt-2 fw-bold">
        portfolio component
      </h1>
      <div className=" d-flex justify-content-center align-items-center my-4 ">
        <div className="line  me-3"></div>
        <i className="fa-solid fa-star text-color "></i>
        <div className="line  ms-3"></div>
      </div>

      <div className="container">
        <div className="row gy-5 mb-4 ">
          {[port1, port2, port3, port1, port2, port3].map((img, i) => (
            <div className="col-md-4" key={i}>
              <div className="position-relative cursor">
                <img
                  src={img}
                  className="w-100 rounded-3"
                  onClick={() => setClick(img)
                  }
                  alt=""
                />
                <div className="image rounded-3">
                  <i className="fa-solid fa-plus text-white display-1 d-flex justify-content-center align-items-center h-100 w-100"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {click ? (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-black bg-opacity-75 d-flex justify-content-center align-items-center modal1"
          onClick={() => setClick("")}
        >
          <img src={click} className="w-50 rounded-3" alt="enlarged" />
        </div>
      ) : (
        " "
      )}
    </>
  );
}
