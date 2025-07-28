import React from 'react';
import './Aboutus.css';
import clouds from '../assets/clouds.jpg';

export default function Aboutus() {
  return (




    <div
      className="about-container"
      style={{ backgroundImage: `url(${clouds})` }}
    >
      <div className="overlay">
        <h1>About Us</h1>
        <p>Welcome to HIROphotography — where every moment is a memory.</p>
      </div>
    </div>
  );
}
