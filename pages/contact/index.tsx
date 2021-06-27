/* ./pages/index.js               */
import Head from "next/head";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

export default function Home() {
  return (
    <div>
      <div className="px-4 lg:px-32 ">
        <Head>
          <title>Assured Global Consulting</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://use.typekit.net/qfb2ekl.css" />
        </Head>
        <Navbar />

        <div className="px-4 lg:px-48 ">
          <div className="mt-5 lg:mt-10 lg:my-10 text-4xl lg:text-6xl">
            <div className="px-4  font-black">Contact</div>
            <iframe
              className="mt-10 "
              src="https://docs.google.com/forms/d/e/1FAIpQLSfobN2JagtXyEyUNfgQvSiIMO_8jCpvz8E682JeeOY1NESEFQ/viewform?embedded=true"
              style={{ width: "100%", height: 800 }}
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
