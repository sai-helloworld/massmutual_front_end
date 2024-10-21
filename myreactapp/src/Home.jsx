// function HomePage() {
//   return (
//     <>
//       <h1>This is home Page.</h1>
//       <h1>This is home Page.</h1>
//       <h1>This is home Page.</h1>
//       <h1>This is home Page.</h1>
//       <h1>This is home Page.</h1>
//       <h1>This is home Page.</h1>
//       <h1>This is home Page.</h1>
//       <h1>This is home Page.</h1>
//       <h1>This is home Page.</h1>
//       <h1>This is home Page.</h1>
//       <h1>This is home Page.</h1>
//     </>
//   );
// }

// export default HomePage;
import React from "react";
import retirementImage from "./assets/retirement.jpg";

const HomePage = () => {
  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>A Financial Planning and Life Insurance Company</h2>
          <h1>Plan today. Prosper tomorrow.</h1>
          <p>
            Want to build a better tomorrow? The feeling is Mutual. No matter
            where you are in your journey, we can help you protect your finances
            and get you closer to your goals.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
