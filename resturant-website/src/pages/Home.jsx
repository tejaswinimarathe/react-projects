import React from 'react'
import Layout from '../components/Layout/Layout'
import { NavLink } from 'react-router-dom'
import banner from '../assets/banner.jpeg';
import '../styles/Home.css';
const Home = () => {
  return (
    <Layout>
      <div className="home" style={{backgroundImage:`url(${banner})`}}>
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>Best Food In India</p>
          <NavLink to={'/menu'}>
            <button>ORDER NOW</button>
          </NavLink>
        </div>
      </div>
    </Layout>
  )
}

export default Home
