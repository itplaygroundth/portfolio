import NextAuth from 'next-auth'
//import AppleProvider from 'next-auth/providers/apple'
//import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
//import EmailProvider from 'next-auth/providers/email'
import LineProvider from 'next-auth/providers/line'

export default NextAuth({
  providers: [
    // OAuth authentication providers...
    // AppleProvider({
    //   clientId: process.env.NEXT_PUBLIC_APPLE_ID,
    //   clientSecret: process.env.NEXT_PUBLIC_APPLE_SECRET
    // }),
    // FacebookProvider({
    //   clientId: process.env.NEXT_PUBLIC_FACEBOOK_ID,
    //   clientSecret: process.env.NEXT_PUBLIC_FACEBOOK_SECRET
    // }),
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET
    }),
    // Passwordless / email sign in
    // EmailProvider({
    //   server: process.env.NEXT_PUBLIC_MAIL_SERVER,
    //   from: 'NextAuth.js <no-reply@example.com>'
    // }),
    LineProvider({
        clientId: process.env.NEXT_PUBLIC_LINE_ID,
        clientSecret: process.env.NEXT_PUBLIC_LINE_SECRET

    })
  ],
  nextauth_url:process.env.NEXTAUTH_URL,
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60 // the session will last 30 days
  }
})