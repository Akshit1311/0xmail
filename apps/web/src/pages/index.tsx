import type { NextPage } from "next";
import Head from "next/head";
import Login from "../components/Login/Login";
import WalletButton from "../components/WalletButton/WalletButton";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen grid place-items-center">
      <Head>
        <title>0xMail</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
