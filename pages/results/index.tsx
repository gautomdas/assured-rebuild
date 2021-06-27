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
        <div className="px-8 lg:px-48 ">
          <div className="mt-5 lg:mt-10 lg:my-10 text-4xl lg:text-6xl font-black">
            Results
          </div>

          <div className="flex flex-col-reverse justify-evenly items-center md:flex-row ...">
          <div className="flex-1 justify-center ">
            <div className="flex-grow text-2xl lg:text-2xl mb-5">
            In the 2020-2021 admissions cycle, we edited essays for just SIX students. Together, they were accepted to:
            </div>
            <div className="px-4 lg:px-10">
                  <table className="table table-bordered table-hover table-condensed">
                  <thead><tr>
                  </tr></thead>
                  <tbody>
                  <tr>
                  <td>Harvard</td>
                  </tr>
                  <tr>
                  <td>Yale</td>
                  </tr>
                  <tr>
                  <td>MIT</td>
                  </tr>
                  <tr>
                  <td>Duke</td>
                  </tr>
                  <tr>
                  <td>Cornell</td>
                  </tr>
                  <tr>
                  <td>Vanderbilt (w/ full scholarship)</td>
                  </tr>
                  <tr>
                  <td>Caltech</td>
                  </tr>
                  <tr>
                  <td>Northwestern</td>
                  </tr>
                  <tr>
                  <td>UCLA</td>
                  </tr>
                  <tr>
                  <td>UC Berkeley MET Program (2% acceptance rate)</td>
                  </tr>
                  <tr>
                  <td>American University</td>
                  </tr>
                  <tr>
                  <td>Georgetown</td>
                  </tr>
                  <tr>
                  <td>Barnard College at Columbia</td>
                  </tr>
                  <tr>
                  <td>Johns Hopkins (w/ half scholarship)</td>
                  </tr>
                  <tr>
                  <td>Rice University (w/ half scholarship)</td>
                  </tr>
                  <tr>
                  <td>University of Southern California</td>
                  </tr>
                  <tr>
                  <td>University of Toronto</td>
                  </tr>
                  <tr>
                  <td>Georgia Tech</td>
                  </tr>
                  </tbody></table>
              </div>
              </div>
            <div className="flex-1">
              <img
                className=""
                src="/school.png"
                alt="Assured Global Consulting Logo"
              />
            </div>
          </div>


          <div className="mt-16 my-4 text-4xl lg:text-6xl font-black">
            Testimonials
          </div>


          <div className="hover:shadow-lg rounded lg:px-10 py-5">
            <div className="flex-grow text-base lg:text-2xl mt-2">
              "My Common Application essay became a menagerie of emotion and depth after my time with Assured Global Consulting. My writing became full of colour. Without them, I would not have achieved the success I have in the college admissions process."
            </div>
            <div className="flex-grow text-base lg:text-2xl mt-2 text-right">
            A.K. from Hyderabad (12th)
            </div>
          </div>

          <div className="hover:shadow-lg rounded lg:px-10 py-5">
            <div className="flex-grow text-base lg:text-2xl mt-2">
              "They are AMAZING! They are EXPERTS in essay writing and consultation. Through the help of Assured Global Consulting, my son got into his dream school. I cannot thank Assured Global Consulting enough."
            </div>
            <div className="flex-grow text-base lg:text-2xl mt-2 text-right">
            Mother of Anonymous International Student from North Carolina (12th)
            </div>
          </div>


          <div className="hover:shadow-lg rounded lg:px-10 py-5">
            <div className="flex-grow text-base lg:text-2xl mt-2">
              "Without Assured, I saw the fruits of my labours when I received acceptance into six American schools. I am excited to study in the United States of America thanks to them."
            </div>
            <div className="flex-grow text-base lg:text-2xl mt-2 text-right">
            M.W. from Hangzhou (12th)
            </div>
          </div>



          <div className="hover:shadow-lg rounded lg:px-10 py-5">
            <div className="flex-grow text-base lg:text-2xl mt-2">
              "I sent my essay in and got back comments that were incredibly helpful! The Assured Team was affordable, timely, and—most of all—effective."
            </div>
            <div className="flex-grow text-base lg:text-2xl mt-2 text-right">
            Matthew S. from Maryland (12th)
            </div>
          </div>

          <div className="hover:shadow-lg rounded lg:px-10 py-5">
            <div className="flex-grow text-base lg:text-2xl mt-2">
              "I did not originally believe that our family could afford “real” college admissions consulting for our daughter, but Assured provided all that and more. Check them out!"
            </div>
            <div className="flex-grow text-base lg:text-2xl mt-2 text-right">
            Father of R.F. from New York (12th)
            </div>
          </div>

          <div className="hover:shadow-lg rounded lg:px-10 py-5">
            <div className="flex-grow text-base lg:text-2xl mt-2">
              "Assured received my essay, provided both specific corrections and general thematic comments, and truly took the time to give me personalized guidance about how to make it spectacular. They’re the real deal."
            </div>
            <div className="flex-grow text-base lg:text-2xl mt-2 text-right">
            Anonymous Student from Delaware (11th)
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}
