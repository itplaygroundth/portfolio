import { useSession,signOut } from "next-auth/react"

const dashboard = ()=>{
    const { data: session, status } = useSession()

    return (
        <>
        <p>Signed in as {session.user.name}</p>
        <button onClick={signOut}>Sign out</button>
        </>
        
    )
}

export default dashboard