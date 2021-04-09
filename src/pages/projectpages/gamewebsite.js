import React from "react"
import { Link } from "gatsby"
import Head from "../../components/head"
import NavBar from "../../components/navbar"
import Header from "../../components/header"

const GameProject = () => {
  return (
    <div>
      <Head />
      <Header name="Game Website Project" />
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
