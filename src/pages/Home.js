import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Home.css"

const Home = () => {
  return <div className="home">
      <div className="about">
          <h2>Hi , my name is arash</h2>
          <div className="prompt">
          <p>A software developer with a passion for learnging and creating .</p>
          <LinkedInIcon/>
          <EmailIcon/>
          <GitHubIcon/>
          </div>

      </div>
      <div className="skills">
<h1>Skills</h1>
<ol className="list">
    <li className="item">
        <h2>Front-End</h2>
        <span>ReactJs , Redux , Html , Css , Npm ,, TailwindCss , </span>
    </li>
    <li className="item">
        <h2>Back-End</h2>
        <span>n NodeJS , Java Script , Expres.JS MySql , MongoDB </span>
    </li>
    <li className="item">
        <h2>Languages </h2>
        <span>JavaScript</span>
    </li>
</ol>
      </div>
  </div>;
};

export default Home;
