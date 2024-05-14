import React from "react";

function ProjectItem({ name, about, technologies }) {
  const technologiesItems = technologies.map((technologie) => (
    <span key={technologie}> {technologie}</span>
  ));
  return (
    <div className='project-item'>
      <h3>{name}</h3>
      <p>{about}</p>
      <div className='technologies'>{technologiesItems}</div>
    </div>
  );
}

export default ProjectItem;
