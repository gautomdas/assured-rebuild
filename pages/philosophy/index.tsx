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
          <div className="mt-10 my-10 text-4xl lg:text-7xl font-black text-center">
            Our Philosophy
          </div>

          <img
            className="float-right h-96 lg:h-96"
            src="/philosophy.svg"
            alt="Assured Global Consulting Logo"
          />
          <p className="font-light  mt-3 text-base lg:text-2xl lg:leading-10 lg:mt-5">
            Getting admitted to the top American public and private universities
            is like a duel in the the Colosseum. You might subdue your opponents
            (also known as procrastination, the Common App portal, and
            terrifying average test scores) and find the nerves to finish an
            application. But it is unlikely you will hit the “Submit” button
            unscathed. It is even unlikelier that you will make it out of the
            Colosseum with your health and sanity intact, ready to succeed at
            your dream college. Let’s face it: College Admissions is a bloody
            and ruthless game. At Assured Global Consulting, we give you the
            weapons—college essay edits, interview practice, and application
            guidance—to win.
          </p>
          <p className="mt-3 text-base font-bold lg:text-2xl lg:leading-10 lg:mt-10">
            At Assured Global Consulting, we:
          </p>

          <div className="flex mt-4">
            <div className="flex-none w-5 h-5 ...">
              <img
                className="float-right h-8"
                src="/check.svg"
                alt="Assured Global Consulting Logo"
              />
            </div>
            <div className="flex-grow text-base lg:text-2xl  ml-3">
              Dedicate ourselves to teaching our students how to succeed, but
              our students must want to succeed first.
            </div>
          </div>

          <div className="flex mt-4">
            <div className="flex-none w-5 h-5 ...">
              <img
                className="float-right h-8"
                src="/check.svg"
                alt="Assured Global Consulting Logo"
              />
            </div>
            <div className="flex-grow text-base lg:text-2xl  ml-3">
              Deploy our first-hand knowledge of and unique insight into the
              application process to give your child the best chance of
              admissions success.
            </div>
          </div>

          <div className="flex mt-4">
            <div className="flex-none w-5 h-5 ...">
              <img
                className="float-right h-8"
                src="/check.svg"
                alt="Assured Global Consulting Logo"
              />
            </div>
            <div className="flex-grow text-base lg:text-2xl  ml-3">
              Believe in our products and value them accordingly.
            </div>
          </div>

          <div className="flex justify-center">
            <Link href="/services">
              <a className="shadow-lg px-5 py-2 mt-10 lg:inline-flex font-bold text-1xl rounded text-white bg-pink hover:text-white">
                Check Out Our Services
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
