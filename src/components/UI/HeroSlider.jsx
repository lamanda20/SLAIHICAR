import React from "react";

import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

import "../../styles/hero-slider.css";

const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <Slider {...settings} className="hero__slider">
      <div className="slider__item slider__item-01 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">À partir de 30€ par jour</h4>
            <h1 className="text-light mb-4">Louez votre voiture idéale dès aujourd'hui</h1>
            <button className="btn reserve__btn mt-4">
              <Link to="/cars">Voir les véhicules</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-02 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">Offre spéciale : -50% sur la première location</h4>
            <h1 className="text-light mb-4">Réservez maintenant et économisez</h1>
            <button className="btn reserve__btn mt-4">
              <Link to="/cars">Réserver une voiture</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-03 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">Assistance 24h/24 et 7j/7</h4>
            <h1 className="text-light mb-4">Voyagez en toute sérénité avec Location Express</h1>
            <button className="btn reserve__btn mt-4">
              <Link to="/cars">Découvrir nos offres</Link>
            </button>
          </div>
        </Container>
      </div>
    </Slider>
  );
};

export default HeroSlider;
