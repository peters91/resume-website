import React from "react"
import { Link } from "gatsby"
import NavBar from "../components/navbar"

import Head from "../components/head"
import ResumeProjectPhoto from "./images/mainpageimg/logo.png"
import QuizProjectPhoto from "./images/quizwebimg/supplies.jpg"
import GameProjectPhoto from "./images/gamewebimg/sortExample.jpg"
import Header from "../components/header"

export default function Projects() {
  return (
    <div>
      <Head />
      <Header name="Projects" />
      <NavBar />

      <section className="project-list">
        <Link to="/projectpages/resumewebsite">
          <div>
            <figure>
              <img src={ResumeProjectPhoto} alt="logo of website" />
            </figure>
            <article>
              <h2>Resume Website Project</h2>
              <h3>July 2020</h3>
              <p>
                A static website created to showcase my current interests,
                goals, and accomplishments. In order to continue practicing my
                web development skills, this site was built from scratch using
                HTML and CSS. I incorporated AWS's S3 and Route 53 to host this
                site.
              </p>
            </article>
          </div>
        </Link>

        <Link to="/projectpages/quizwebsite">
          <div>
            <figure>
              <img src={QuizProjectPhoto} alt="Supplies used during project" />
            </figure>
            <article>
              <h2>Quiz Website Project</h2>
              <h3>August 2020</h3>
              <p>
                This is a dynamic webpage allowing players to take quizzes on a
                variety of topics. It includes both individual and group
                challenge quiz formats.
              </p>
            </article>
          </div>
        </Link>

        <Link to="/projectpages/gamewebsite">
          <div>
            <figure>
              <img src={GameProjectPhoto} alt="Playing cards aligned" />
            </figure>
            <article>
              <h2>Game Website Project</h2>
              <h3>January 2021</h3>
              <p>
                This is a webpage allowing players to challenge each other to an
                online game. The players must put cards in the correct order, or
                risk collecting more cards, whoever gets rid of all their cards
                wins the game.
              </p>
            </article>
          </div>
        </Link>
      </section>
    </div>
  )
}
