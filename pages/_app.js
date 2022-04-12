import { ThemeProvider } from 'next-themes'
import Layout from '../components/layout'

import Navabr from '../components/navbar'
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="system">
    <Navabr />
    <Layout>
      <Component {...pageProps} />
    </Layout>
    
    </ThemeProvider>
  )
}

export default MyApp