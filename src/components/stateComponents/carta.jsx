import React from "react";
import "./card.css";

import Behind from "../../Assets/Behind.jpg";

export default function Carta({ card, seleccion, frente, unactive }) {
  const seleccionar = () => {
    if (!unactive) {
      seleccion(card);
    }
  };

  return (
    <div className="card">
      <div className={frente ? "girada" : ""}>
        <div>
          <img className="front" src={card.image} alt="Front" id={card.type} />
          <input
            type="image"
            className="back"
            src="./Assets/Behind.jpg"
            alt={Behind}
            onClick={seleccionar}
          />
        </div>
      </div>
    </div>
  );
}
