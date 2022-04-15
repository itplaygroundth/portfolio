import { signIn } from "next-auth/react";
import AccessDenied from "../components/accessDenied";
import Layout from "../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLine,faFacebookSquare,faGoogle} from "@fortawesome/free-brands-svg-icons"
import Image from "next/image"

const social = ()=> {

return (
    <><div class="min-h-screen flex justify-center items-center">
    <div class="card card-compact w-96 bg-base-100 shadow-xl">
    <figure class="px-5 pt-5"><Image src="/images/w2.jpg" width="400" height="225" alt="Game" class="rounded-xl"/></figure>
    <div class="card-body items-center text-center">
        
        <div class="card-actions justify-end">
        <button onClick={()=>signIn('line')} class="btn btn-block gap-2  text-white bg-[#06C755] hover:bg-[#06C755]/90 focus:ring-4 focus:outline-none focus:ring-[#06C755]/70 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#06C755]/55 mb-2">
            <FontAwesomeIcon   style={{ fontSize: 24}} icon={faLine}/>
            Sign In With Line
            </button>
            
            <button onClick={()=>signIn('facebook')} class="btn btn-block gap-2  text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mb-2">
            <FontAwesomeIcon   style={{ fontSize: 24}} icon={faFacebookSquare}/>
            Sign In With Facebook
            </button>
            {/* <button onClick={()=>signIn('google')} class="btn gap-2 w-full bg-red-700 hover:bg-red-800/90 text-white  focus:ring-4 focus:outline-none focus:ring-red-700/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-red-700/55 mb-2">
            <FontAwesomeIcon   style={{ fontSize: 24}} icon={faGoogle}/>
            Sign In With Google
            </button> */}
        </div>
    </div>
    </div>
    </div>
  
    </>
)
}

export default social
  