import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./styles/payment.css";

function Payment() {
  return (
    <div className="rootPayment">
      <div>Payment Success</div>
      <div>
        <FontAwesomeIcon className="icon" icon={faCheck} />
      </div>
    </div>
  );
}

export default Payment;
