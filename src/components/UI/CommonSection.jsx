import React from "react";
import { Container } from "reactstrap";
import "../../styles/common-section.css";

const CommonSection = ({ title }) => {
  return (
    <section className="common__section mb-5">
      <Container className="text-center">
        <div className="common__section-content">
          <div className="title__decorative-line"></div>
          <h1 className="common__title">
            <span className="title__highlight">{title}</span>
          </h1>
          <div className="title__decorative-line"></div>

          {/* Version modernisée du sous-titre */}
          <div className="modern__subtitle-container">
            <div className="subtitle__badge">
              <span className="badge__item excellence">
                <i className="ri-star-line"></i>
                Excellence
              </span>
              <span className="badge__separator">•</span>
              <span className="badge__item confiance">
                <i className="ri-shield-check-line"></i>
                Confiance
              </span>
              <span className="badge__separator">•</span>
              <span className="badge__item innovation">
                <i className="ri-lightbulb-line"></i>
                Innovation
              </span>
            </div>

            {/* Ligne décorative animée */}
            <div className="decorative__line-container">
              <div className="decorative__line left"></div>
              <div className="decorative__diamond">
                <i className="ri-diamond-line"></i>
              </div>
              <div className="decorative__line right"></div>
            </div>

            {/* Texte descriptif élégant */}
            <p className="elegant__description">
              Votre partenaire de confiance pour une mobilité d'exception
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CommonSection;
