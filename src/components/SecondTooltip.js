import React, { useState } from "react";

const SecondTooltip = ({text,children}) => {
    const [isHover,setIsHover] = useState(false);

    function handleMouseEnter(){
        setIsHover(true);
    }
    function handleMouseLeave(){
        setIsHover(false);
    }

  return (
    <div
      className="tooltip"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHover && (
        <div className="tooltiptext">
            <p className="tooltip">{text}</p>
        </div>
      )}
      <div className="child">{children}</div>
    </div>
  );
}

export default SecondTooltip;
