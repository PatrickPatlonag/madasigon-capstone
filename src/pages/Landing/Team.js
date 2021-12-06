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
            <p>jsullan_180000001777@uic.edu.ph </p>
          </div>
          <p className="text-justify"></p>
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
            <p>jsullan_180000001777@uic.edu.ph </p>
          </div>

          <p className="text-justify"></p>
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
            <p>rpatlonag_180000001915@uic.edu.ph</p>
          </div>
          <p className="text-justify"></p>
        </div>
      </div>
    </section>
  );
}

export default Team;
