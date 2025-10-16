import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import "../../styles/common-section.css";

const CommonSection = ({ title }) => {
  // show/hide the mouse scroll hint; remember user's choice
  const [showScrollHint, setShowScrollHint] = useState(() => {
    try {
      return localStorage.getItem("scrollHintHidden") !== "true";
    } catch (e) {
      return true;
    }
  });

  useEffect(() => {
    const onScroll = () => {
      if (window.pageYOffset > 20 && showScrollHint) {
        setShowScrollHint(false);
        try {
          localStorage.setItem("scrollHintHidden", "true");
        } catch (e) {}
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showScrollHint]);

  const handleHintClick = () => {
    // Smooth scroll one viewport down (adjust offset if header is fixed)
    const offset = Math.max(window.innerHeight - 120, 300);
    window.scrollBy({ top: offset, behavior: "smooth" });
    setShowScrollHint(false);
    try {
      localStorage.setItem("scrollHintHidden", "true");
    } catch (e) {}
  };

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

          {/* Small mouse scroll hint placed under the hero content; hides on click or on scroll */}
          <div className="scroll-mouse-container">
            {showScrollHint && (
              <button
                className="scroll-mouse-hint"
                onClick={handleHintClick}
                aria-label="Bascule"
                title="Bascule"
              >
                <i className="ri-mouse-line" />
                <span className="scroll-hint-label">Bascule</span>
              </button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CommonSection;
