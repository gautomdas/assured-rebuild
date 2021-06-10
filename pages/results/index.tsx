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
            Results
          </div>

          <div className="flex-grow text-base lg:text-2xl mt-10">
          In the 2020-2021 admissions cycle, we edited essays for just SIX students. Together, they were accepted to:
          </div>
              <div className="px-10">
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


<div className="mt-10 my-10 text-4xl lg:text-6xl font-black">
            Testimonials
          </div>


        </div>
      </div>
      <Footer />
    </div>
  );
}
