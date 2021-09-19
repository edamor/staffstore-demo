import App from "next/app"
import Head from "next/head"
import Layout from "@/components/Layout"
import "styles/index.css"
import { getNavItems } from "staticData/data"
import { getContactDetails } from "@/utils/api"

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon-32.png" />
        <meta 
          name="description" 
          content="We are an authorized distributor of Cofta Original Monobloc Products like Various Cofta chairs, Cofta Tables, Cofta Plastic Pallets, Versaboards and more. Cofta is the leading plastic furniture brand all over the Philippines. Inquire now to get the best prices for our wide array of Cofta Original Monobloc products."
        />
      </Head>
      <Layout navItems={pageProps.navItems} contactDetails={pageProps.contactDetails}>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So [[...slug]] pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx)
  
  const navItems = getNavItems();
  const contactDetails = await getContactDetails();
  // Pass the data to our page via props
  return { ...appProps, pageProps: { navItems, contactDetails, path: ctx.pathname } }
}

export default MyApp
