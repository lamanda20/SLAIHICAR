import React from "react";
import "../../styles/become-driver.css";
import { Container, Row, Col } from "reactstrap";
import { useNavigate } from "react-router-dom";

import driverImg from "../../assets/all-images/cars-img/troc-3.jpeg";

const BecomeDriverSection = () => {
  const navigate = useNavigate();

  const handleChooseVehicle = () => {
    navigate("/cars");
    // ensure page is scrolled to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      setTimeout(() => window.scrollTo(0, 0), 50);
    }, 50);
  };

  return (
    <section className="become__driver">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__driver-img">
            <img src={driverImg} alt="" className="w-100" />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__driver-title">
              Réservez votre voiture dès maintenant !
            </h2>

            <button
              className="btn become__driver-btn mt-4"
              onClick={handleChooseVehicle}
              type="button"
            >
              Choisir Mon Véhicule
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriverSection;
