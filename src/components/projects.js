import React from "react";

import project1 from "../image/project1.png";
import project2 from "../image/project2.png";

const Projects = () => {
  return (
    <div className="projects">
      <h1>PROJECTS</h1>
      <div className="project1">
        <img src={project1} />
        <div className="project1b">
          <h2>Inbetween Card Game</h2>
          <p className="paragraph1">
            This is a two player cardgame where each player has to bet against
            each other whether the value of the folded card is in between the
            two face up cards. The player that loses all of his coins loses the
            game. For this game I used vanilla Javascript DOM.
          </p>
        </div>
      </div>
      <div className="project2">
        <div className="project2b">
          <h2>News Headline</h2>
          <p className="paragraph1">lorem ipsum dolem.</p>
        </div>
        <img src={project2} />
      </div>
    </div>
  );
};

export default Projects;
