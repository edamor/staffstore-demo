import App from "next/app"
import Head from "next/head"
import Layout from "@/components/Layout"
import "styles/index.css"
import { AnimatePresence } from "framer-motion"
import { Motion } from "@/components/Motion"

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon-32.png" />
        <meta 
          name="description" 
          content="We are an authorized distributor of Cofta Original Monobloc Products like Various Cofta chairs, Cofta Tables, Cofta Plastic Pallets, Versaboards and more. Cofta is the leading plastic furniture brand all over the Philippines. Inquire now to get the best prices for our wide array of Cofta Original Monobloc products."
        />
      </Head>
      <Layout>
        <AnimatePresence exitBeforeEnter initial={false} onExitComplete={() => window.scrollTo(0, 0)} >
          <Motion key={router.route}>
            <Component {...pageProps} key={router.route} />
          </Motion>
        </AnimatePresence>
      </Layout>
    </>
  )
}

MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx)
  
  return { ...appProps, pageProps: { path: ctx.pathname } }
}

export default MyApp
