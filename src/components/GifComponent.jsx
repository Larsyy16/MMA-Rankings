// GifComponent.jsx
import React, { useEffect, useState } from "react";

const GifComponent = () => {
  return (
    <div>
      <div className="gif-container">
        <iframe
          title="Jon Jones Sticker"
          src="https://giphy.com/embed/kGdHb1zoKOx764R7MN"
          width="480"
          height="360"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default GifComponent;
