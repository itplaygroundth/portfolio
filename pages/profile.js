import { useEffect,useState } from "react"
import { useSession } from "next-auth/react"
import Head from "next/head"
import Image from "next/image"
import { getServerSideProps } from "./portfolio"
import AccessDenied from "../components/accessDenied"
import Layout from "../components/layout"

const Profile = () => {
const [profile,setProfile] = useState({})
const {data:session} = useSession()

if (typeof window === "undefined") return null

if (session) {
return (
    <Layout>
        <div class="min-h-screen flex justify-center items-center">
            {session.user.image && <Image
            src={session.user.image}
            alt={session.user.name}
            width={500}
            height={500}
            />
        }
        <div>Name: {session.user.name}</div>
        </div>
    </Layout>
)
}
return <><AccessDenied /></>
}
export default  Profile
