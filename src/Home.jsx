import React from 'react';
import foodImage from './assets/food1.png'; 

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-green-100 to-yellow-100 min-h-screen flex items-center px-10 py-16">

      <div className="w-1/2 pr-8">
        <img
          src={foodImage}
          alt="Food & App"
          className="rounded-xl shadow-lg"
        />
      </div>


      <div className="w-1/2">
        <h1 className="text-6xl font-extrabold text-brown-800 mb-4">
          <span className="text-brown-700">Welcome</span>
        </h1>
        <h2 className="text-4xl text-green-400 font-semibold px-25 mb-2">
          To
        </h2>
        <h1 className="text-4xl text-green-600 font-extrabold mb-8 px-10">
          Insta Food
        </h1>
        <h3 className="text-2xl text-rose-700 font-bold mb-4">
          Book Food at Best Price — Insta Food
        </h3>
        <p className="text-lg text-gray-800 italic mb-6">
          “Good Food with Good Mindset” 🍽️
        </p>

        <button className="bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition">
          Explore Now 🚀
        </button>
      </div>
    </div>
  );
};

export default Home;
