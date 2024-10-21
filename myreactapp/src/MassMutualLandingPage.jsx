import React from "react";
import newImage from "./assets/newimage.jpeg";
const MassMutualLandingPage = () => {
  return (
    <div>
      <section className="mm-hero-section">
        <div className="mm-content">
          <h1>Plan today. Prosper tomorrow.</h1>
          <p>
            Want to build a better tomorrow? The feeling is Mutual. No matter
            where you are in your journey, we can help you protect your finances
            and get you closer to your goals.
          </p>
        </div>
        <div className="mm-image-container">
          <img src={newImage} alt="Happy Family" className="mm-image" />
        </div>
      </section>
    </div>
  );
};

export default MassMutualLandingPage;
