import { useRef, React } from "react";
import Lottie from "lottie-react";
import hero from "../../animations/hero.json";
import "./hero.css";
function Hero() {
  const lottieRef = useRef();
  return (
    <section className="hero flex padded-section">
      <div className="left-section">
        <div className="avata-content" style={{ marginBottom: "3rem" }}>
          <img src="/images/tech.jpg" alt="" className="avatar" />
          <span className="icon-verified"></span>
        </div>
        <h1 className="title"> CodeWave Web Agency</h1>
        <p className="description">
          Your destination for cutting-edge website design. With a focus on
          React technology, we craft visually stunning and functionally seamless
          websites that elevate your online presence. At CodeWave, we blend
          creativity with expertise to bring your digital vision to life. Your
          journey to a standout website begins here.
        </p>
      </div>
      <div className="right-section animation">
        <Lottie
          lottieRef={lottieRef}
          onLoadedImages={() => {
            lottieRef.current.setSpeed(0.8);
          }}
          animationData={hero}
        />
      </div>
    </section>
  );
}

export default Hero;
