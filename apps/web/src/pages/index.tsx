import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <ul className="flex p-5">
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
      </nav>
      <div className="border-t-2 border-grey-10"> </div>
      <div className="p-10  font-bold text-5xl">
        <p className="" >The smart way to mail.</p> 
        <p className="text-slate-200">Keep your email safe and<br></br>clean with us.</p>
        
        
      </div>
      <button className="m-8 p-2 rounded-md bg-black text-white">Get started now</button>
    </div>
  );
};

export default Home;
