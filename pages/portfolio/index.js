import Head from 'next/head'
import Link from 'next/link'
import Layout  from '../../components/layout'
import { useSession,getSession } from 'next-auth/react'
import AccessDenied from '../../components/accessDenied'

function Index() {
  
  const {data:session} = useSession()

  const styling = {
    backgroundImage: "url('https://api.lorem.space/image/fashion?w=1000&h=800')",
    width:"100%",
    height:"100%"
  }

  if (typeof window === "undefined") return null

  if (session) {

  return (
    <>
    <Layout>
      <div className="hero min-h-screen" style={styling}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      </Layout>
    </>
  )
  }
  return <><AccessDenied /></>
}


export default Index
