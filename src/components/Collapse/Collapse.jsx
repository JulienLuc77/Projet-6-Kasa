import React, { useState } from "react";
import "./Collapse.scss";

export function Collapse(props) {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  const chevronClass = isContentVisible ? "fa-chevron-down" : "fa-chevron-up";

  return (
    <div className="apartment-description">
      <p className="description">
        <span>{props.title}</span>
        <span>
          <i className={`fa-solid ${chevronClass}`} onClick={toggleContent}></i>
        </span>
      </p>
      {isContentVisible && <p className="content">{props.content}</p>}
    </div>
  );
}

export default Collapse;