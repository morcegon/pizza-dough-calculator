import React, { useState, useEffect, useCallback } from "react";

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
    <div>
      <h1>Calculadora Massa de Pizza</h1>

      <h2>Quantidade de Farinha de Trigo</h2>
      <input
        type="number"
        step="10"
        min="10"
        value={ingredients.flour}
        onChange={(event) =>
          setIngredients({ ...ingredients, flour: event.target.value })
        }
      />

      <h3>Receita</h3>
      <ul>
        <li>Farinha: {ingredients.flour}g</li>
        <li>Água: {ingredients.water}ml</li>
        <li>Sal: {ingredients.salt}g</li>
        <li>Fermento: {ingredients.yeast}g</li>
      </ul>
    </div>
  );
}
