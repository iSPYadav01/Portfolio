"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const WorkExpeSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="workexp">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h3 className="text-4xl font-bold text-white mb-4">Work Experience</h3>
          <h3 className="text-2xl font-bold text-white mb-4">Honeywell ✈️</h3>
          {/* <h3 className="text-1xl font-bold text-white mb-4">✈ Software Engineer II</h3>
          <h4 className="text-xs font-bold text-white mb-2">(2023 - Current, 📍 Bengaluru, KA)</h4>
          <ul className="list-disc text-sm lg:text-base mb-4">
            <li>Design and maintain NewGen Flight Management System (FMS) software in collaboration with diverse teams.</li>
            <li>Implement innovative algorithms to enhance FMS functionality, improving navigation, fuel efficiency, and safety.</li>
            <li>Analyze and process complex datasets using Data Science techniques for data-driven improvements.</li>
            <li>Debug and troubleshoot software issues to maintain FMS operational accuracy.</li>
            <li>Stay updated with industry trends to adapt FMS software to evolving aviation standards.</li>
            <li>Explore emerging technologies for continuous FMS enhancement.</li>
            <li>Provide mentorship to junior team members, fostering a culture of learning and excellence.</li>
            <li>FMS for Airbus A320, A330, A340, A350, A380.</li>
          </ul> */}
          
          <h3 className="text-1xl font-bold text-white mb-4"></h3>

          <h3 className="text-1xl font-bold text-white mb-4">✈ Software Engineer I</h3>
          <h4 className="text-xs font-bold text-white mb-2">(2021 - Current, 📍 Bengaluru, KA)</h4>
          <ul className="list-disc text-sm lg:text-base mb-4">
            <li>Design and maintain NewGen Flight Management System (FMS) software in collaboration with diverse teams.</li>
            <li>Implement innovative algorithms to enhance FMS functionality, improving navigation, fuel efficiency, and safety.</li>
            <li>Analyze and process complex datasets using Data Science techniques for data-driven improvements.</li>
            <li>Debug and troubleshoot software issues to maintain FMS operational accuracy.</li>
            <li>Stay updated with industry trends to adapt FMS software to evolving aviation standards.</li>
            <li>Explore emerging technologies for continuous FMS enhancement.</li>
            <li>Provide mentorship to junior team members, fostering a culture of learning and excellence.</li>
            <li>FMS for Airbus A320, A330, A340, A350, A380.</li>
          </ul>


        

        </div>
      </div>
    </section>
  );
};

export default WorkExpeSection;
