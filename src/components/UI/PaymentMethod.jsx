import React from "react";

import masterCard from "../../assets/all-images/master-card.jpg";
import paypal from "../../assets/all-images/paypal.jpg";
import "../../styles/payment-method.css";

const PaymentMethod = () => {
  return (
    <>
      <div className="payment">
        <label className="d-flex align-items-center gap-2">
          <input type="radio" name="paiement" /> Virement bancaire direct
        </label>
      </div>

      <div className="payment mt-3">
        <label className="d-flex align-items-center gap-2">
          <input type="radio" name="paiement" /> Paiement par chèque
        </label>
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label className="d-flex align-items-center gap-2">
          <input type="radio" name="paiement" /> Carte MasterCard
        </label>
        <img src={masterCard} alt="MasterCard" />
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label className="d-flex align-items-center gap-2">
          <input type="radio" name="paiement" /> PayPal
        </label>
        <img src={paypal} alt="PayPal" />
      </div>
      <div className="payment text-end mt-5">
        <button>Réserver maintenant</button>
      </div>
    </>
  );
};

export default PaymentMethod;
