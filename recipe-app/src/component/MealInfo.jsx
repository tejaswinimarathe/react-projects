import'./index.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from './Loder';

const MealInfo = () => {
  const { mealid } = useParams();
  const [info, setInfo] = useState(null);
 const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getInfo = async () => {
      try {
        setLoading(true); 
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
        const jsonData = await get.json();
        setLoading(false); 
        setInfo(jsonData.meals[0]);
      } catch (err) {
        console.log(err);
        setLoading(false); 
      }
    };

    if (mealid) {
      getInfo();
    }
  }, [mealid]);

  return (
    <>
      {
        loading ?
        <Loader/>
        :
        info && (
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <img src={info.strMealThumb} alt={info.strMeal} className="img-fluid rounded shadow" />
          </div>
          <div className="col-md-6">
            <h1 className="mb-3">{info.strMeal}</h1>
            <h4 className="text-muted">{info.strCategory} | {info.strArea}</h4>
            <h5 className="mt-4">Instructions</h5>
            <p>{info.strInstructions}</p>
            <a href={info.strYoutube} target="_blank" rel="noopener noreferrer" className=" mt-3">
             <button> Watch on YouTube</button>
            </a>
          </div>
        </div>
      </div>
    )
      }
    
    </>
  );
};

export default MealInfo;
