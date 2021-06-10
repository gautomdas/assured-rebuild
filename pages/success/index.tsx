/* ./pages/index.js               */
import Head from "next/head";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

export default function Home() {
  return (
    <div>
      <div className="mb-auto px-8 lg:px-32 ">
        <Head>
          <title>Assured Global Consulting</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://use.typekit.net/qfb2ekl.css" />
        </Head>
        <Navbar />

        <div className="px-8 lg:px-48 mt-48 text-center justify-center">
          <div className="mt-10 my-10 text-4xl lg:text-6xl font-black">
            Form Submitted Succesfully
          </div>
          <div className="mt-10 my-10 ">
            Thanks! We got your information and will get back to you in 3-5
            business days.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
