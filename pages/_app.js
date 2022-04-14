import { useEffect } from 'react';
import {SessionProvider} from 'next-auth/react'
import { ThemeProvider } from 'next-themes'
import Layout from '../components/layout'
//import { useLiff } from 'use-between';


const liffid = process.env.NEXT_PUBLIC_LIFF_ID



function MyApp({Component,pageProps: { session, ...pageProps },
}) {
  // useEffect(async()=>{
  //   const liff = (await import('@line/liff')).default
  //   await liff.init({liffId:liffid}).then(()=>{
  //    if(!liff.isLoggedIn()){
  //      liff.login()
  //    }
  //   }).catch((err)=>{
  //     console.error('liff init error'+err.message)
  //   })
  // })
  return (
    <SessionProvider session={session}>
    <ThemeProvider defaultTheme="system">
      <Component {...pageProps} />
    </ThemeProvider>
    </SessionProvider>
    )
}

export default MyApp