
import Footer from "./footer"
export default function Layout({children}) {
    return (
    <>
    <main><div className=" overscroll-contain">{children}</div></main>
    <Footer  />
    </>    
    )
}