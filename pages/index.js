import { useSession,signIn,signOut } from "next-auth/react";
import AccessDenied from "../components/accessDenied";
import Layout from "../components/layout";
import Social from "../components/social";
import Dashboard from "../components/dashboard";


const IndexPage = ()=> {
  const { data: session, status } = useSession()

  if (status === "authenticated") {
    return <>
    <Layout>
    <Dashboard />
    </Layout>
    </>
  }
  if (status === "loading") {
    return <p>Loading...</p>
  }

  if (status === "unauthenticated") {
  return (
    <>
    <Social/>
    </>
  )
  }
}

 

export default IndexPage