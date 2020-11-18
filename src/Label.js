import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire, faClone, faUtensils } from "@fortawesome/free-solid-svg-icons";

const Label = (props) => {
  if (props.type === "Hot") {
    return (
      <div style={props.style} className="label">
        <FontAwesomeIcon className="labelIcon" icon={faFire} />
        Hot
      </div>
    );
  } else if (props.type === "New") {
    return (
      <div style={props.style} className="label">
        <FontAwesomeIcon className="labelIcon" icon={faUtensils} />
        New
      </div>
    );
  } else if (props.type === "clone") {
    return (
      <div style={props.style} className="label">
        <FontAwesomeIcon className="labelIcon" icon={faClone} />
        Clone
      </div>
    );
  } else {
    return null;
  }
};

export default Label;
