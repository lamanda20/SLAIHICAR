import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input, Label } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import carData from "../assets/data/carData";
import "../styles/booking.css";

const BackButton = ({ className = "" }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      type="button"
      className={`modern-back-btn ${className}`}
      onClick={() => navigate(-1)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Revenir en arrière"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        padding: "14px 28px",
        backgroundColor: isHovered ? "#34495e" : "#2c3e50",
        color: "white",
        border: "none",
        borderRadius: "50px",
        fontSize: "14px",
        fontWeight: "500",
        textTransform: "none",
        letterSpacing: "0.3px",
        cursor: "pointer",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        boxShadow: isHovered
          ? "0 12px 35px rgba(44, 62, 80, 0.4), 0 0 0 4px rgba(197, 165, 114, 0.15)"
          : "0 6px 20px rgba(44, 62, 80, 0.25)",
        transform: isHovered
          ? "translateY(-3px) scale(1.02)"
          : "translateY(0) scale(1)",
        position: "relative",
        overflow: "hidden",
        minWidth: "140px",
        justifyContent: "center",
      }}
    >
      {/* Effet de brillance au survol */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: isHovered ? "100%" : "-100%",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
          transition: "left 0.8s ease",
          pointerEvents: "none",
        }}
      />

      {/* Icône Remix Icon stylée */}
      <i
        className="ri-arrow-left-line"
        style={{
          fontSize: "18px",
          transition: "all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
          transform: isHovered
            ? "translateX(-3px) rotate(-5deg)"
            : "translateX(0) rotate(0deg)",
          color: isHovered ? "#c5a572" : "white",
          position: "relative",
          zIndex: 2,
        }}
      />

      {/* Texte */}
      <span
        style={{
          position: "relative",
          zIndex: 2,
          fontWeight: "600",
          transition: "color 0.3s ease",
          color: isHovered ? "#c5a572" : "white",
        }}
      >
        Retour
      </span>

      {/* Effet de cercle au clic */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "0",
          height: "0",
          background: "rgba(197, 165, 114, 0.3)",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          transition: "width 0.6s ease, height 0.6s ease",
          pointerEvents: "none",
        }}
        className="click-ripple"
      />
    </button>
  );
};

const Booking = () => {
  const { slug } = useParams();
  const car = carData.find((car) => car.carName === slug);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    datePickup: "",
    timePickup: "",
    dateReturn: "",
    timeReturn: "",
    address: "",
    city: "",
    postalCode: "",
    driverLicense: "",
    specialRequests: "",
  });

  // Scroll to top (remplace le bloc JS inséré par erreur dans formData)
  useEffect(() => {
    const scrollToTop = () =>
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });

    window.scrollTo(0, 0);
    const t1 = setTimeout(scrollToTop, 100);
    const t2 = setTimeout(scrollToTop, 300);
    const t3 = setTimeout(scrollToTop, 500);

    const handleLoad = () => scrollToTop();
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener("load", handleLoad);
    };
  }, [slug]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = "212639621297"; 

    const messageLines = [
      `Nouvelle réservation — SLAIHI CAR`,
      `Véhicule: ${car.carName} (${car.model || "N/A"})`,
      `Prix / jour: ${car.price}€`,
      ``,
      `Détails client:`,
      `Prénom: ${formData.firstName}`,
      `Nom: ${formData.lastName}`,
      `Email: ${formData.email}`,
      `Téléphone: ${formData.phone}`,
      ``,
      `Dates:`,
      `Prise en charge: ${formData.datePickup} ${formData.timePickup}`,
      `Retour: ${formData.dateReturn} ${formData.timeReturn}`,
      ``,
      `Adresse: ${formData.address}, ${formData.city} ${formData.postalCode}`,
      `Permis: ${formData.driverLicense || "Non fourni"}`,
      ``,
      `Demandes spéciales: ${formData.specialRequests || "Aucune"}`,
    ];

    const text = encodeURIComponent(messageLines.join("\n"));
    const waLink = `https://wa.me/${whatsappNumber}?text=${text}`;

  
    window.open(waLink, "_blank");


    alert(
      "Réservation préparée et ouverte dans WhatsApp. Nous vous contacterons sous 24h pour finaliser votre location."
    );
  };

  if (!car) {
    return <div>Véhicule non trouvé</div>;
  }

  const carImage = car.images?.[0] ?? car.imgUrl;

  return (
    <Helmet title="Réservation">
      <CommonSection title="RÉSERVATION EXPRESS • VOTRE VÉHICULE EN 3 CLICS" />

      <section className="booking__section" style={{ paddingTop: "20px" }}>
        <Container>
          <Row>
            <Col xs="12">
              <BackButton className="mb-4" />
            </Col>

            <Col lg="8" md="12">
              <div className="booking__form">
                <h3 className="booking__title">Informations de Réservation</h3>

                <Form onSubmit={handleSubmit}>
                  {/* Informations personnelles */}
                  <div className="form__section">
                    <h5 className="section__heading">
                      Informations Personnelles
                    </h5>
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <Label for="firstName">Prénom *</Label>
                          <Input
                            type="text"
                            name="firstName"
                            id="firstName"
                            placeholder="Votre prénom"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                          />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <Label for="lastName">Nom *</Label>
                          <Input
                            type="text"
                            name="lastName"
                            id="lastName"
                            placeholder="Votre nom"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <Label for="email">Email *</Label>
                          <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="votre.email@exemple.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <Label for="phone">Téléphone *</Label>
                          <Input
                            type="tel"
                            name="phone"
                            id="phone"
                            placeholder="06 12 34 56 78"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>

                  {/* Dates et horaires */}
                  <div className="form__section">
                    <h5 className="section__heading">
                      Dates et Horaires de Location
                    </h5>
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <Label for="datePickup">
                            Date de prise en charge *
                          </Label>
                          <Input
                            type="date"
                            name="datePickup"
                            id="datePickup"
                            value={formData.datePickup}
                            onChange={handleInputChange}
                            required
                          />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <Label for="timePickup">
                            Heure de prise en charge *
                          </Label>
                          <Input
                            type="time"
                            name="timePickup"
                            id="timePickup"
                            value={formData.timePickup}
                            onChange={handleInputChange}
                            required
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <Label for="dateReturn">Date de retour *</Label>
                          <Input
                            type="date"
                            name="dateReturn"
                            id="dateReturn"
                            value={formData.dateReturn}
                            onChange={handleInputChange}
                            required
                          />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <Label for="timeReturn">Heure de retour *</Label>
                          <Input
                            type="time"
                            name="timeReturn"
                            id="timeReturn"
                            value={formData.timeReturn}
                            onChange={handleInputChange}
                            required
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>

                  {/* Adresse */}
                  <div className="form__section">
                    <h5 className="section__heading">Adresse de Facturation</h5>
                    <FormGroup>
                      <Label for="address">Adresse *</Label>
                      <Input
                        type="text"
                        name="address"
                        id="address"
                        placeholder="Numéro et rue"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                      />
                    </FormGroup>

                    <Row>
                      <Col md="8">
                        <FormGroup>
                          <Label for="city">Ville *</Label>
                          <Input
                            type="text"
                            name="city"
                            id="city"
                            placeholder="Votre ville"
                            value={formData.city}
                            onChange={handleInputChange}
                            required
                          />
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup>
                          <Label for="postalCode">Code postal *</Label>
                          <Input
                            type="text"
                            name="postalCode"
                            id="postalCode"
                            placeholder="75000"
                            value={formData.postalCode}
                            onChange={handleInputChange}
                            required
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>

                  {/* Demandes spéciales */}
                  <div className="form__section">
                    <h5 className="section__heading">
                      Demandes Spéciales (Optionnel)
                    </h5>
                    <FormGroup>
                      <Label for="specialRequests">Commentaires</Label>
                      <Input
                        type="textarea"
                        name="specialRequests"
                        id="specialRequests"
                        rows="4"
                        placeholder="Siège bébé, GPS supplémentaire, etc."
                        value={formData.specialRequests}
                        onChange={handleInputChange}
                      />
                    </FormGroup>
                  </div>

                  <button type="submit" className="booking__submit-btn">
                    Confirmer la Réservation
                  </button>
                </Form>
              </div>
            </Col>

            <Col lg="4" md="12">
              <div className="booking__summary">
                <h4 className="summary__title">Résumé de la Réservation</h4>

                <div className="car__summary">
                  {carImage && (
                    <img
                      src={carImage}
                      alt={car.carName}
                      className="summary__car-img"
                    />
                  )}
                  <div className="car__details">
                    <h5>{car.carName}</h5>
                    <p className="car__model">{car.model}</p>
                  </div>
                </div>

                <div className="price__summary">
                  <div className="price__item">
                    <span>Prix par jour</span>
                    <span className="price">À partir de {car.price}€</span>
                  </div>
                  <div className="price__item total">
                    <span>Total estimé</span>
                    <span className="price">À partir de {car.price}€ / jour</span>
                  </div>
                </div>

                <div className="booking__note">
                  <h6>Informations importantes :</h6>
                  <ul>
                    <li>Âge minimum : 21 ans</li>
                    <li>Permis de conduire valide requis</li>
                    <li>Pièce d'identité obligatoire</li>
                    <li>Paiement à la prise en charge</li>
                    <li>Assurance incluse</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Booking;
