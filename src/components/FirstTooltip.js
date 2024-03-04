import React, { useState } from "react";


const FirstTooltip = ({text,children}) =>{
    const [showTooltip,setShowToolTip] = useState(false);
    // console.log(children.props.children)

    function handleMouseEnter(){
        setShowToolTip(true);
    }
    function handleMouseLeave(){
        setShowToolTip(false);
    }

    return (
      <div
        className="tooltip"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {showTooltip && (
          <div className="tooltiptext">
              <h2 className="tooltip">{text}</h2>
          </div>
        )}
        <div className="child">{children}</div>
      </div>
    );
}
export default FirstTooltip;