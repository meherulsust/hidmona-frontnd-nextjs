import Head from 'next/head'
import Header from './header'
import Navbar from './navbar'
import Footer from './footer'

const name = 'Md.Meherul Islam'
export const siteTitle = 'Global Home - Hidmona Money TransferNext.js Sample Website'

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="assets/images/hidmona_logo_mobile.png" />
        <meta
          name="description"
          content={siteTitle}
        />
        <meta
          property="og:image"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <Navbar />

        <main>{children}</main>

      <Footer />
    </>
  )
}