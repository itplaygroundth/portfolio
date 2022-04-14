/**
 * @type {import('next').NextConfig}
 */
 require("dotenv").config();
 const nextConfig = {
    /* config options here */
    //env:{
    //    liffid:process.env.NEXT_PUBLIC_LIFF_ID,
    //     line_channel_id:process.env.LINE_LOGIN_CHANNEL_ID,
    //     line_channel_secret:process.env.LINE_LOGIN_CHANNEL_SECRET,
    //     line_callback:process.env.LINE_LOGIN_CALLBACK_URL

    //},
    reactStrictMode: true,
    images: {
        domains: ['profile.line-scdn.net'],
      },
      serverRuntimeConfig: {
        // Will only be available on the server side
        secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET, // Pass through env variables
      },
  }
  
  module.exports = nextConfig