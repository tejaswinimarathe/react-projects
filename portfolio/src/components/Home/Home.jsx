// import React from "react";
// import avatarImg from "../../assets/7358602-removebg-preview.png";
// import myprofile from "../../assets/my-profile.png";
// import profile2 from "../../assets/profile2.png";
// import TextChange from "../TextChange";

// const Home = () => {
//   return (
//     <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
//       <div className="md:w-2/4 md:pt-10 ">
//         <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
//           <TextChange />
//         </h1>
//         <p className="text-sm md:text-2xl tracking-tight mt-2 ">
//             I am a passionate and enthusiastic MERN Stack
//             Developer, recently post graduated with a strong
//             foundation in web development. Proficient in
//             JavaScript, MongoDB and Node.js, I am eager to
//             contribute my skills and learn in a dynamic
//             development environment.

//         </p>
//         <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
//           Contact Me
//         </button>
//       </div>
//       <div>
//         <img className="w-40 h-40 md:w-60 md:h-60 object-cover rounded-full mx-auto shadow-lg" src={myprofile}   alt="" />
//       </div>
//     </div>
//   );
// };

// export default Home;


import React from "react";
import myprofile from "../../assets/my-profile.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex flex-col md:flex-row justify-center items-center p-10 md:p-20 space-y-10 md:space-y-0">
      {/* Text Section */}
      <div className="md:w-2/4 text-center md:text-left">
        <h1 className="text-3xl md:text-6xl font-bold leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight mt-4">
          I am a passionate and enthusiastic MERN Stack Developer, recently post-graduated with a strong foundation in web development. Proficient in JavaScript , React.js , MongoDB, and Node.js, I am eager to contribute my skills and learn in a dynamic development environment.
        </p>
        <button className="mt-6 text-white py-2 px-6 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          <a href="#Footer">Contact Me</a>
        </button>
      </div>

      {/* Image Section */}
      <div className="mt-10 md:mt-0">
        <img
          className="w-40 h-40 md:w-60 md:h-60 object-cover rounded-full mx-auto md:ml-8"
          src={myprofile}
          alt="My Profile"
          style={{
            objectPosition: 'top',
            border:'4px solid #465697' // Ensures the top of the image is visible
          }}
        />
      </div>
    </div>
  );
};

export default Home;
