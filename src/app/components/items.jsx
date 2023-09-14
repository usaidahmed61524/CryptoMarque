import React from "react";

const Items = ({ image, title, dot, percent }) => {
  return (
    <div className="marquee-coin">
      <img src={image} className="_image" />
      <div>
        <span className="lightColor">{title}</span> {dot}
      </div>
      <span className="greenText">{percent}</span>
    </div>
  );
};

export default Items;
