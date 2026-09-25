import React from "react";
import mock01 from "../assets/images/mock01.png";
import mock02 from "../assets/images/mock02.png";
import mock03 from "../assets/images/mock03.png";
import mock04 from "../assets/images/mock04.png";
import mock05 from "../assets/images/mock05.png";
import mock06 from "../assets/images/mock06.png";
import mock07 from "../assets/images/mock07.png";
import mock08 from "../assets/images/mock08.png";
import mock09 from "../assets/images/mock09.png";
import mock10 from "../assets/images/mock10.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a
            href="https://github.com/VishalTyagi11/Battle-of-the-neighborhoods"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock01} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/VishalTyagi11/Battle-of-the-neighborhoods"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Battle of the Neighbourhoods</h2>
          </a>
          <p>
            Determining the optimal neighborhood to open a specific type of
            business (e.g., a coffee shop or a gym) by analyzing competitor
            density and neighborhood profiles.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/VishalTyagi11/SentimentAnalysis"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock02} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/VishalTyagi11/SentimentAnalysis"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Depression Detection from tweets</h2>
          </a>
          <p>
            A Binary Sentiment Analysis with the aim of detecting depression
            across various tweets.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/VishalTyagi11/Breastcancer"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock03} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/VishalTyagi11/Breastcancer"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Breast Cancer Detection</h2>
          </a>
          <p>
            The methodology involves use of classification techniques like
            Support Vector Machine (SVM), K-Nearest Neighbor (K-NN) and Naïve
            Bayes.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/vaishali1425/dk1_mercenaries"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock04} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/vaishali1425/dk1_mercenaries"
            target="_blank"
            rel="noreferrer"
          >
            <h2>SIH 2018</h2>
          </a>
          <p>
            Final Project for Smart India Hackathon 2018. The project is about
            NYKS problem statement involving full stack web development
            authentication using face voice and password. The project is built
            using Python, OpenCV, and Flask.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/amelvatic/sciot"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock05} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/amelvatic/sciot"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Smart Greenhouse System</h2>
          </a>
          <p>
            Smart Greenhouse is an intelligent system designed to automate and
            optimize the growth and health of plants by maintaining ideal
            temperature, humidity, and soil moisture levels for plant inside
            greenhouse. The system uses sensor data to monitor the greenhouse
            environment and employs AI algorithms to adjust conditions as
            needed, ensuring consistent and tailored care for the plants.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/VishalTyagi11/Arithmetic_Reasoning_Using_Gpt2"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock06} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/VishalTyagi11/Arithmetic_Reasoning_Using_Gpt2"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Arithmetic Reasoning Using GPT-2</h2>
          </a>
          <p>
            Implemented an arithmetic reasoning system using GPT-2 to solve
            complex mathematical problems. The project involved training the
            model on a dataset of arithmetic questions and answers, and
            evaluating its performance on a test set.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
