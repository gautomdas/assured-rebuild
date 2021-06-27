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
            Congratulations! You have successfully purchased one of our products
          </div>
          <div className="mt-10 my-10 ">
            You should be receiving an email soon in regards to next steps
            within 2-3 business days once your payment has been authorized. If
            you do not receive an email please contact us at{" "}
            <a href="mailto: contact@assuredglobalconsulting.com">
              contact@assuredglobalconsulting.com
            </a>
            . In your email, please include the invoice number, the email you
            used in your purchase, and the product you bought.
          </div>
          <div className="mt-10 my-10 text-3xl lg:text-5xl font-black">
            Again, thanks for shopping with us!
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
