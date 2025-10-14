import React from "react";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="Adresse de départ" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="Adresse d'arrivée" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="date" placeholder="Date du trajet" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="journey__time"
            type="time"
            placeholder="Heure du trajet"
            required
          />
        </FormGroup>
        <FormGroup className="select__group">
          <select>
            <option value="ac">Voiture climatisée</option>
            <option value="non-ac">Voiture non climatisée</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn">Trouver une voiture</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
