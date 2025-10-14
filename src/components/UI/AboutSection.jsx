import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/porsche-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section className="about__section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">À propos de SLAIHI Car</h4>
              <h2 className="section__title">
                Location de voitures à Marrakech
              </h2>
              <p className="section__description">
                Nous mettons à votre disposition des voitures récentes et bien
                entretenues, adaptées aussi bien aux particuliers qu'aux
                professionnels. Profitez d'une réservation simple et rapide, en
                ligne ou directement dans l'une de nos agences.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Véhicules modernes
                  et confortables.
                </p>
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Réservation rapide
                  et simple.
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Livraison à
                  l’aéroport ou à l'adresse.
                </p>
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Assistance 24h/24,
                  7j/7.
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img
                src={aboutImg}
                alt="Voiture à louer SLAIHI Car Marrakech"
                className="w-100"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
