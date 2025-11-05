import React, { useState, useEffect } from "react";
import './BodyBg.css';

export function BodyBg() {

const [color, setColor] = useState("gradient1");

  // Change body background when `color` changes
  useEffect(() => {
    const gradients = {
      gradient1:
        "linear-gradient(135deg, #ff9a9e, #fad0c4, #fbc2eb, #a1c4fd, #c2e9fb)",
      gradient2:
        "linear-gradient(135deg, #89f7fe, #66a6ff, #8ec5fc, #e0c3fc, #f9f9f9)",
      gradient3:
        "linear-gradient(135deg, #f6d365, #fda085, #fbc2eb, #a18cd1, #fad0c4)",
      gradient4:
        "linear-gradient(135deg, #00c6ff, #0072ff, #4facfe, #00f2fe, #43e97b)",
      gradient5:
        "linear-gradient(135deg, #ffecd2, #fcb69f, #ff9a9e, #fecfef, #a1c4fd)",
    };

    document.body.style.background = gradients[color];
    document.body.style.backgroundAttachment = "fixed"; // smooth scroll effect
    document.body.style.backgroundSize = "400% 400%"; // smooth gradient fill
    document.body.style.transition = "background 1s ease"; // fade transition
  }, [color]);




 return (
    <div className="text-center p-3">
      <button
        onClick={() => setColor("gradient1")}
        className="btn btn-success m-2"
      >
        Green-Pink
      </button>
      <button
        onClick={() => setColor("gradient2")}
        className="btn btn-primary m-2"
      >
        Blue Sky
      </button>
      <button
        onClick={() => setColor("gradient3")}
        className="btn btn-warning m-2"
      >
        Sunset
      </button>
      <button
        onClick={() => setColor("gradient4")}
        className="btn btn-info m-2"
      >
        Ocean
      </button>
      <button
        onClick={() => setColor("gradient5")}
        className="btn btn-danger m-2"
      >
        Peach Dream
      </button>
    </div>
  );
  
}