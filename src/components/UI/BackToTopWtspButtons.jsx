import React, { useState, useEffect } from "react";
import "../../styles/back-to-top-wtsp-buttons.css";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  // show/hide the small mouse hint; remember user preference in localStorage
  const [showMouseHint, setShowMouseHint] = useState(() => {
    try {
      return localStorage.getItem("mouseHintHidden") !== "true";
    } catch (e) {
      return true;
    }
  });

  useEffect(() => {
    
    const getThreshold = () => Math.min(window.innerHeight || 600, 900);

    const onScroll = () => {
      const threshold = getThreshold();
      setVisible(window.pageYOffset > threshold);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // initial visibility
    onScroll();
    // update on resize so threshold stays accurate
    const onResize = () => onScroll();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openWhatsApp = () => {
    const whatsappNumber = "212639621297"; // no + or dashes
    const text = encodeURIComponent(
      "Bonjour, je souhaite obtenir des informations sur une réservation."
    );
    const waLink = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(waLink, "_blank");
  };

  const hideMouseHint = () => {
    setShowMouseHint(false);
    try {
      localStorage.setItem("mouseHintHidden", "true");
    } catch (e) {
      // ignore storage errors
    }
  };

  return (
    <div className="floating-actions-container">
      {/* Small mouse hint that says 'Bascule' — disappears when clicked and remembers choice */}
      {showMouseHint && (
        <button
          className="mouse-hint"
          onClick={hideMouseHint}
          aria-label="Bascule - masquer"
          title="Bascule"
        >
          <i className="ri-mouse-line" />
          <span className="mouse-label">Bascule</span>
        </button>
      )}
      {/* Bouton retour en haut - visible seulement lors du scroll */}
      <button
        className={`back-to-top ${visible ? "visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Remonter en haut"
        title="Remonter en haut"
      >
        <i className="ri-arrow-up-s-line" />
      </button>

      {/* Bouton WhatsApp - toujours visible */}
      <button
        className="whatsapp-fab always-visible"
        onClick={openWhatsApp}
        aria-label="Contacter via WhatsApp"
        title="Contacter via WhatsApp"
      >
        <i className="ri-whatsapp-line" />
      </button>
    </div>
  );
};

export default BackToTop;
