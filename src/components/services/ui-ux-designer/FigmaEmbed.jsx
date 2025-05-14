import React from "react";

const FigmaEmbed = ({ embedCode }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        overflow: "hidden",
        width: "100%",
        height: "500px"
      }}
      dangerouslySetInnerHTML={{ __html: embedCode }}
    />
  );
};

export default FigmaEmbed;