import React, { useState } from 'react';
import './photography.css';

import flower1 from '../assets/flower.jpg';
import sthapana from '../assets/sthapana.jpeg';
import sthapana0 from '../assets/sthapana1.jpg';
import sthapan1 from '../assets/sthapana2.jpg';
import clouds from '../assets/clouds.jpg';
import flower from '../assets/IMG_20250526_170230.jpg';
import pinkflower from '../assets/pinkflowers.jpg';
import sthapana2 from '../assets/sthapana2.jpg';
import sthapan3 from '../assets/sthapana3.jpg';

export default function Products() {
  const [selectedImage, setSelectedImage] = useState(null);

  const items = [
    { id: 1, name: 'Flower Bloom', description: 'Aesthetic flower captured in full bloom with vibrant colors.', image: flower1 },
    { id: 2, name: 'Sthapana Rai', description: 'A beautiful girl with an elegant smile and charming personality.', image: sthapana0 },
    // { id: 3, name: 'Sthapana Rai', description: 'Capturing a candid moment of a lovely girl in natural light.', image: sthapan1 },
    { id: 4, name: 'Sthapana Rai', description: 'Radiant and graceful – a portrait of beauty and confidence.', image: sthapana },
    { id: 5, name: 'Cloudy Skies', description: 'A calm and peaceful sky filled with soft, drifting clouds.', image: clouds },
    { id: 6, name: 'Yellow Bloom', description: 'A fresh flower captured on a summer day, showcasing nature’s simplicity.', image: flower },
    { id: 7, name: 'Pink Petals', description: 'Dreamy pink flowers under soft light, creating a romantic atmosphere.', image: pinkflower },
    { id: 8, name: 'Sthapana Rai', description: 'A bright portrait reflecting confidence and inner beauty.', image: sthapana2 },
    { id: 9, name: 'Sthapana Rai', description: 'A thoughtful pose capturing charm and elegance.', image: sthapan3 },
  ];

  return (
    <>
      <div className="card-container">
        {items.map((item) => (
          <div
            className="card"
            key={item.id}
            onClick={() => setSelectedImage(item.image)}
          >
            {item.image && (
              <img src={item.image} alt={item.name} className="card-image" />
            )}
            <h3>{item.name}</h3>
            <p><strong>Description:</strong> {item.description}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <span className="close">*</span>
          <img src={selectedImage} alt="Large View" className="modal-image" />
        </div>
      )}
    </>
  );
}
