import React from "react";

const Projects = () => {
  return (
    <div className="projects">
      <h1>PROJECTS</h1>
      <div className="project1">
        <a className="project1a" href="http://inbetween.surge.sh/">LINK</a>
        <p className="project1b"> 
          <h2>Inbetween Card Game</h2>
          This is a two player cardgame where each player has
          to bet against each other whether the value of the folded card is in
          between the two face up cards. The player that loses all of his coins
          loses the game. For this game I used vanilla Javascript DOM.
        </p>
      </div>
      <div>
        <a href="http://newsheadline.surge.sh/">LINK</a>
      </div>
    </div>
  );
};

export default Projects;
