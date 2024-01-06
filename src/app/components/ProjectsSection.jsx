"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [

  {
    id: 1,
    title: "Flight Management System",
    description: "A Flight Management System (FMS) is an onboard multi-purpose navigation, performance, and aircraft operations computer, Designed to provide virtual data and operational harmony between closed and open elements associated with a flight from pre-engine start and take-off to landing and engine shut-down.",
    image: "/images/projects/project-planning.png",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "/",
  },
  
  {
    id: 2,
    title: "KTR2280B MMDR, ALA-52B, RTA50E VHF",
    description: "Honeywell’s Multi-mode digital radios and Altimeters brings a unique integration of communication and navigation, A very high-frequency navigation receiver and an automatic direction finder receiver is an option enabled via software. This radio is designed for Primus Apex cockpit-equipped aircraft, business, and general aviation, and helicopters.",
    image: "/images/projects/project-planning.png",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "/",
  },
  
  {
    id: 3,
    title: "Sentiments Analysis - Agniveer Scheme 2022",
    description: "Sentiments Analysis - Agniveer Scheme 2022 description",
    image: "/images/projects/project-planning.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/iSPYadav01/Agniveer_Scheme_2022-Public_Sentiment_Analysis",
    previewUrl: "https://github.com/iSPYadav01/Agniveer_Scheme_2022-Public_Sentiment_Analysis",
  },
  
  {
    id: 4,
    title: "Data Dynasty Lab 2023",
    description: "Data Dynasty Lab description",
    image: "/images/projects/project-planning.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://ispyadav01.github.io/MyPageDDL",
  },
  
  {
    id: 5,
    title: "Vehicle Price Prediction",
    description: "The rising prices of new vehicles make it difficult for many people to afford them, leading to an increasing preference for used vehicles. To address this, a prediction system has been developed to assess the value of used vehicles based on features like the vehicle's make and distance driven (km). This model benefits both buyers and sellers in making informed decisions.",
    image: "/images/projects/project-planning.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  
  {
    id: 6,
    title: "Advance Shop Security System",
    description: "This project is based on IoT and Embedded systems and is all about real-time monitoring of the shop/home that is either situated near or far from the individual’s home.",
    image: "/images/projects/project-planning.png",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "/",
  },  

  {
    id: 7,
    title: "React Portfolio Website",
    description: "This is a portfolio website built with Next.js and Tailwind CSS. It showcases your skills, projects, and achievements in an elegant and responsive design.",
    image: "/images/projects/portpofolio-web.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },

];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
