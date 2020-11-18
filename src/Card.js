import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Label from "./Label";

import "./styles/card.css";
import "./styles/label.css";

function Card(props) {
  return (
    <div
      onClick={props.handleOpenModal.bind(this, {
        image: props.image,
        name: props.name,
        desc: props.description,
        price: props.price,
        label: props.label,
      })}
      className="rootCard"
    >
      <div className="left">
        <img src={props.image} alt="recipe" />
      </div>
      <div className="right">
        <Label type={props.label} />
        <div className="name">{props.name}</div>
        <div className="desc">{props.description}</div>
        <div className="price">&#36; {props.price}</div>
        <button className="btnBuy">
          Buy Now <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
}

export default Card;
