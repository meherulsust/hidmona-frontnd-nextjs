import Head from 'next/head'
import Layout from '../components/layout'


export default function Home() {
  return (
    <>
      <Head>
        <title>Global Home</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Global Home" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hidmona.ch/" />
        <meta property="og:site_name" content="Hidmona Money Transfer" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="Hidmona Money Transfer" />
      </Head>
      <Layout>
        <div className="row main-banner-area">
            <div className="col-md-6   text-center">
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">
                    With supporting text below as a natural lead-in to additional
                    content.
                    </p>
                    <p className="card-text">
                    With supporting text below as a natural lead-in to additional
                    content.
                    </p>
                    <p className="card-text">
                    With supporting text below as a natural lead-in to additional
                    content.
                    </p>
                    <p className="card-text">
                    With supporting text below as a natural lead-in to additional
                    content.
                    </p>
                    <a href="#" className="btn btn-primary">
                    Go somewhere
                    </a>
                </div>
                </div>
            </div>
            <div className="col-md-6  text-white text-center">
                <h1>Send &amp; Receive Money</h1>
                <p></p>
                <h3>Quickly, safely and easily with Hidmona.</h3>
                <p />
            </div>
        </div>
        <div className="row">
            <div className="row  mt-5 p-4 text-center">
                <h3>Why should you choose Hidmona Money Transfer?</h3>
            </div>
            <div className="row">
                <div className="col-sm-4 mt-5 p-4">
                <h3>Low Transfer Fee</h3>
                <p>Fair fees on your money transfer services.</p>
                </div>
                <div className="col-sm-4 mt-5 p-4">
                <h3>Full Geographical Coverage</h3>
                <p>We have pay-out locations in all major cities.</p>
                </div>
                <div className="col-sm-4 mt-5 p-4">
                <h3>Fast &amp; Secure</h3>
                <p>Send money to family &amp; friends within minutes.</p>
                </div>
            </div>
        </div>
            <div className="row">
            <div className="clearfix" style={{ background: "#F1F2FA" }}>
                <div className="mt-5 p-4">
                <img
                    src="assets/images/hidmona_services_woman.jpg"
                    className="col-md-6 float-md-end mb-3 ms-md-3 img-fluid"
                    alt="services"
                />
                </div>
                <div className="mt-5 p-4">
                <h2>We provide the following services</h2>
                <ul className="mt-5 p-4" style={{ fontSize: 22 }}>
                    <li>International Money Transfer</li>
                    <li>International Money Transfer</li>
                    <li>International Money Transfer</li>
                </ul>
                </div>
            </div>
        </div>
      </Layout>
       
    </>
  )
}
