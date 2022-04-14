import { useSession,signIn,signOut } from "next-auth/react";
import AccessDenied from "../components/accessDenied";
import Layout from "../components/layout";

const IndexPage = ()=> {
  const { data: session, status } = useSession()
  if (status === "authenticated") {
    return <>
    <p>Signed in as {session.user.name}</p>
    <button onClick={signOut}>Sign out</button>
    </>
  }

  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}

 

export default IndexPage