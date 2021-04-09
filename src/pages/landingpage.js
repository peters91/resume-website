import { AmplifyGreetings } from "@aws-amplify/ui-react"
import React from "react"
import Head from "../components/head"
import Header from "../components/header"
import NavBar from "../components/navbar"

export default function LandingPage(props) {
  console.log(props.state.username)
  return (
    <div className="landing-page">
      <Head />
      <Header name="Landing Page" />
      <NavBar />
      <AmplifyGreetings username={props.state.username} />
    </div>
  )
}
