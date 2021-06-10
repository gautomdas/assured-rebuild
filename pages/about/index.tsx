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
          <div className="mt-10 my-10 text-4xl lg:text-6xl font-black">
            About
          </div>

          <div className="flex-grow text-base lg:text-2xl mt-10">
            The Assured Global Consulting’s Team represents a cross section of
            American higher education, attending both elite public and private
            institutions.
          </div>

          <div className="flex-grow text-base lg:text-2xl mt-4">
            Together, we earned acceptances to universities including:
          </div>

          <div className="flex space-x-3">
            <div className="flex-1 px-3 py-10">
              <div className="flex mt-2">
                <div className="flex-none w-5 h-5 ...">
                  <img
                    className="float-right h-8"
                    src="/check.svg"
                    alt="Assured Global Consulting Logo"
                  />
                </div>
                <div className="flex-grow text-base lg:text-2xl  ml-3">
                  Dartmouth College
                </div>
              </div>
              <div className="flex mt-2">
                <div className="flex-none w-5 h-5 ...">
                  <img
                    className="float-right h-8"
                    src="/check.svg"
                    alt="Assured Global Consulting Logo"
                  />
                </div>
                <div className="flex-grow text-base lg:text-2xl  ml-3">
                  Duke University
                </div>
              </div>
              <div className="flex mt-2">
                <div className="flex-none w-5 h-5 ...">
                  <img
                    className="float-right h-8"
                    src="/check.svg"
                    alt="Assured Global Consulting Logo"
                  />
                </div>
                <div className="flex-grow text-base lg:text-2xl  ml-3">
                  Georgetown University
                </div>
              </div>
              <div className="flex mt-2">
                <div className="flex-none w-5 h-5 ...">
                  <img
                    className="float-right h-8"
                    src="/check.svg"
                    alt="Assured Global Consulting Logo"
                  />
                </div>
                <div className="flex-grow text-base lg:text-2xl  ml-3">
                  Vanderbilt University
                </div>
              </div>
              <div className="flex mt-2">
                <div className="flex-none w-5 h-5 ...">
                  <img
                    className="float-right h-8"
                    src="/check.svg"
                    alt="Assured Global Consulting Logo"
                  />
                </div>
                <div className="flex-grow text-base lg:text-2xl  ml-3">
                  NYU (Stern)
                </div>
              </div>
            </div>

            <div className="flex-1 px-3 py-10">
              <div className="flex mt-2">
                <div className="flex-none w-5 h-5 ...">
                  <img
                    className="float-right h-8"
                    src="/check.svg"
                    alt="Assured Global Consulting Logo"
                  />
                </div>
                <div className="flex-grow text-base lg:text-2xl  ml-3">
                  Northwestern University
                </div>
              </div>
              <div className="flex mt-2">
                <div className="flex-none w-5 h-5 ...">
                  <img
                    className="float-right h-8"
                    src="/check.svg"
                    alt="Assured Global Consulting Logo"
                  />
                </div>
                <div className="flex-grow text-base lg:text-2xl  ml-3">
                  UC Berkeley
                </div>
              </div>
              <div className="flex mt-2">
                <div className="flex-none w-5 h-5 ...">
                  <img
                    className="float-right h-8"
                    src="/check.svg"
                    alt="Assured Global Consulting Logo"
                  />
                </div>
                <div className="flex-grow text-base lg:text-2xl  ml-3">
                  UCLA
                </div>
              </div>
              <div className="flex mt-2">
                <div className="flex-none w-5 h-5 ...">
                  <img
                    className="float-right h-8"
                    src="/check.svg"
                    alt="Assured Global Consulting Logo"
                  />
                </div>
                <div className="flex-grow text-base lg:text-2xl  ml-3">
                  UCSD
                </div>
              </div>
              <div className="flex mt-2">
                <div className="flex-none w-5 h-5 ...">
                  <img
                    className="float-right h-8"
                    src="/check.svg"
                    alt="Assured Global Consulting Logo"
                  />
                </div>
                <div className="flex-grow text-base lg:text-2xl  ml-3">
                  Georgia Institute of Technology
                </div>
              </div>
            </div>

            <div className="flex-1 px-3 py-10">
              <div className="flex mt-2">
                <div className="flex-none w-5 h-5 ...">
                  <img
                    className="float-right h-8"
                    src="/check.svg"
                    alt="Assured Global Consulting Logo"
                  />
                </div>
                <div className="flex-grow text-base lg:text-2xl  ml-3">
                  Carnegie Mellon University
                </div>
              </div>
              <div className="flex mt-2">
                <div className="flex-none w-5 h-5 ...">
                  <img
                    className="float-right h-8"
                    src="/check.svg"
                    alt="Assured Global Consulting Logo"
                  />
                </div>
                <div className="flex-grow text-base lg:text-2xl  ml-3">
                  Amherst College
                </div>
              </div>
              <div className="flex mt-2">
                <div className="flex-none w-5 h-5 ...">
                  <img
                    className="float-right h-8"
                    src="/check.svg"
                    alt="Assured Global Consulting Logo"
                  />
                </div>
                <div className="flex-grow text-base lg:text-2xl  ml-3">
                  Washington & Lee University
                </div>
              </div>
              <div className="flex mt-2">
                <div className="flex-none w-5 h-5 ...">
                  <img
                    className="float-right h-8"
                    src="/check.svg"
                    alt="Assured Global Consulting Logo"
                  />
                </div>
                <div className="flex-grow text-base lg:text-2xl  ml-3">
                  University of Maryland
                </div>
              </div>
              <div className="flex mt-2">
                <div className="flex-none w-5 h-5 ...">
                  <img
                    className="float-right h-8"
                    src="/check.svg"
                    alt="Assured Global Consulting Logo"
                  />
                </div>
                <div className="flex-grow text-base lg:text-2xl  ml-3">
                  UT Austin
                </div>
              </div>
            </div>

            <div className="flex-1 px-3 py-10">
              <div className="flex mt-2">
                <div className="flex-none w-5 h-5 ...">
                  <img
                    className="float-right h-8"
                    src="/check.svg"
                    alt="Assured Global Consulting Logo"
                  />
                </div>
                <div className="flex-grow text-base lg:text-2xl  ml-3">
                  Yale-NUS
                </div>
              </div>
              <div className="flex mt-2">
                <div className="flex-none w-5 h-5 ...">
                  <img
                    className="float-right h-8"
                    src="/check.svg"
                    alt="Assured Global Consulting Logo"
                  />
                </div>
                <div className="flex-grow text-base lg:text-2xl  ml-3">
                  UNC Chapel Hill
                </div>
              </div>
              <div className="flex mt-2">
                <div className="flex-none w-5 h-5 ...">
                  <img
                    className="float-right h-8"
                    src="/check.svg"
                    alt="Assured Global Consulting Logo"
                  />
                </div>
                <div className="flex-grow text-base lg:text-2xl  ml-3">
                  Rice University
                </div>
              </div>
            </div>
          </div>
          <div className="flex-grow text-base lg:text-2xl mt-10">
            Our staff looks forward to working with you:
          </div>
          <div className="flex mt-10 hover:shadow-lg rounded p-10">
          <div className="flex flex-wrap content-center justify-center">
            <div className="">
              <img src="/lintaro.png" alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
            </div>
          </div>
            <div className="flex-auto px-10">
              <div className="text-4xl lg:text-3xl font-black">Managing Director, Lintaro Donovan</div>
              <div className="flex-grow text-base lg:text-2xl mt-2">
                With educational experience stretching across cultural paradigms,
                Lintaro spent his youth studying everywhere from a rural Japanese
                farming town to an American magnet high school and at Dartmouth
                College. He considers himself a dynamic communicator, able to
                translate insights and information from one format to another with
                ease. Throughout his career, he has had the opportunity to engage
                with people at all stages of life, and he is just as comfortable
                speaking to a billionaire or a former Secretary of Defense as he
                is inspiring an applicant to some of America’s most prestigious
                colleges. At Dartmouth, he pursues a double major in Russian and
                Classics With Government, writes for The Dartmouth Review, and
                trains for military service in the Army Reserve Officers’ Training
                Corps (ROTC). He is a recipient of the Dartmouth Club of
                Washington’s endowed scholarship and will serve his country after
                graduation.
              </div>
            </div>
          </div>

          <div className="flex mt-10 hover:shadow-lg rounded p-10">
            <div className="flex-auto px-10">
            <div className="text-4xl lg:text-3xl font-black">Director of Marketing, Gautom Das</div>

            <div className="flex-grow text-base lg:text-2xl mt-2">
              Gautom is Assured’s expert on all things STEM (science,
              technology, engineering, and mathematics). Navigating the intense
              world of American magnet education for most of his childhood, he
              has a personal understanding of academic competition and how to
              thrive on it. As an Indian-American, he has also developed a
              firsthand knowledge of the pressures that universities place on
              South Asian or South Asian-American applicants. Gautom considers
              his analytical mind and personal experience his chief assets as a
              consultant. He is willing and ready to help anyone who needs a
              unique blend of critique, advice, and inspiration to bring college
              applications to the next level. At the University of Maryland
              College Park, he studies for a double major in Mathematics and
              Computer Science, receiving the full-ride, four-year Banneker-Key
              Scholarship. In 2020, only 150 out of 32,200 applicants received
              the award. Gautom hopes to work as a software engineer at a
              proprietary trading firm after graduating.
            </div>
            </div>
            <div className="flex flex-wrap content-center justify-center">
              <div className=" ">
                <img src="/gautom.png" alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
              </div>
            </div>
          </div>

          <div className="flex mt-10 hover:shadow-lg rounded p-10">
            <div className="flex flex-wrap content-center justify-center">
              <div className=" ">
                <img src="/shariar.png" alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
              </div>
            </div>
            <div className="flex-auto px-10">
              <div className="text-4xl lg:text-3xl font-black">Director of Products and Experience, Shariar Vaez-Ghaemi</div>

              <div className="flex-grow text-base lg:text-2xl mt-2">
                An expert on politics, sports, and everything in between, Shariar
                is a Iranian-American and fields an expert knowledge of the
                American education system, achieving success in his highly ranked
                high school. He is also a competitive public speaker who can build
                anyone’s confidence, from those who have never spoken publicly
                before to those who give speeches as a lifestyle. Shariar has won
                national recognition for his work in communication. His
                accomplishments include reaching National Octofinals in
                Extemporaneous Commentary, Mid-Atlantic Quarterfinals in
                Presidential Debate, and the International Tournament for DECA
                written events (twice). He is a National Merit Scholarship
                Finalist, National AP Scholar, and Candidate for the US
                Presidential Scholars Program. After graduating college, Shariar
                wants to transform the world of healthcare technology.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
