import React from "react";
import patrick from "../../assets/img/patrick.jpg";
import sullan from "../../assets/img/sullan.jpg";
import tristan from "../../assets/img/tristan.jpg";
import { MailIcon } from "@heroicons/react/solid";

function Team() {
  return (
    <section className="max-w-screen-2xl h-screen my-auto flex flex-col justify-center">
      <h1 className="text-center font-bold text-6xl mt-32 mb-20">Our Team</h1>
      <div className="flex justify-evenly space-x-20">
        <div className="flex flex-col items-center">
          <img
            className="w-40 h-40 object-cover rounded-full border-4 border-primary"
            src={tristan}
            alt=""
          />
          <h3 className="font-semibold text-2xl text-center mt-6">
            Tristan Montaner
          </h3>
          <h5>Document Specialist</h5>
          <div className="flex items-center opacity-60 mb-6">
            <MailIcon className="h-5 w-5 mr-2 text-primary" />
            <p>sample@gmail.com</p>
          </div>
          <p className="text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perspiciatis odio, ab alias consequatur non ratione quidem optio
            reiciendis magni odit provident aliquid ipsam quaerat animi dolor
            temporibus sit fuga dolores?
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="w-40 h-40 object-cover rounded-full border-2 border-primary"
            src={sullan}
            alt=""
          />
          <h3 className="font-semibold text-2xl text-center mt-6">
            Joseph Benedict Sullan
          </h3>
          <h5>Project Manager</h5>
          <div className="flex items-center opacity-60 mb-6">
            <MailIcon className="h-5 w-5 mr-2 text-primary" />
            <p>sample@gmail.com</p>
          </div>

          <p className="text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
            architecto delectus minus doloribus reiciendis inventore odit quos
            soluta illum non ipsam, velit esse consectetur quas enim quae saepe?
            Incidunt, quis.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="w-40 h-40 object-cover rounded-full border-4 border-primary"
            src={patrick}
            alt=""
          />
          <h3 className="font-semibold text-2xl text-center mt-6">
            Ray Patrick Patlonag
          </h3>
          <h5>Developer</h5>
          <div className="flex items-center opacity-60 mb-6">
            <MailIcon className="h-5 w-5 mr-2 text-primary" />
            <p>sample@gmail.com</p>
          </div>
          <p className="text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
            provident iure commodi delectus repudiandae id facere unde nam
            doloremque, suscipit ducimus repellendus nisi expedita eius vero
            pariatur quam incidunt consequuntur.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Team;
