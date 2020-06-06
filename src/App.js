import React, { useState, useEffect, useCallback } from "react";

import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

import "./styles.scss";

import { Navbar } from "react-materialize";

export default function App() {
  const [ingredients, setIngredients] = useState({
    flour: 400,
    water: 0,
    salt: 0,
    yeast: 0,
  });

  const calculateIngredients = useCallback(() => {
    const water = Math.floor(ingredients.flour * 0.65);
    const salt = Math.floor(ingredients.flour * 0.04);
    const yeast = Math.floor(ingredients.flour * 0.01);

    setIngredients((old) => ({ ...old, water, salt, yeast }));
  }, [ingredients.flour]);

  useEffect(() => {
    calculateIngredients();
  }, [calculateIngredients]);

  return (
    <div className="container">
      <div className="row">
        <h1>Calculadora Massa de Pizza</h1>
      </div>

      <div className="row">
        <div class="input-field col-12">
          <input
            type="number"
            step="10"
            min="10"
            value={ingredients.flour}
            onChange={(event) =>
              setIngredients({ ...ingredients, flour: event.target.value })
            }
          />
          <label for="first_name">Quantidade de Farinha de Trigo</label>
          <span class="helper-text" data-error="wrong" data-success="right">
            Em gramas
          </span>
        </div>
      </div>

      <div className="row">
        <ul class="collection with-header">
          <li class="collection-header">
            <h4>Quantidades</h4>
          </li>
          <li class="collection-item">Farinha: {ingredients.flour}g</li>
          <li class="collection-item">Água: {ingredients.water}ml</li>
          <li class="collection-item">Sal: {ingredients.salt}g</li>
          <li class="collection-item">Fermento: {ingredients.yeast}g</li>
        </ul>
      </div>
    </div>
  );
}
