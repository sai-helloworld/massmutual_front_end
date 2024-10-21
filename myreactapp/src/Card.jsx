import Profile from "./assets/pavan.png";

function Card() {
  return (
    <div className="Card">
      <img src={Profile} alt="My Image" />
      <h2>Sai Pavan</h2>
      <p>I am a Student currently persuing my Btech</p>
    </div>
  );
}

export default Card;
