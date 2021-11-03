import React from "react";
import Header from "../../components/Header";
import Review from "./Review";
import Functions from "./Functions";
import left from "../../assets/img/left-bg-decor.png";
import right from "../../assets/img/right-bg-decor.png";

function Landing() {
  return (
    <div className="relative">
      <Header />

      <div className="h-screen max-w-screen-lg mx-auto">
        <main className="h-screen max-w-screen-lg flex items-center mx-auto">
          <div className="max-w-xl">
            <h1 className="font-bold text-6xl leading-tight">
              Madasigon, a Binisaya speaking Chatbot
            </h1>
            <p className="pr-20 text-justify text-lg my-2">
              Is an intent-based service chatbot that uses the Cebuano or
              Binisaya dialect such that the Bisaya people may be able to assist
              users with their problems without having to worry about using
              their mother tongue language.
            </p>
            <button
              className="px-6 py-3 rounded-full text-white font-bold my-2"
              style={{ backgroundColor: "#FBA70B" }}
            >
              HOW TO USE
            </button>
          </div>
          <div>
            <lottie-player
              src="https://assets3.lottiefiles.com/packages/lf20_kt08qkuh.json"
              background="transparent"
              speed={1}
              style={{ width: 450, height: 450 }}
              loop
              autoplay
            ></lottie-player>
          </div>
        </main>

        <section className="mb-32">
          <Review />
        </section>

        <Functions />
      </div>

      <img src={left} alt="" />
      <img src={right} alt="" className="absolute right-0 top-30" />
    </div>
  );
}

export default Landing;
