import React, { useState } from 'react';
import MealCards from './MealCards';
import './index.css';
import Loder from './Loder'; // ✅ Make sure filename matches

const MainPage = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const getData = async () => {
    try {
      if (search === '') {
        setMsg('Please Enter Something');
        setData([]);
      } else {
        setLoading(true);
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        const jsonData = await get.json();
        setLoading(false);

        if (jsonData.meals) {
          setData(jsonData.meals);
          setMsg('');
        } else {
          setData([]);
          setMsg('No meals found. Try searching for something else!');
        }
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <div className="container my-5">
      <div className="col-12 d-flex justify-content-center pb-2">
        <h2>🍽️ Recipe App</h2>
      </div>

      <div className="row mb-4">
        <div className="col-md-8 offset-md-2 d-flex">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Enter Dish"
            onChange={handleInput}
            value={search}
          />
          <button className="custom-button" onClick={getData}>
            Search
          </button>
        </div>
      </div>

      <div className="row">
        {loading ? (
          <Loder />
        ) : data.length > 0 ? (
          data.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <MealCards details={item} />
            </div>
          ))
        ) : search === '' ? (
          <div className="text-center">
            <img
              src="https://i.chzbgr.com/full/6411937280/hC4DE05B2/infinifry"
              alt="Hungry gif"
              style={{ maxWidth: '300px', opacity: 0.9 }}
            />
            <h5 className="mt-3 text-muted">Search your favorite dish and let's get cooking! 👨‍🍳</h5>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-danger">{msg}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainPage;
