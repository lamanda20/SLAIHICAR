import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
          SLAIHI Car offre un service irréprochable ! La réservation a été simple et rapide, et la voiture était en excellent état. Le personnel est très professionnel et à l’écoute. Je recommande vivement cette agence pour vos déplacements.
        </p>
        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">Sophie Martin</h6>
            <p className="section__description">Cliente</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          Très satisfait de mon expérience avec SLAIHI Car. Les tarifs sont compétitifs et la prise en charge du véhicule s’est faite sans attente. Je n’hésiterai pas à refaire appel à leurs services lors de mon prochain séjour.
        </p>
        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">Lucas Dupont</h6>
            <p className="section__description">Client</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          J’ai loué une voiture chez SLAIHI Car pour un week-end en famille. Le véhicule était propre, récent et parfaitement adapté à nos besoins. Merci à toute l’équipe pour leur accueil chaleureux et leur efficacité.
        </p>
        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">Claire Bernard</h6>
            <p className="section__description">Cliente</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          SLAIHI Car propose un large choix de véhicules récents et bien entretenus. J’ai particulièrement apprécié la flexibilité lors de la restitution du véhicule et la disponibilité du service client. Une expérience à renouveler !
        </p>
        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava04} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">Ahmed El Mansouri</h6>
            <p className="section__description">Client</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
