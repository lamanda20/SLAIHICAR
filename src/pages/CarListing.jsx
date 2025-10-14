import React, { useState, useMemo } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";
import "../styles/car-listing.css";

const CarListing = () => {
  const [sortBy, setSortBy] = useState("");

  // Fonction pour trier les voitures
  const sortedCars = useMemo(() => {
    let sorted = [...carData];

    switch (sortBy) {
      case "low":
        return sorted.sort((a, b) => a.price - b.price);
      case "high":
        return sorted.sort((a, b) => b.price - a.price);
      case "year":
        return sorted.sort((a, b) => (b.year || 2023) - (a.year || 2023));
      default:
        return sorted;
    }
  }, [sortBy]);

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <Helmet title="Voitures">
      <CommonSection title="COLLECTION PREMIUM • VOITURES D'EXCEPTION" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="filter__wrapper mb-5">
                <div className="sort__section">
                  <div className="sort__label">
                    <i className="ri-filter-3-line"></i>
                    <span>Trier par</span>
                  </div>

                  <div className="sort__controls">
                    <select
                      className="sort__dropdown"
                      value={sortBy}
                      onChange={handleSortChange}
                    >
                      <option value="">Sélectionner un tri</option>
                      <option value="low">Prix croissant</option>
                      <option value="high">Prix décroissant</option>
                      <option value="year">Plus récent</option>
                    </select>

                    {sortBy && (
                      <button
                        className="reset__btn"
                        onClick={() => setSortBy("")}
                        title="Réinitialiser le tri"
                      >
                        <i className="ri-close-line"></i>
                      </button>
                    )}
                  </div>
                </div>

                <div className="results__info">
                  <span className="results__count">
                    {sortedCars.length} véhicule
                    {sortedCars.length > 1 ? "s" : ""} trouvé
                    {sortedCars.length > 1 ? "s" : ""}
                  </span>
                </div>
              </div>
            </Col>

            {sortedCars.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
