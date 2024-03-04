import React, { useState } from "react";


const Tooltip = ({text,children}) =>{
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
        {children}
        {showTooltip && (
          <div className="tooltiptext">
              <h2>{text}</h2>
          </div>
        )}
        
      </div>
    );
}
export default Tooltip;