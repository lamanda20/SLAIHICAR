import React, { useState, useEffect } from "react";
import "../../styles/back-to-top-wtsp-buttons.css";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

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

  return (
    <div
      className={`floating-actions ${visible ? "visible" : ""}`}
      aria-hidden={!visible}
    >
      <button
        className="back-to-top"
        onClick={scrollToTop}
        aria-label="Remonter en haut"
        title="Remonter en haut"
      >
        <i className="ri-arrow-up-s-line" />
      </button>

      <button
        className="whatsapp-fab"
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
