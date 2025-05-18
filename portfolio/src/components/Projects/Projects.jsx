import React from "react";
import ProjectCard from "./ProjectCard";
import ecommerce_app from "../../assets/ecommerce-app.mp4";
import giphy from '../../assets/giphy.mp4';
import airbnb from '../../assets/airbnb.mp4';
import cart from '../../assets/cartApp.mp4';
import recipe from '../../assets/recipe.mp4';
import calc from '../../assets/calc.mp4';
import resto from '../../assets/resto.mp4';
import weather from '../../assets/weather.mp4';

const Projects = () => {
  return (
      <div id="Projects" className="p-10 md:p-24 text-white text-center">
  <h1 className="text-2xl md:text-4xl font-bold">Projects</h1>
  <div className="py-12 px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
    <ProjectCard
      title="Mini Ecommerce App"
      main="A full-featured e-commerce application built using Next.js with integrated payment gateway and product management."
      src={ecommerce_app}
      codeLink="https://github.com/tejaswinimarathe/nextjs-expressjs-ecom"
    />
    <ProjectCard
      title="Giphy Clone"
      main="A clone of the Giphy platform that allows users to search and view trending GIFs using Giphy API using ReactJs."
      src={giphy}
      demoLink="https://react-projects-51w1.vercel.app/"
      codeLink="https://github.com/tejaswinimarathe/react-projects/tree/main/giphy-clone"
    />
    <ProjectCard
      title="Cart App"
      main="A simple shopping cart app that demonstrates state management and product listing functionality."
      src={cart}
      demoLink="https://react-cart-2-three.vercel.app/"
      codeLink="https://github.com/tejaswinimarathe/react-cart"
    />
    <ProjectCard
      title="Airbnb Clone"
      main="A clone of Airbnb that includes property listing, booking functionalities, and responsive design using Express Js and MongoDb."
      src={airbnb}
      demoLink="https://airbnb-project-five-phi.vercel.app/listings"
      codeLink="https://github.com/tejaswinimarathe/airbnb_project"
    />
    <ProjectCard
      title="Recipe App"
      main="A modern recipe app that allows users to search and view recipes using an external food API using React Js."
      src={recipe}
      demoLink="https://react-projects-enmq.vercel.app/"
      codeLink="https://github.com/tejaswinimarathe/react-projects/tree/main/recipe-app"
    />
    <ProjectCard
      title="Calculator App"
      main="A basic calculator built with React, supporting standard arithmetic operations and responsive UI Using React Js."
      src={calc}
      demoLink="https://react-projects-vsiw.vercel.app/"
      codeLink="https://github.com/tejaswinimarathe/react-projects/tree/main/calculator"
    />
    <ProjectCard
      title="Restaurant Website"
      main="A static restaurant website with a modern UI, responsive layout, and menu showcasing capabilities using React Js."
      src={resto}
      demoLink="https://react-projects-7dw7.vercel.app/"
      codeLink="https://github.com/tejaswinimarathe/react-projects/tree/main/resturant-website"
    />
    <ProjectCard
      title="Weather App"
      main="A weather forecast app that fetches real-time data from OpenWeather API and displays it in a clean UI using React Js."
      src={weather}
      demoLink="https://react-projects-xw7t.vercel.app/"
      codeLink="https://github.com/tejaswinimarathe/react-projects/tree/main/weather-app"
    />
  </div>
</div>

  );
};

export default Projects;
