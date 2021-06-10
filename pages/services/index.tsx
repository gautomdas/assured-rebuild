import { GetServerSideProps } from "next";
import { loadStripe } from "@stripe/stripe-js";
import Stripe from "stripe";
import { createCheckoutSession } from "next-stripe/client";
import Head from "next/head";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

interface IPrice extends Stripe.Price {
  product: Stripe.Product;
}

interface IProps {
  prices: IPrice[];
}

export default function Home({ prices }: IProps) {
  const onClick = async (priceId: string) => {
    const session = await createCheckoutSession({
      success_url: window.location.href,
      cancel_url: window.location.href,
      line_items: [{ price: priceId, quantity: 1 }],
      payment_method_types: ["card"],
      mode: "payment",
    });
    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
    if (stripe) {
      stripe.redirectToCheckout({ sessionId: session.id });
    }
  };

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
            Services
          </div>
          
          <div className="flex items-center space-x-12">
            <div className="flex-1 rounded shadow-xl px-10 py-10">
              <div className="flex-grow text-base font-bold lg:text-3xl  ml-3">
                Class of 2022 Promo Package
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
                  Personal Statement Review
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
                  Complete Supplemental Essay Review*
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
                  Mock Interview (1 session)
                </div>
              </div>
              <div className=" text-base lg:text-1xl mt-5 text-gray-600">
                * 1 full round of edits on all supplemental essays/short answers
                for 1 school.
              </div>
              <div className="mt-10 mx-auto text-center text-base font-bold lg:text-4xl  ml-3">
                349.99 USD
              </div>

              <button  onClick={() => onClick("price_1Itcq2J8MpFEqO9MOclh83kh")} className="content-center bg-white hover:bg-gray-100 text-gray-800 font-semibold mt-5 py-2 px-4 border border-gray-400 rounded shadow">
                Purchase
              </button>
            </div>

            <div className="flex-1 bg-pink rounded shadow-xl px-10 py-10">
              <div className="flex-grow text-white text-base font-bold lg:text-3xl  ml-3">
                Premium Promo Package
              </div>
              <div className="flex mt-4">
                <div className="flex-none w-5 h-5 ...">
                  <img
                    className="float-right h-8"
                    src="/check_white.svg"
                    alt="Assured Global Consulting Logo"
                  />
                </div>
                <div className="flex-grow text-white text-base lg:text-2xl  ml-3">
                  Personal Statement Review with{" "}
                  <b className="font-black">2 full rounds</b> of edits.
                </div>
              </div>

              <div className="flex mt-4">
                <div className="flex-none w-5 h-5 ...">
                  <img
                    className="float-right h-8"
                    src="/check_white.svg"
                    alt="Assured Global Consulting Logo"
                  />
                </div>
                <div className="flex-grow text-white text-base lg:text-2xl  ml-3">
                  Complete Supplemental Essay Review
                </div>
              </div>

              <div className="flex mt-4">
                <div className="flex-none w-5 h-5 ...">
                  <img
                    className="float-right h-8"
                    src="/check_white.svg"
                    alt="Assured Global Consulting Logo"
                  />
                </div>
                <div className="flex-grow text-white text-base lg:text-2xl  ml-3">
                  Mock Interview (1 session)
                </div>
              </div>

              <div className="flex mt-4">
                <div className="flex-none w-5 h-5 ...">
                  <img
                    className="float-right h-8"
                    src="/check_white.svg"
                    alt="Assured Global Consulting Logo"
                  />
                </div>
                <div className="flex-grow text-white text-base lg:text-2xl  ml-3">
                  Bonus: A-La-Carte Consulting (1 hour)
                </div>
              </div>

              <div className=" text-base lg:text-1xl mt-5 text-gray-100 ">
                * 1 full round of edits on all supplemental essays/short answers
                for <b className="font-bold">2 schools.</b>
              </div>

              <div className="mt-10 mx-auto text-center text-white text-base font-bold lg:text-4xl  ml-3">
                549.99 USD
              </div>

              <button onClick={() => onClick("price_1ItcqlJ8MpFEqO9MCH4yaabU")}  className="content-center bg-pink hover:bg-pink-100 text-white font-semibold mt-5 py-2 px-4 border border-white rounded shadow">
                Purchase
              </button>
            </div>

            <div className="flex-1 rounded shadow-xl px-10 py-10">
              <div className="flex-grow text-base font-bold lg:text-3xl  ml-3">
                Professional Package +
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
                  Everything included in the previous packages and...
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
                  A ground up college plan.
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
                  Help selecting 12 colleges, including safeties, targets, and
                  reach schools.
                </div>
              </div>

              <div className=" text-base lg:text-1xl mt-5 text-gray-600">
                This package is built from the ground up from a customer first
                perspective. To learn more please contact us.
              </div>

              <div className="mt-5 mx-auto text-center text-base font-bold lg:text-2xl  ml-3">
                Please Contact for Pricing
              </div>
            </div>
          </div>

          

          <div className="flex-grow text-base font-bold lg:text-4xl mt-24 ml-3">
            À la Carte Products
          </div>
          <div className="flex-grow text-base lg:text-2xl mt-10 ml-3">
            
          <div className="grid grid-cols-2 gap-6">
            <div className="flex-1 content-center">
            <div className="rounded shadow-xl px-10 py-10">
              <div className="flex-grow text-base font-bold lg:text-3xl  ml-3">
                 Personal Statement Review
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
                Covers one full round of edits per purchase
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
                    Essay can answer any prompt from the Common, Coalition, or Universal application systems. *Must include prompt within the text of the submitted file.
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
                    1-week turnaround.
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
                    Express (three-day) turnaround available for an extra $20.00 fee.
                </div>
              </div>
              <div className=" text-base lg:text-1xl mt-5 text-gray-600">
                * 1 full round of edits on all supplemental essays/short answers
                for 1 school.
              </div>
              <div className="mt-5 mx-auto text-center text-base font-bold lg:text-3xl  ml-3">
                99.99 USD
              </div>

              <button  onClick={() => onClick("price_1Itzv4J8MpFEqO9MsA2N4GCC")} className="content-center bg-white hover:bg-gray-100 text-gray-800 font-semibold mt-5 py-2 px-4 border border-gray-400 rounded shadow">
                Purchase
              </button>
            </div>
            </div>


            <div className="flex-1 content-center">
            <div className="rounded shadow-xl px-10 py-10">
              <div className="flex-grow text-base font-bold lg:text-3xl  ml-3">
                  Supplemental Essay Review
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
                    See pricing <a className="text-pink" href="#prices">below</a>
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
                    Must include prompt within the text of the submitted file.
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
                    1-week turnaround.
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
                    Express (three-day) turnaround available for an extra $20.00 fee.
                </div>
              </div>
              <div className="mt-5 mx-auto text-center text-base font-bold lg:text-3xl  ml-3">
                Starts at 19.99 USD
              </div>

              <button  onClick={() => onClick("price_1ItcoRJ8MpFEqO9MUh1LiHtE")} className="content-center bg-white hover:bg-gray-100 text-gray-800 font-semibold mt-5 py-2 px-4 border border-gray-400 rounded shadow">
                Purchase
              </button>
            </div>
            </div>



            <div className="flex-1 content-center">
            <div className="rounded shadow-xl px-10 py-10">
              <div className="flex-grow text-base font-bold lg:text-3xl  ml-3">
                  A-La-Carte Consulting
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
                  Students can go over essays, college application strategies, questions, or anything with us
                </div>
              </div>
              
              <div className="mt-5 mx-auto text-center text-base font-bold lg:text-3xl  ml-3">
                  39.99 USD*
              </div>

              <div className=" text-base lg:text-1xl mt-5 text-gray-600">
                * This is priced for every 30 minute interval.
              </div>

              <button  onClick={() => onClick("price_1ItcpPJ8MpFEqO9MLpzRXRjA")} className="content-center bg-white hover:bg-gray-100 text-gray-800 font-semibold mt-5 py-2 px-4 border border-gray-400 rounded shadow">
                Purchase
              </button>
            </div>
            </div>



            <div className="flex-1 content-center">
            <div className="rounded shadow-xl px-10 py-10">
              <div className="flex-grow text-base font-bold lg:text-3xl  ml-3">
                  Mock Interview
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
                    A 45-minute interview simulation with a 15-minute debrief.
                </div>
              </div>
              
              <div className="mt-5 mx-auto text-center text-base font-bold lg:text-3xl  ml-3">
                119.99 USD
              </div>

              <button  onClick={() => onClick("price_1ItcoxJ8MpFEqO9MBZicq4oF")} className="content-center bg-white hover:bg-gray-100 text-gray-800 font-semibold mt-5 py-2 px-4 border border-gray-400 rounded shadow">
                Purchase
              </button>
            </div>
            </div>
          </div>
          </div>

          <div id="prices" className="flex-grow text-base font-bold lg:text-5xl mt-24 ml-3">
            Supplemental Essay Pricing
          </div>
          <div className="flex-grow text-base lg:text-2xl mt-10 ml-3">


          </div>
          <div className="px-32">
          <table className="table-fixed">
            <thead>
              <tr>
                <th className="w-1/2 ...">Word Count</th>
                <th className="w-1/2 ...">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>50 (Short Answers)</td>
                <td className="pl-10">Free, but must be included w/ a larger essay.</td>
              </tr>
              <tr className="bg-pink-light">
                <td>51 – 250</td>
                <td className="pl-10">$19.00 per essay</td>
              </tr>
              <tr>
                <td>251 – 450</td>
                <td className="pl-10">$39.00 per essay</td>
              </tr>
              <tr className="bg-pink-light">
                <td>451 – 650</td>
                <td className="pl-10">$59.00 per essay</td>
              </tr>
              <tr>
                <td>651 – 850</td>
                <td className="pl-10">$79.00 per essay</td>
              </tr>
              <tr className="bg-pink-light">
                <td>851 – 1000</td>
                <td className="pl-10">$99.00 per essay</td>
              </tr>
              <tr>
                <td>1000+</td>
                <td className="pl-10">$119.00 per essay</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2020-08-27",
  });

  const prices = await stripe.prices.list({
    active: true,
    limit: 10,
    expand: ["data.product"],
  });

  return { props: { prices: prices.data } };
};
