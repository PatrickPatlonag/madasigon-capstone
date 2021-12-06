import React from "react";
import intent from "../../assets/img/intent.svg";
import online from "../../assets/img/online.svg";
import location from "../../assets/img/location.svg";

function Functions() {
  return (
    <section>
      <div className="flex items-center py-20">
        <img src={intent} alt="" className="h-60 px-20" />
        <div>
          <h1 className="text-3xl font-semibold mb-3 text-left">
            Intent-based chatbot
          </h1>
          <p className="text-xl text-left w-96">
            Ang Madasigon kay usa ka intent-based nga chatbot nga nagpasabot nga
            ang panag-istoryahanay natural nga mopadali sa paggamit niini.
          </p>
        </div>
      </div>
      <div className="flex items-center py-20">
        <div>
          <h1 className="text-3xl font-semibold mb-3 text-right">
            Available 24/7
          </h1>
          <p className="text-xl text-right w-96">
            Ang Madasigon mahimong gamiton 24/7 aron ma-access nimo kini bisan
            kanus-a nimo gusto.
          </p>
        </div>
        <img src={online} alt="" className="h-60 px-20" />
      </div>
      <div className="flex items-center py-20">
        <img src={location} alt="" className="h-60 px-20" />
        <div>
          <h1 className="text-3xl font-semibold mb-3 text-left">
            Location based-service
          </h1>
          <p className="text-xl text-left w-96">
            Ang Madasigon naggamit sa mga serbisyo nga nakabase sa lokasyon aron
            mahibal-an sa kostumer ang labing duol nga tindahan sa pag-ayo sa
            telepono.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Functions;
