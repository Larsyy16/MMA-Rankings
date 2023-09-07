import React from "react";

const GifComponent = ({ src, title }) => {
  return (
    <div>
      <div className="gif-container">
        <iframe
          title={title}
          src={src}
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
