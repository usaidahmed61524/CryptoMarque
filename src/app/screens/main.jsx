"use client";

import { useState } from "react";
import Items from "../components/items";
import { useAuth } from "../Authentication";
// import { loginwithDomain } from "../function";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import swal from "sweetalert";

const Main = () => {
  const auth = useAuth();
  const [show, setShow] = useState(false);
  const [domain, setDomain] = useState("");
  const [tokenId, setTokenId] = useState("");
  const [inputError, setInputError] = useState("");
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [loginBtnVisible, setLoginBtnVisible] = useState(true);

  // loginwithDomain

  const loginwithDomain = async (d, i) => {
    let useObj;
    try {
      const response = await axios.get(`/login?username=${d}&tokenid=${i}`);
      // console.log(response.data);
      useObj = response.data;
      swal("Login", "successfully Login With MMIT Domain:", "success");
    } catch (error) {
      swal("Error", "credential are not valid", "error");
      setLoading(false);
    }

    return { d, i, useObj };
  };

  const handleClose = () => {
    setShow(false);
    setLoading(false);
  };
  const onSubmit = async () => {
    if (!domain || !tokenId) {
      swal("Error", "please fill this fields!", "error");
      // setLoading(false);

      return;
    } else {
      const regex = /\.mmit$/;
      if (!regex.test(domain)) {
        // setLoading(false);
        setInputError("Please enter a valid .mmit domain address.");
        return;
      } else {
        setLoading(true);
        let login;
        try {
          login = await loginwithDomain(domain, tokenId);
        } catch (error) {
          swal("Error", `${error}`, "error");
          setLoading(false);
        }

        const user = login.useObj;
        const userValidate = user.success;
        if (userValidate) {
          setLoading(false);
          setUserName(user.validate.username);
          auth.login({
            user,
          });

          setLoginBtnVisible(false);
        } else {
          // console.log("user nai ye");
          swal("Error", "Credential are not valid", "error");
          setLoading(false);
        }
      }
      setLoading(false);
    }
    setShow(false);
    setLoading(false);
  };

  const logOutUser = () => {
    setLoginBtnVisible(true);
  };

  const handleShow = () => setShow(true);
  return (
    <>
      <div className="container-fluid ">
        <div className="myContainer">
          <h1 className="w-basic-heading heading-xlarge xxl red-color">
            <span className="text-span red-color">●</span> Live
            <br />{" "}
            <span className="text-color-gradient-blue">
              Crypto Price Ticker
            </span>
          </h1>
          <marquee direction="Left" className="marquee" scrollamount="6">
            <div className="abcd">
              <Items
                image="https://bitpanda-broker-production-assets.s3-eu-west-1.amazonaws.com/static/cryptocoin/bnb.svg"
                title="DOGE"
                dot="• $0.06"
                percent="0.26%"
              />
              <Items
                image="https://bitpanda-broker-production-assets.s3-eu-west-1.amazonaws.com/static/cryptocoin/matic.svg"
                title="MATIC"
                dot="• $0.52"
                percent="1.26%"
              />

              <Items
                image="https://bitpanda-broker-production-assets.s3-eu-west-1.amazonaws.com/static/cryptocoin/btc.svg"
                title="BIT"
                dot="• $0.52"
                percent="2.06%"
              />

              <Items
                image="https://bitpanda-broker-production-assets.s3-eu-west-1.amazonaws.com/static/cryptocoin/bnb.svg"
                title="MATIC"
                dot="• $0.52"
                percent="2.06%"
              />

              <Items
                image="https://bitpanda-broker-production-assets.s3-eu-west-1.amazonaws.com/static/cryptocoin/bnb.svg"
                title="DOGE"
                dot="• $0.06"
                percent="0.26%"
              />
              <Items
                image="https://bitpanda-broker-production-assets.s3-eu-west-1.amazonaws.com/static/cryptocoin/matic.svg"
                title="MATIC"
                dot="• $0.52"
                percent="1.26%"
              />

              <Items
                image="https://bitpanda-broker-production-assets.s3-eu-west-1.amazonaws.com/static/cryptocoin/btc.svg"
                title="BIT"
                dot="• $0.52"
                percent="2.06%"
              />

              <Items
                image="https://bitpanda-broker-production-assets.s3-eu-west-1.amazonaws.com/static/cryptocoin/bnb.svg"
                title="MATIC"
                dot="• $0.52"
                percent="2.06%"
              />

              <Items
                image="https://bitpanda-broker-production-assets.s3-eu-west-1.amazonaws.com/static/cryptocoin/bnb.svg"
                title="DOGE"
                dot="• $0.06"
                percent="0.26%"
              />
              <Items
                image="https://bitpanda-broker-production-assets.s3-eu-west-1.amazonaws.com/static/cryptocoin/matic.svg"
                title="MATIC"
                dot="• $0.52"
                percent="1.26%"
              />

              <Items
                image="https://bitpanda-broker-production-assets.s3-eu-west-1.amazonaws.com/static/cryptocoin/btc.svg"
                title="BIT"
                dot="• $0.52"
                percent="2.06%"
              />

              <Items
                image="https://bitpanda-broker-production-assets.s3-eu-west-1.amazonaws.com/static/cryptocoin/bnb.svg"
                title="MATIC"
                dot="• $0.52"
                percent="2.06%"
              />

              <Items
                image="https://bitpanda-broker-production-assets.s3-eu-west-1.amazonaws.com/static/cryptocoin/bnb.svg"
                title="DOGE"
                dot="• $0.06"
                percent="0.26%"
              />
              <Items
                image="https://bitpanda-broker-production-assets.s3-eu-west-1.amazonaws.com/static/cryptocoin/matic.svg"
                title="MATIC"
                dot="• $0.52"
                percent="1.26%"
              />

              <Items
                image="https://bitpanda-broker-production-assets.s3-eu-west-1.amazonaws.com/static/cryptocoin/btc.svg"
                title="BIT"
                dot="• $0.52"
                percent="2.06%"
              />

              <Items
                image="https://bitpanda-broker-production-assets.s3-eu-west-1.amazonaws.com/static/cryptocoin/bnb.svg"
                title="MATIC"
                dot="• $0.52"
                percent="2.06%"
              />

              <Items
                image="https://bitpanda-broker-production-assets.s3-eu-west-1.amazonaws.com/static/cryptocoin/bnb.svg"
                title="DOGE"
                dot="• $0.06"
                percent="0.26%"
              />
              <Items
                image="https://bitpanda-broker-production-assets.s3-eu-west-1.amazonaws.com/static/cryptocoin/matic.svg"
                title="MATIC"
                dot="• $0.52"
                percent="1.26%"
              />

              <Items
                image="https://bitpanda-broker-production-assets.s3-eu-west-1.amazonaws.com/static/cryptocoin/btc.svg"
                title="BIT"
                dot="• $0.52"
                percent="2.06%"
              />

              <Items
                image="https://bitpanda-broker-production-assets.s3-eu-west-1.amazonaws.com/static/cryptocoin/bnb.svg"
                title="MATIC"
                dot="• $0.52"
                percent="2.06%"
              />
            </div>
          </marquee>

          <div className="containerBtn">
            {loginBtnVisible ? (
              <Button className="login-btn" onClick={handleShow}>
                Login With MMIT Domain
              </Button>
            ) : (
              <>
                <h5 className="text-light my-4">{userName}</h5>
                <Button className="login-btn" onClick={logOutUser}>
                  LogOut
                </Button>
              </>
            )}
          </div>

          {loading ? (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Insert Your MMIT Domain</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="text"
                      placeholder="Domain"
                      onChange={(e) => {
                        setDomain(e.target.value);
                        setInputError("");
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      type="number"
                      placeholder="Token Id"
                      onChange={(e) => {
                        setTokenId(e.target.value);
                      }}
                    />
                  </Form.Group>

                  <p className="text-danger my-2">{inputError}</p>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="dark" onClick={onSubmit}>
                  Login
                </Button>
              </Modal.Footer>
            </Modal>
          )}
        </div>
      </div>
    </>
  );
};

export default Main;
