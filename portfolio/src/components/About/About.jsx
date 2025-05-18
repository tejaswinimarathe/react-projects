import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I specialize in building responsive, dynamic, and user-friendly interfaces using technologies like HTML, CSS, Bootstrap, JavaScript, and React.js. I enjoy crafting clean layouts, implementing smooth interactions, and bringing designs to life on the web. My focus is always on performance, accessibility, and creating a great user experience across all devices.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Database developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I specialize in MongoDB, a powerful NoSQL database that allows me to work with flexible and scalable document-based data structures. With a strong understanding of data modeling, queries, and aggregation, I build efficient, high-performance databases that scale seamlessly as applications grow. Whether it’s handling real-time data or designing efficient indexes, I focus on providing fast and reliable access to data for seamless application performance.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I develop robust and scalable backend systems, integrating seamlessly with frontend applications. I’ve worked with tools and frameworks like Node.js and Express, and understand how to structure APIs, handle server-side logic, and ensure secure data transactions. My goal is to build reliable systems that serve fast and secure experiences to users.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;