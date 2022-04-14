
import Navabr from "./navbar"
import Footer from "./footer"
export default function Layout({children}) {
    return (
    <>
    <Navabr />
    <main><div className=" overscroll-contain">{children}</div></main>
    <Footer  />
    </>    
    )
}