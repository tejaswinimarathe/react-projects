import React from 'react';
import { NavLink } from 'react-router-dom';
import'./index.css';

const MealCards = ({ details }) => {
  return (
    <div className="card h-100 shadow">
      <img src={details.strMealThumb} className="card-img-top" alt={details.strMeal} />
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title">{details.strMeal}</h5>
        <NavLink to={`/${details.idMeal}`} className=" mt-3">
          <button>View Recipe</button>
        </NavLink>
      </div>
    </div>
  );
};

export default MealCards;
