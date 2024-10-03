import { PrimaryButtons } from "../../Components";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-main">
      <div className="hero-text">
        <h6 className="hero-subtitle">Welcome To Cyborg</h6>
        <h4 className="hero-title">
          <em>Browse</em>Our Populer Games Here
        </h4>
        <PrimaryButtons> Browse Now</PrimaryButtons>
      </div>
    </div>
  );
};
export default Hero;
