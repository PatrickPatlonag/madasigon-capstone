import React, { useRef } from "react";
import Header from "../../components/Header";
import Review from "./Review";
import Functions from "./Functions";
import left from "../../assets/img/left-bg-decor.png";
import right from "../../assets/img/right-bg-decor.png";
import Team from "./Team";

function Landing() {
  const teamRef = useRef(0);
  const scrollTo = () => {
    teamRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className="relative">
      <Header scrollTo={scrollTo} />

      <div className="h-screen max-w-screen-lg mx-auto">
        <main className="h-screen max-w-screen-lg flex items-center mx-auto">
          <div className="max-w-xl">
            <h1 className="font-bold text-6xl leading-tight">
              Madasigon, a Binisaya speaking Chatbot
            </h1>
            <p className="pr-20 text-justify text-lg my-2">
              Usa ka intent-based service chatbot nga naggamit sa Cebuano o
              Binisaya nga diyalekto aron ang mga Bisaya makatabang sa mga
              tiggamit sa ilang mga problema nga dili na mabalaka sa paggamit sa
              ilang sariling pinulongan
            </p>
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

        {/* <section className="mb-32">
          <Review />
        </section> */}

        <Functions />
        <div ref={teamRef}>
          <Team />
        </div>
      </div>

      <img src={left} alt="" />
      <img src={right} alt="" className="absolute right-0 top-30" />
    </div>
  );
}

export default Landing;
