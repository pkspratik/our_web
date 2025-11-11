import React, { useState, useEffect } from "react";
import "./BodyBg.css";

export function BodyBg() {
  const [color, setColor] = useState("gradient1");

  useEffect(() => {
    const gradients = {
      gradient1:
        "linear-gradient(270deg, #ff9a9e, #fad0c4, #fbc2eb, #a1c4fd, #c2e9fb)",
      gradient2:
        "linear-gradient(270deg, #89f7fe, #66a6ff, #8ec5fc, #e0c3fc, #f9f9f9)",
      gradient3:
        "linear-gradient(270deg, #f6d365, #fda085, #fbc2eb, #a18cd1, #fad0c4)",
      gradient4:
        "linear-gradient(270deg, #00c6ff, #0072ff, #4facfe, #00f2fe, #43e97b)",
      gradient5:
        "linear-gradient(270deg, #ffecd2, #fcb69f, #ff9a9e, #fecfef, #a1c4fd)",
    };

    const body = document.body;
    body.style.backgroundAttachment = "fixed";
    body.style.backgroundSize = "400% 400%";
    body.style.transition = "background 1s ease";

    // Remove old animation if any
    body.style.animation = "none";

    // ✅ Animated gradient when "animation" is selected
    if (color === "animation") {
      body.style.background =
        "linear-gradient(270deg, #ff9a9e, #fad0c4, #fbc2eb, #a1c4fd, #43e97b)";
      body.style.backgroundSize = "400% 400%";

      // Add keyframes only once (avoid duplicates)
      if (!document.getElementById("gradient-animation-style")) {
        const style = document.createElement("style");
        style.id = "gradient-animation-style";
        style.innerHTML = `
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `;
        document.head.appendChild(style);
      }

      body.style.animation = "gradientMove 10s ease infinite";
    } else {
      // ✅ Static gradient background
      body.style.background = gradients[color];
    }
  }, [color]);

  return (
    /*<div className="text-center p-3">
      <button onClick={() => setColor("gradient1")} className="btn btn-success m-1">
        GreenPink
      </button>
      <button onClick={() => setColor("gradient2")} className="btn btn-primary m-1">
        Blue
      </button>
      <button onClick={() => setColor("gradient3")} className="btn btn-warning m-1">
        Sunset
      </button>
      <button onClick={() => setColor("gradient4")} className="btn btn-info m-1">
        Ocean
      </button>
      <button onClick={() => setColor("gradient5")} className="btn btn-danger m-1">
        Peach
      </button>
      <button onClick={() => setColor("animation")} className="btn btn-light m-1">
        Animation
      </button>
    </div>*/
    <div className="bg-button-row">
      <h6>Thimes Colour 👉</h6>
  <button onClick={() => setColor("gradient1")} className="btn btn-success">GreenPink</button>
  <button onClick={() => setColor("gradient2")} className="btn btn-primary">Blue</button>
  <button onClick={() => setColor("gradient3")} className="btn btn-warning">Sunset</button>
  <button onClick={() => setColor("gradient4")} className="btn btn-info">Ocean</button>
  <button onClick={() => setColor("gradient5")} className="btn btn-danger">Peach</button>
  <button onClick={() => setColor("animation")} className="btn btn-light">Animation</button>
</div>


  );
}
