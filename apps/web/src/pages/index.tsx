import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Login from "../components/Login/Login";
import WalletButton from "../components/WalletButton/WalletButton";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen grid place-items-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <nav>
        <ul className="flex p-5 justify-between">
          <Link href="/">
            <li className="p-5">Home</li>
          </Link>
          <Link href="/about">
            <li className="p-5">About</li>
          </Link>
          <Link href="/blog">
            <li className="p-5">Pricing</li>
          </Link>
          <Link href="/contact">
            <li className="p-5 mr-80">Contact</li>
          </Link>

          <button className="ml-80 mr-10 pr-15 pl-5">Sign up now</button>
          <button className="p-5">Sign in</button>
        </ul>
      </nav> */}

      <div>
        <WalletButton />
        <div className="w-fit mx-auto text-center text-7xl font-bold my-6 bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text">
          0xMail
        </div>
        <div className="p-10  font-bold text-5xl text-center">
          <p className="">The smart way to mail.</p>
          <p className="text-slate-400">
            Keep your email safe and<br></br>clean with us.
          </p>
        </div>
        <Login />
      </div>
    </div>
  );
};

export default Home;
