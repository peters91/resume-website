import React from "react"
import { Link } from "gatsby"
import Head from "../../components/head"
import NavBar from "../../components/navbar"
import BlogPostPhoto from "../images/quizwebimg/cssExample.png"

const ResumeProject = () => {
  return (
    <div>
      <section id="title">
        <h1>Resume Website Project</h1>
      </section>
      <Head />
      <NavBar />

      <section className="blog">
        <section id="synopsis">
          <h2>Synopsis</h2>
          <p>
            This project is a static website created to showcase my current
            interests, goals, and accomplishments. I built this site from
            scratch using HTML and CSS. I started this project to continue
            practicing my web development skills. I incorporated AWS's S3 and
            Route 53 to host this site.
          </p>
        </section>

        <section className="update">
          <h2>June 2, 2020</h2>
          <p>
            The first step in any project is to stop and make a plan. I decided
            what content should be displayed and then laid it out to get the
            right look. It was also important to allow for extensibility in the
            future. Before starting any code, I first wrote out a bio about
            myself and updated my resume. The next step was to design the lay
            out and pick a color scheme. Once the content was created and the
            design finished it was time to start building the site.
          </p>
        </section>

        <section className="update">
          <h2>June 16, 2020</h2>
          <p>
            I created my static website using HTML and CSS. The HTML code is the
            structure of the website. The CSS is the style. I used this project
            to push my understanding of both “languages”. The most challenging
            part of the project was dynamically changing content to fit the
            screen or media type. The hamburger menu when the screen went from
            desktop to tablet or mobile was particularly challenging. It did
            however provide me the opportunity to learn how positioning within a
            web page works.
          </p>
          <div className="update-img">
            <figure>
              <Link to={BlogPostPhoto}>
                <img src={BlogPostPhoto} alt="Example of CSS code" />
              </Link>
            </figure>
          </div>
        </section>

        <section className="update">
          <h2>June 30, 2020</h2>
          <p>
            I decided to use AWS’s cloud resources to host my site. I chose it
            because it is an industry standard. The free tier option is great
            for beginners. Not to mention it is secure and scalable. I set up S3
            buckets and secured my domain name with Route 53 through AWS. S3 is
            an object storage service. It provides scalable access to the stored
            website data. Route 53 is AWS’s Domain Name System (DNS) service.
            Choosing Route 53 was convenient as it connects pretty seemlessly
            with other parts of AWS's infrastructure, such as S3 and API Gateway
            which I plan to use in future projects. Now I have a place to store
            my data and to route users to it, I am now able to expand into other
            services they offer.
          </p>
        </section>
      </section>
    </div>
  )
}

export default ResumeProject
