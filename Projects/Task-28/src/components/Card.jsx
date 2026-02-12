import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <div
        className="upper"
        style={{
          backgroundImage: props.image ? `url(${props.image})` : "none",
        }}
      ></div>
      <div className="lower">
        <div className="text-area">
          <h1>{props.name}</h1>
          <p>{props.description}</p>
          <div className="colours">
            <div className="color" style={{backgroundColor: props.colors[0]}}></div>
            <div className="color" style={{backgroundColor: props.colors[1]}}></div>
            <div className="color" style={{backgroundColor: props.colors[2]}}></div>
          </div>
          <div className="bottom">
            <div className="left">
              <p>${props.price}</p>
            </div>
            <div className="right">
              <button className="add-to-cart">
                Add to cart <i className="ri-arrow-right-s-line"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
