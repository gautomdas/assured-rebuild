/* ./pages/index.js               */
import Head from "next/head";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

export default function Home() {
  return (
    <div>
      <div className="px-8 lg:px-32 ">
        <Head>
          <title>Assured Global Consulting</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://use.typekit.net/qfb2ekl.css" />
        </Head>
        <Navbar />

        <div className="px-8 lg:px-48 ">
          <div className="mt-10 my-10 text-4xl lg:text-6xl">
            <div className="font-black">
              Contact
            </div>

            <div className="flex-grow text-base lg:text-2xl mt-10">
              For GDPR compliance, please contact us using the link below for the time being:
            </div>

            <div id="mc_embed_signup">
            <form action="https://assuredglobalconsulting.us6.list-manage.com/subscribe/post?u=c89dbe17f7eef9d7f11747402&amp;id=97459b582a" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
                <div id="mc_embed_signup_scroll">
                  <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="content-center bg-white hover:bg-gray-100 text-gray-800 font-semibold mt-5 py-2 px-4 border border-gray-400 rounded shadow text-base lg:text-2xl button" /></div>
                </div>
            </form>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />


          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
