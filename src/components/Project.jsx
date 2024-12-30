import React from "react";

function Project({ title, image, deployedLink, repoLink }) {
  return (
    <div className="project">
      <img src={image} alt={`${title} screenshot`} />
      <h3>{title}</h3>
      <p>
        <a href={deployedLink} target="_blank" rel="noreferrer">View Live</a> | 
        <a href={repoLink} target="_blank" rel="noreferrer">GitHub</a>
      </p>
    </div>
  );
}

export default Project;
