import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";

import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="À propos">
      <CommonSection title="NOTRE HÉRITAGE • 25 ANS D'EXCELLENCE" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  Nous nous engageons à offrir des solutions de mobilité sûres
                </h2>

                <p className="section__description">
                  Chez Location Express, nous mettons à votre disposition une large gamme de véhicules récents et parfaitement entretenus pour répondre à tous vos besoins de déplacement. Notre priorité est votre sécurité et votre confort, que ce soit pour un voyage d'affaires, des vacances en famille ou un déplacement ponctuel.
                </p>

                <p className="section__description">
                  Notre équipe expérimentée vous accompagne à chaque étape, de la réservation à la restitution du véhicule. Nous proposons des tarifs transparents, un service client réactif et des options flexibles pour rendre votre expérience de location simple et agréable.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i className="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Besoin d'aide ?</h6>
                    <h4>+212 6 64 64 58 66</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Nos experts</h6>
              <h2 className="section__title">Notre équipe</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
