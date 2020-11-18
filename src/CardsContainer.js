import React, { useState } from "react";
import Card from "./Card";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./styles/cardsContainer.css";
import "./styles/modal.css";
import "./styles/label.css";
import Label from "./Label";
import { useHistory } from "react-router-dom";

function CardsContainer(props) {
  const [openModal, setOpenModal] = useState(false);
  const [modalCard, setModalCard] = useState({
    name: "",
    desc: "",
    price: "",
    label: "",
    image: "",
  });
  const [isOtp, setIsOtp] = useState(false);
  const [otp, setOtp] = useState(null);

  const history = useHistory();
  function handleOtpSubmit() {
    if (otp === "123456") {
      history.push("/paysuccess");
    } else {
      history.push("/payfail");
    }
  }
  function handleOtpChange(e) {
    setOtp(e.target.value);
  }
  function handleOtp(bool) {
    setIsOtp(bool);
  }

  function handleOpenModal(cardData) {
    console.log(cardData);
    setOpenModal(true);
    setModalCard(cardData);
  }

  function handleCloseModal() {
    setOpenModal(false);
  }

  return (
    <div className="cardsContainerRoot">
      {Object.entries(props.recipe).map((item, i) => {
        return (
          <div key={i} className="category">
            {item[1].length > 0 ? <h1>{item[0]}</h1> : null}

            <div className="cards">
              {item[1].map((recipe) => {
                return <Card key={recipe.id} handleOpenModal={handleOpenModal} {...recipe} />;
              })}
            </div>
          </div>
        );
      })}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 400,
        }}
        disableBackdropClick={false}
      >
        <Fade in={openModal}>
          <div style={{ borderRadius: "10px" }}>
            <div className={"top"}>
              Buy recipe
              <div onClick={handleCloseModal} className={"close"}>
                &times;
              </div>
            </div>
            <div id="transition-modal-description">
              <div className="modalContent">
                {isOtp ? (
                  <div>
                    <form style={{ flexDirection: "column" }} onSubmit={handleOtpSubmit} onChange={handleOtpChange}>
                      <input className="otpInput" name="otp" placeholder="OTP" />
                      <div>
                        <button className="btnSubmit">Submit</button>
                      </div>
                    </form>
                  </div>
                ) : (
                  <>
                    <div className="modalCard">
                      <div className="left">
                        <img src={modalCard.image} />
                      </div>
                      <div className="right">
                        <div className="name">{modalCard.name}</div>
                        <Label
                          style={{
                            position: "relative",
                            top: 0,
                            right: 0,
                            margin: 0,
                            padding: 0,
                            marginTop: "-5px",
                            padding: "5px 0",
                          }}
                          type={modalCard.label}
                        />
                        <div className="desc">{modalCard.desc}</div>
                        <div className="priceModal">$ {modalCard.price}</div>
                      </div>
                    </div>
                    <div className="line"></div>
                    <div className="heading">Debit/Credit Card Details</div>
                    <form>
                      <div className="left">
                        <div className="input">
                          <div className="field">Name on Card</div>
                          <input />
                        </div>
                        <div className="input">
                          <div className="field">Card Number</div>
                          <input />
                        </div>
                      </div>
                      <div className="right">
                        <div className="top">
                          <div className="input">
                            <div className="field">Expiration Date</div>
                            <div style={{ display: "flex" }}>
                              <input style={{ marginRight: "5px" }} className="inputCardDate" placeholder="MM" />
                              <input className="inputCardDate" placeholder="YY" />
                            </div>
                          </div>
                          <div className="input">
                            <div className="field">CVV</div>
                            <input className="inputCardDate" placeholder="MM" />
                          </div>
                        </div>
                        <div className="bottom">
                          <button onClick={handleOtp.bind(this, true)}>Pay {modalCard.price}</button>
                        </div>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default CardsContainer;
