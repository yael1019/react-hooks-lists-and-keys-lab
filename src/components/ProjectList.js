import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const projList = projects.map(projObj => <ProjectItem key={ projObj.id } name={ projObj.name } about={ projObj.about } technologies={ projObj.technologies}/>)
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projList}</div>
    </div>
  );
}

export default ProjectList;
