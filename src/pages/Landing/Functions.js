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
            Madasigon is an intent-based chatbot which means conversation comes
            naturally which makes it easy to use.
          </p>
        </div>
      </div>
      <div className="flex items-center py-20">
        <div>
          <h1 className="text-3xl font-semibold mb-3 text-right">
            Available 24/7
          </h1>
          <p className="text-xl text-right w-96">
            Madasigon can be used 24/7 so you can access it whenever you want.
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
            Madasigon uses location based-services in order for the customer to
            know the nearest phone repair shop.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Functions;
