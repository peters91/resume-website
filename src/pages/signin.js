import React from "react"
import Amplify from "aws-amplify"
import { AmplifyAuthenticator, AmplifySignIn } from "@aws-amplify/ui-react"
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components"
import awsconfig from "../aws-exports"
import NavBar from "../components/navbar"
import Header from "../components/header"
import Head from "../components/head"
import LandingPage from "./landingpage"

Amplify.configure(awsconfig)

export default function SignIn() {
  const [authState, setAuthState] = React.useState()
  const [user, setUser] = React.useState()

  React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState)
      setUser(authData)
    })
  }, [])

  return authState === AuthState.SignedIn && user ? (
    <LandingPage state={{ username: user.username }} />
  ) : (
    <div>
      <Head />
      <Header name="Sign-In" />
      <NavBar />
      <section>
        <AmplifyAuthenticator>
          <AmplifySignIn slot="sign-in">
            <div slot="federated-buttons"></div>
          </AmplifySignIn>
        </AmplifyAuthenticator>
      </section>
    </div>
  )
}
