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
      line_items: [
        {
          price: priceId,
          adjustable_quantity: {
            enabled: true,
            minimum: 1,
            maximum: 10,
          },
          quantity: 1,
        },
      ],
      payment_method_types: ["card"],
      allow_promotion_codes: true,
      mode: "payment",
    });
    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
    if (stripe) {
      stripe.redirectToCheckout({ sessionId: session.id });
    }
  };

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
          <div className="px-4 mt-5 lg:mt-10 lg:my-10  text-4xl lg:text-6xl font-black">
            Services
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
            <div className="flex-1 bg-pink rounded shadow-xl px-6 py-8 lg:px-10 lg:py-10 mt-10">
              <div className="flex-grow text-white text-2xl font-bold lg:text-3xl  ml-3">
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
                  <b className="font-black">1 full rounds</b> of edits.
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
                  Complete Supplemental Essay Review*
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

              <div className=" text-base lg:text-1xl mt-5 text-gray-100 ">
                * 1 full round of edits on all supplemental essays/short answers
                for <b className="font-bold">3 schools.</b>
              </div>

              <div className="mt-5 lg:mt-10 mx-auto lg:text-center text-white text-base font-bold lg:text-4xl  ml-3">
                429.99 USD
              </div>

              <button
                onClick={() => onClick("price_1J6pUoJ8MpFEqO9Mu469P53u")}
                className="content-center bg-pink hover:bg-pink-100 text-white font-semibold mt-5 py-2 px-4 border border-white rounded shadow"
              >
                Purchase
              </button>
            </div>

            <div className="flex-1 rounded shadow-xl px-6 py-8 lg:px-10 lg:py-10">
              <div className="flex-grow text-2xl text-gray-400 font-bold lg:text-3xl  ml-3">
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
                <div className="text-gray-400 flex-grow text-base lg:text-2xl  ml-3">
                  Personal Statement Review{" "}
                  <b className="font-black">1 full rounds</b> of edits.
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
                <div className="text-gray-400 flex-grow text-base lg:text-2xl  ml-3">
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
                <div className="text-gray-400 flex-grow text-base lg:text-2xl  ml-3">
                  Mock Interview (1 session)
                </div>
              </div>
              <div className=" text-gray-400 text-base lg:text-1xl mt-5">
                * 1 full round of edits on all supplemental essays/short answers
                for 1 school.
              </div>
              <div className="text-gray-400 mt-5 lg:mt-10 mx-auto lg:text-center text-base font-bold lg:text-4xl  ml-3">
                349.99 USD
              </div>

              <button className="content-center bg-white hover:bg-gray-100 text-gray-400 font-semibold mt-5 py-2 px-4 border border-gray-400 rounded shadow">
                Sold Out
              </button>
            </div>
          </div>

          <div className="flex-grow text-5xl font-bold lg:text-4xl mt-12 lg:mt-24 ml-3">
            À la Carte Products
          </div>
          <div className="flex-grow text-base lg:text-2xl lg:mt-10 lg:ml-3">
            <div className="grid grid-cols-1  lg:grid-cols-2 gap-6 lg:gap-6">
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
                      Essay can answer any prompt from the Common, Coalition, or
                      Universal application systems. *Must include prompt within
                      the text of the submitted file.
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
                      Express (three-day) turnaround available for an extra
                      $20.00 fee.
                    </div>
                  </div>
                  <div className=" text-base lg:text-1xl mt-5 text-gray-600">
                    * 1 full round of edits on all supplemental essays/short
                    answers for 1 school.
                  </div>
                  <div className="mt-5 mx-auto text-center text-base font-bold lg:text-3xl  ml-3">
                    99.99 USD
                  </div>

                  <button
                    onClick={() => onClick("price_1ItcngJ8MpFEqO9MOi3VQrAs")}
                    className="content-center bg-white hover:bg-gray-100 text-gray-800 font-semibold mt-5 py-2 px-4 border border-gray-400 rounded shadow"
                  >
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
                      When purchasing,{" "}
                      <b>
                        make sure to enter the number of words in the quantity
                        where quantity is the number of 100 words. of the
                        supplemental essays.{" "}
                      </b>
                      Round the number of words down.
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
                      Express (three-day) turnaround available for an extra
                      $20.00 fee.
                    </div>
                  </div>
                  <div className="mt-5 mx-auto text-center text-base font-bold lg:text-3xl  ml-3">
                    14.00 USD per 100 words
                  </div>

                  <button
                    onClick={() => onClick("price_1J6s5zJ8MpFEqO9MDqyASoy7")}
                    className="content-center bg-white hover:bg-gray-100 text-gray-800 font-semibold mt-5 py-2 px-4 border border-gray-400 rounded shadow"
                  >
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
                    299.99 USD
                  </div>

                  <button
                    onClick={() => onClick("price_1J6n4hJ8MpFEqO9M9KjLWohp")}
                    className="content-center bg-white hover:bg-gray-100 text-gray-800 font-semibold mt-5 py-2 px-4 border border-gray-400 rounded shadow"
                  >
                    Purchase
                  </button>
                </div>
              </div>
            </div>
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
