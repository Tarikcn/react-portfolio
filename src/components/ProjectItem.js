import React from "react";

function ProjectItem({ image, name }) {
  return (
    <div className="projectItem">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="bgImage"
      ></div>
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <h1 style={{ marginTop: "auto" }}>{name}</h1>
      </div>
    </div>
  );
}

export default ProjectItem;
