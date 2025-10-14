import React from "react";
import { Col } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "../../styles/car-item.css";

const CarItem = (props) => {
    const { images, model, carName, automatic, speed, price } = props.item;
    const navigate = useNavigate();

    const imgUrl = images && images.length > 0 ? images[0] : "";

    const handleNavigation = (path) => {
        // Navigation vers la nouvelle page
        navigate(path);

        // Force scroll vers le tout début de la page après navigation
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });

            // Double sécurité avec un scroll instantané
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 50);
        }, 50);
    };

    return (
        <Col lg="4" md="4" sm="6" className="mb-5">
            <div className="car__item">
                <div className="car__img">
                    <img src={imgUrl} alt={carName} className="w-100" />
                </div>

                <div className="car__item-content mt-4">
                    <h4 className="section__title text-center">{carName}</h4>
                    <h6 className="rent__price text-center mt-2">
                        ${price}.00 <span>/ Day</span>
                    </h6>

                    <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
                        <span className="d-flex align-items-center gap-1">
                            <i className="ri-car-line"></i> {model}
                        </span>
                        <span className="d-flex align-items-center gap-1">
                            <i className="ri-settings-2-line"></i> {automatic}
                        </span>
                        <span className="d-flex align-items-center gap-1">
                            <i className="ri-timer-flash-line"></i> {speed}
                        </span>
                    </div>

                    <div className="d-flex align-items-center gap-3">
                        <button
                            className="w-50 car__item-btn car__btn-rent"
                            onClick={() => handleNavigation(`/booking/${carName}`)}
                        >
                            Louer
                        </button>

                        <button
                            className="w-50 car__item-btn car__btn-details"
                            onClick={() => handleNavigation(`/cars/${carName}`)}
                        >
                            Détails
                        </button>
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default CarItem;
