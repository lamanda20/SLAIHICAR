import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "À propos",
  },
  {
    path: "/privacy",
    display: "Politique de confidentialité",
  },
  {
    path: "/cars",
    display: "Nos véhicules",
  },
  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  <i className="ri-car-line"></i>
                  <span>
                    SLAIHI CAR <br /> Location de voitures
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              SLAIHI CAR est votre partenaire de confiance pour la location de voitures à des prix compétitifs. Profitez d’un large choix de véhicules récents et d’un service client disponible pour répondre à tous vos besoins de mobilité.
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Liens rapides</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Agence principale</h5>
              <p className="office__info">45 Avenue de la Liberté, 75000 Paris, France</p>
              <p className="office__info">Téléphone : +33 1 23 45 67 89</p>
              <p className="office__info">Email : contact@slaihicar.fr</p>
              <p className="office__info">Horaires : 8h00 - 20h00 (Lun - Sam)</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Newsletter</h5>
              <p className="section__description">Abonnez-vous à notre newsletter</p>
              <div className="newsletter">
                <input type="email" placeholder="Votre email" />
                <span>
                  <i className="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i className="ri-copyright-line"></i>
                Copyright {year}, Développé par SLAIHI CAR. Tous droits réservés.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
