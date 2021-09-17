import App from "next/app"
import Head from "next/head"
import Layout from "@/components/Layout"
import { fetchAPI, getNavItems } from "@/utils/api"
import "styles/index.css"

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout navItems={pageProps.navItems}>
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
  // Fetch global site settings from Strapi
  // const navItems = await getNavItems()
  const navItems = await fetchAPI(`/nav-items`)
  // Pass the data to our page via props
  return { ...appProps, pageProps: { navItems, path: ctx.pathname } }
}

export default MyApp
