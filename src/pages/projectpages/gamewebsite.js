import React from "react"
import { Link } from "gatsby"
import Head from "../../components/head"
import NavBar from "../../components/navbar"

const GameProject = () => {
  return (
    <div>
      <section id="title">
        <h1>Game Website Project</h1>
      </section>
      <Head />
      <NavBar />

      <section className="blog">
        <section id="synopsis">
          <h2>Synopsis</h2>
          <p></p>
        </section>

        <section className="update">
          <h2>2021</h2>
          <p></p>
          <div className="update-img">
            <figure>
              <Link to="gamewebimg/">
                <img src="gamewebimg/" alt="" />
              </Link>
            </figure>
          </div>
        </section>
      </section>
    </div>
  )
}

export default GameProject
