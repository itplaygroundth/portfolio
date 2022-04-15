import { useEffect } from 'react';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import {SessionProvider} from 'next-auth/react'
import { ThemeProvider } from 'next-themes'
import Layout from '../components/layout'
//import { useLiff } from 'use-between';

config.autoAddCss = false;
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