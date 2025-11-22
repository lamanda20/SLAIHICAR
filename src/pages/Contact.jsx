import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import "../styles/contact.css";

const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },
  {
    url: "#",
    icon: "ri-twitter-line",
  },
];

const Contact = () => {
  return (
    <Helmet title="Contact">
      <CommonSection title="NOUS CONTACTER • SUPPORT CLIENT 24/7" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Contactez-nous</h6>

              <Form>
                <FormGroup className="contact__form">
                  <Input placeholder="Votre nom" type="text" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Adresse e-mail" type="email" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    rows="5"
                    placeholder="Votre message"
                    className="textarea"
                  ></textarea>
                </FormGroup>

                <button className="contact__btn" type="submit">
                  Envoyer le message
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Informations de contact</h6>
                <p className="section__description mb-0">
                  Hay Mabrouka, Marrakech
                </p>
                <div className="d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Téléphone :</h6>
                  <p className="section__description mb-0">+212 6 64 64 58 66</p>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">E-mail :</h6>
                  <p className="section__description mb-0">slaihitariq@gmail.com</p>
                </div>
                <h6 className="fw-bold mt-4">Suivez-nous</h6>

                <div className="d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className="social__link-icon"
                    >
                      <i className={item.icon}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
