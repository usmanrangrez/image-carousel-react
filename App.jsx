import { useState } from "react";
import messi from "./images/messi.jpg";
import haaland from "./images/haa.png";
import kdb from "./images/debr.png";

import "./index.css";

const images = [messi, kdb, haaland];

export default function App() {
  const [current, setCurrent] = useState(0);

  function nextSlide() {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }

  function prevSlide() {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }

  return (
    <div>
      <h2>Project 1: Carousel</h2>
      <div className="slider">
        <div className="left-arrow" onClick={prevSlide}>
          ⬅
        </div>
        <div className="images">
          {images.map(
            (image, index) =>
              current === index && (
                <div key={image} className="slide">
                  <img className="slide-image" src={image} alt="images" />
                </div>
              )
          )}
        </div>
        <div className="right-arrow" onClick={nextSlide}>
          ⮕
        </div>
      </div>
    </div>
  );
}
