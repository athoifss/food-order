import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./styles/payment.css";

function Payment() {
  return (
    <div className="rootPayment">
      <div>Payment Failed</div>
      <div>
        <FontAwesomeIcon className="icon" style={{ color: "red" }} icon={faTimes} />
      </div>
    </div>
  );
}

export default Payment;
