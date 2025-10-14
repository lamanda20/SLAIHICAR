import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { useParams, useNavigate } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import carData from "../assets/data/carData";
import { Link } from "react-router-dom";

// Composant BackButton moderne identique à celui de Booking
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
                transform: isHovered ? "translateY(-3px) scale(1.02)" : "translateY(0) scale(1)",
                position: "relative",
                overflow: "hidden",
                minWidth: "140px",
                justifyContent: "center",
                marginBottom: "30px",
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
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
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
                    transform: isHovered ? "translateX(-3px) rotate(-5deg)" : "translateX(0) rotate(0deg)",
                    color: isHovered ? "#c5a572" : "white",
                    position: "relative",
                    zIndex: 2,
                }}
            />

            {/* Texte */}
            <span style={{
                position: "relative",
                zIndex: 2,
                fontWeight: "600",
                transition: "color 0.3s ease",
                color: isHovered ? "#c5a572" : "white",
            }}>
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

const CarDetails = () => {
    const { slug } = useParams();
    const singleCarItem = carData.find((item) => item.carName === slug);

    // État pour gérer l'image principale sélectionnée
    const [selectedImage, setSelectedImage] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
        // Réinitialiser l'image sélectionnée quand on change de voiture
        setSelectedImage(0);
    }, [singleCarItem]);

    // Fonction pour changer l'image principale
    const handleImageClick = (index) => {
        setSelectedImage(index);
    };

    return (
        <Helmet title={singleCarItem.carName}>
            <section style={{ paddingTop: "120px" }}>
                <Container>
                    {/* Bouton Retour moderne */}
                    <Row>
                        <Col xs="12">
                            <BackButton />
                        </Col>
                    </Row>

                    <Row>
                        <Col lg="6">
                            <div className="car__images">
                                <div className="main__image mb-3">
                                    <img
                                        src={singleCarItem.images[selectedImage]}
                                        alt={`${singleCarItem.carName} vue ${selectedImage + 1}`}
                                        className="w-100 main-car-img"
                                    />
                                </div>

                                <div className="image__gallery">
                                    <Row>
                                        {singleCarItem.images.map((img, index) => (
                                            <Col xs="6" md="4" key={index} className="mb-3">
                                                <img
                                                    src={img}
                                                    alt={`${singleCarItem.carName} ${index + 1}`}
                                                    className={`w-100 gallery-img ${
                                                        selectedImage === index ? "active" : ""
                                                    }`}
                                                    style={{
                                                        height: "120px",
                                                        objectFit: "cover",
                                                        borderRadius: "8px",
                                                        cursor: "pointer",
                                                        border:
                                                            selectedImage === index
                                                                ? "3px solid #C5A572"
                                                                : "2px solid #e9ecef",
                                                        transition: "all 0.3s ease",
                                                    }}
                                                    onClick={() => handleImageClick(index)}
                                                />
                                            </Col>
                                        ))}
                                    </Row>
                                </div>
                            </div>
                        </Col>

                        <Col lg="6">
                            <div className="car__info">
                                <h2 className="section__title">{singleCarItem.carName}</h2>
                                <p className="car__brand">
                                    {singleCarItem.brand} • {singleCarItem.model}
                                </p>

                                <div className="car__rent-price d-flex align-items-center mt-3">
                                    <h6 className="rent__price fw-bold fs-4">
                                        {singleCarItem.price}€<span>/jour</span>
                                    </h6>
                                </div>

                                <div className="car__features mt-4">
                                    <h5 className="features__title">Caractéristiques du véhicule</h5>
                                    <div className="features__list">
                                        <div className="feature__item d-flex align-items-center gap-2 mb-2">
                                            <i className="ri-car-line feature-icon"></i>
                                            <span>Modèle: {singleCarItem.model}</span>
                                        </div>
                                        <div className="feature__item d-flex align-items-center gap-2 mb-2">
                                            <i className="ri-settings-2-line feature-icon"></i>
                                            <span>Transmission: {singleCarItem.automatic}</span>
                                        </div>
                                        <div className="feature__item d-flex align-items-center gap-2 mb-2">
                                            <i className="ri-navigation-line feature-icon"></i>
                                            <span>{singleCarItem.gps}</span>
                                        </div>
                                        <div className="feature__item d-flex align-items-center gap-2 mb-2">
                                            <i className="ri-user-line feature-icon"></i>
                                            <span>5 passagers</span>
                                        </div>
                                        <div className="feature__item d-flex align-items-center gap-2 mb-2">
                                            <span>4 bagages</span>
                                        </div>
                                        <div className="feature__item d-flex align-items-center gap-2 mb-2">
                                            <i className="ri-gas-station-line feature-icon"></i>
                                            <span>Essence / Diesel</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="car__description mt-4">
                                    <h5 className="description__title">Description</h5>
                                    <p className="section__description">
                                        {singleCarItem.description}
                                    </p>
                                </div>

                                <div className="car__actions mt-4">
                                    <Link
                                        to={`/booking/${singleCarItem.carName}`}
                                        className="btn btn-primary booking-btn w-100"
                                    >
                                        Réserver Maintenant
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    {/* Bloc d'informations complémentaires dans une nouvelle rangée */}
                    <Row>
                        <Col lg="12">
                            <div className="car__additional-info">
                                <h4 className="section__title text-center mb-4">
                                    Informations Complémentaires
                                </h4>

                                <Row>
                                    <Col lg="4" md="6" className="mb-4">
                                        <div className="info__card text-center">
                                            <i className="ri-shield-check-line info-icon"></i>
                                            <h6>Assurance Incluse</h6>
                                            <p>
                                                Assurance tous risques incluse dans le prix de location
                                            </p>
                                        </div>
                                    </Col>

                                    <Col lg="4" md="6" className="mb-4">
                                        <div className="info__card text-center">
                                            <i className="ri-customer-service-line info-icon"></i>
                                            <h6>Support 24/7</h6>
                                            <p>
                                                Assistance clientèle disponible 24h/24 et 7j/7
                                            </p>
                                        </div>
                                    </Col>

                                    <Col lg="4" md="6" className="mb-4">
                                        <div className="info__card text-center">
                                            <i className="ri-road-map-line info-icon"></i>
                                            <h6>Kilométrage Illimité</h6>
                                            <p>
                                                Parcourez autant de kilomètres que vous souhaitez
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <style jsx>{`
                .main-car-img {
                    border-radius: 12px;
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
                    height: 300px;
                    object-fit: cover;
                }

                .gallery-img:hover {
                    border-color: #c5a572 !important;
                    transform: scale(1.05);
                    transition: all 0.3s ease;
                }

                .car__brand {
                    color: #6c757d;
                    font-size: 1.1rem;
                    font-weight: 500;
                }

                .rent__price {
                    color: #c5a572;
                }

                .rent__price span {
                    color: #6c757d;
                    font-size: 0.9rem;
                }

                .features__title,
                .description__title {
                    color: #2c3e50;
                    font-weight: 600;
                    margin-bottom: 15px;
                    border-bottom: 2px solid #c5a572;
                    padding-bottom: 8px;
                }

                .feature-icon {
                    color: #c5a572;
                    font-size: 1.1rem;
                }

                .booking-btn {
                    background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
                    border: none;
                    padding: 15px;
                    font-size: 1.1rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .booking-btn:hover {
                    background: linear-gradient(135deg, #c5a572 0%, #d4b583 100%);
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(197, 165, 114, 0.3);
                }

                .info__card {
                    background: #f8f9fa;
                    padding: 30px 20px;
                    border-radius: 12px;
                    border: 1px solid #e9ecef;
                    transition: all 0.3s ease;
                }

                .info__card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
                }

                .info-icon {
                    font-size: 2.5rem;
                    color: #c5a572;
                    margin-bottom: 15px;
                }

                .info__card h6 {
                    color: #2c3e50;
                    font-weight: 600;
                    margin-bottom: 10px;
                }

                .info__card p {
                    color: #6c757d;
                    font-size: 0.9rem;
                    margin: 0;
                }
            `}</style>
        </Helmet>
    );
};

export default CarDetails;

