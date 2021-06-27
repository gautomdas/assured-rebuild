/* ./pages/index.js               */
import Head from "next/head";
import Link from "next/link";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

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

        <div className="px-4 flex flex-col lg:mt-16 lg:mx-56">
          <div className="flex flex-col-reverse justify-evenly items-center md:flex-row ...">
            <div className="px-8 flex-1 lg:mt-10 lg:pl-16 justify-center lg:mr-24">
              <div className="font-black text-3xl lg:text-4xl ">
                The college process is difficult.
              </div>
              <div className="font-black text-2xl lg:text-5xl lg:mt-5 text-pink">
                We're here to help.
              </div>
            </div>
            <div className="flex-1 justify-center">
              <img
                className="h-96 lg:h-144"
                src="/main.svg"
                alt="Assured Global Consulting Logo"
              />
            </div>
          </div>

          <div className="flex flex-col justify-evenly items-center md:flex-row ...">
            <div className="flex-1 justify-center">
              <img
                className="h-96 lg:h-144"
                src="/collab.svg"
                alt="Assured Global Consulting Logo"
              />
            </div>
            <div className="flex-1 lg:mt-10 lg:pl-16 justify-center ">
              <div className="font-black text-2xl lg:text-xl">
                Unlike other services, we will be with you on every step of the
                process.
              </div>
              <div className="font-light mt-3 text-base lg:text-2xl lg:mt-5">
                From the start of junior year to the first two years of college,
                Assured Global Consulting has the tools needed to get you where
                you want to go.
              </div>
            </div>
          </div>

          <div className="flex flex-col-reverse justify-evenly items-center md:flex-row ...">
            <div className="flex-1 lg:mt-10 lg:pl-8 justify-center lg:mr-24">
              <div className="font-black text-2xl lg:text-xl">
                We find what makes you special and let it shine on your resume.
              </div>
              <div className="font-light mt-3 text-base lg:text-2xl lg:mt-5">
                Every student is unique, but at Assured we can help you display
                your unique attributes to the world.
              </div>
            </div>
            <div className="flex-1 justify-center">
              <img
                className="h-96 lg:h-144"
                src="/unique.svg"
                alt="Assured Global Consulting Logo"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 flex text-4xl lg:text-7xl font-black justify-center items-center">
          Our Philosophy
        </div>

        <div className="flex lg:mx-32 flex-col items-center md:flex-row ...">
          <div className="flex-none">
            <img
              className="h-96 lg:h-144"
              src="/philosophy.svg"
              alt="Assured Global Consulting Logo"
            />
          </div>
          <div className="flex-auto lg:ml-16 lg:mt-10 lg:mr-24">
            <div className="font-light italic mt-3 text-base lg:text-2xl lg:leading-10 lg:mt-5">
              Getting admitted to the top American public and private
              universities is like a duel in the the Colosseum. You might subdue
              your opponents (also known as procrastination, the Common App
              portal, and terrifying average test scores) and find the nerves to
              finish an application. But it is unlikely you will hit the
              “Submit” button unscathed. It is even unlikelier...
            </div>
            <div className="flex justify-center">
              <Link href="/philosophy">
                <a className="shadow-lg lg:inline-flex lg:w-auto px-5 py-2 mt-10 text-1xl font-black rounded text-white bg-pink hover:text-white">
                  Continue Reading
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
