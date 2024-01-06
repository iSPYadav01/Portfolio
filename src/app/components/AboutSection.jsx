"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div>
        <div className="skill-container">
          <h4 style={{ fontSize: '14px' }}>Python</h4>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: '90%', height: '8px', backgroundColor: '#4CAF50', display: 'inline-block' }}></div>
            <span className="percentage" style={{ display: 'inline-block', marginLeft: '5px', fontSize: '11px' }}>90%</span>
          </div>
        </div>

        <div className="skill-container">
          <h4 style={{ fontSize: '14px' }}>C++</h4>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: '85%', height: '8px', backgroundColor: '#4CAF50', display: 'inline-block' }}></div>
            <span className="percentage" style={{ display: 'inline-block', marginLeft: '5px', fontSize: '11px' }}>85%</span>
          </div>
        </div>

        <div className="skill-container">
          <h4 style={{ fontSize: '14px' }}>ADA</h4>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: '80%', height: '8px', backgroundColor: '#4CAF50', display: 'inline-block' }}></div>
            <span className="percentage" style={{ display: 'inline-block', marginLeft: '5px', fontSize: '11px' }}>80%</span>
          </div>
        </div>

        <div className="skill-container">
          <h4 style={{ fontSize: '14px' }}>Flight Management System</h4>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: '85%', height: '8px', backgroundColor: '#4CAF50', display: 'inline-block' }}></div>
            <span className="percentage" style={{ display: 'inline-block', marginLeft: '5px', fontSize: '11px' }}>85%</span>
          </div>
        </div>

        <div className="skill-container">
          <h4 style={{ fontSize: '14px' }}>Avioncs /Aviation</h4>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: '85%', height: '8px', backgroundColor: '#4CAF50', display: 'inline-block' }}></div>
            <span className="percentage" style={{ display: 'inline-block', marginLeft: '5px', fontSize: '11px' }}>85%</span>
          </div>
        </div>  

        <div className="skill-container">
          <h4 style={{ fontSize: '14px' }}>DO-178B/C, DO-254, DAL</h4>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: '85%', height: '8px', backgroundColor: '#4CAF50', display: 'inline-block' }}></div>
            <span className="percentage" style={{ display: 'inline-block', marginLeft: '5px', fontSize: '11px' }}>85%</span>
          </div>
        </div>
    
        <div className="skill-container">
          <h4 style={{ fontSize: '14px' }}>Git,Bitbucket,Teamcenter,DOORS</h4>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: '80%', height: '8px', backgroundColor: '#4CAF50', display: 'inline-block' }}></div>
            <span className="percentage" style={{ display: 'inline-block', marginLeft: '5px', fontSize: '11px' }}>80%</span>
          </div>
        </div>

        <div className="skill-container">
          <h4 style={{ fontSize: '14px' }}>Data Governance</h4>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: '70%', height: '8px', backgroundColor: '#4CAF50', display: 'inline-block' }}></div>
            <span className="percentage" style={{ display: 'inline-block', marginLeft: '5px', fontSize: '11px' }}>70%</span>
          </div>
        </div>
    
        <div className="skill-container">
          <h4 style={{ fontSize: '14px' }}>Deep Learning</h4>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: '75%', height: '8px', backgroundColor: '#4CAF50', display: 'inline-block' }}></div>
            <span className="percentage" style={{ display: 'inline-block', marginLeft: '5px', fontSize: '11px' }}>75%</span>
          </div>
        </div>
    
        <div className="skill-container">
          <h4 style={{ fontSize: '14px' }}>Red Hat Enterprise Linux (RHEL)</h4>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: '80%', height: '8px', backgroundColor: '#4CAF50', display: 'inline-block' }}></div>
            <span className="percentage" style={{ display: 'inline-block', marginLeft: '5px', fontSize: '11px' }}>80%</span>
          </div>
        </div>
    
        <div className="skill-container">
          <h4 style={{ fontSize: '14px' }}>Machine Learning (ML)</h4>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: '85%', height: '8px', backgroundColor: '#4CAF50', display: 'inline-block' }}></div>
            <span className="percentage" style={{ display: 'inline-block', marginLeft: '5px', fontSize: '11px' }}>85%</span>
          </div>
        </div>
    
        <div className="skill-container">
          <h4 style={{ fontSize: '14px' }}>Artificial Intelligence (AI)</h4>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: '85%', height: '8px', backgroundColor: '#4CAF50', display: 'inline-block' }}></div>
            <span className="percentage" style={{ display: 'inline-block', marginLeft: '5px', fontSize: '11px' }}>85%</span>
          </div>
        </div>
    
        <div className="skill-container">
          <h4 style={{ fontSize: '14px' }}>Large Language Models (LLM)</h4>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: '85%', height: '8px', backgroundColor: '#4CAF50', display: 'inline-block' }}></div>
            <span className="percentage" style={{ display: 'inline-block', marginLeft: '5px', fontSize: '11px' }}>85%</span>
          </div>
        </div>
    
        <div className="skill-container">
          <h4 style={{ fontSize: '14px' }}>Retrieval Augmented Generation (RAG)</h4>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: '80%', height: '8px', backgroundColor: '#4CAF50', display: 'inline-block' }}></div>
            <span className="percentage" style={{ display: 'inline-block', marginLeft: '5px', fontSize: '11px' }}>80%</span>
          </div>
        </div>

        <div className="skill-container">
          <h4 style={{ fontSize: '14px' }}>Amazon Sage Maker</h4>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: '70%', height: '8px', backgroundColor: '#4CAF50', display: 'inline-block' }}></div>
            <span className="percentage" style={{ display: 'inline-block', marginLeft: '5px', fontSize: '11px' }}>70%</span>
          </div>
        </div>

        <div className="skill-container">
          <h4 style={{ fontSize: '14px' }}>Hugging Face</h4>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: '70%', height: '8px', backgroundColor: '#4CAF50', display: 'inline-block' }}></div>
            <span className="percentage" style={{ display: 'inline-block', marginLeft: '5px', fontSize: '11px' }}>70%</span>
          </div>
        </div>


        <div className="skill-container">
          <h4 style={{ fontSize: '14px' }}>Pipelines</h4>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: '80%', height: '8px', backgroundColor: '#4CAF50', display: 'inline-block' }}></div>
            <span className="percentage" style={{ display: 'inline-block', marginLeft: '5px', fontSize: '11px' }}>80%</span>
          </div>
        </div>
        
        <div className="skill-container">
          <h4 style={{ fontSize: '14px' }}>Computer Architecture</h4>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: '70%', height: '8px', backgroundColor: '#4CAF50', display: 'inline-block' }}></div>
            <span className="percentage" style={{ display: 'inline-block', marginLeft: '5px', fontSize: '11px' }}>70%</span>
          </div>
        </div>
        

        <div className="skill-container">
          <h4 style={{ fontSize: '14px' }}>Azure</h4>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: '80%', height: '8px', backgroundColor: '#4CAF50', display: 'inline-block' }}></div>
            <span className="percentage" style={{ display: 'inline-block', marginLeft: '5px', fontSize: '11px' }}>80%</span>
          </div>
        </div>
    
        <div className="skill-container">
          <h4 style={{ fontSize: '14px' }}>Advance Analytics</h4>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: '75%', height: '8px', backgroundColor: '#4CAF50', display: 'inline-block' }}></div>
            <span className="percentage" style={{ display: 'inline-block', marginLeft: '5px', fontSize: '11px' }}>75%</span>
          </div>
        </div>
    
        <div className="skill-container">
          <h4 style={{ fontSize: '14px' }}>Big Data Tools</h4>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: '75%', height: '8px', backgroundColor: '#4CAF50', display: 'inline-block' }}></div>
            <span className="percentage" style={{ display: 'inline-block', marginLeft: '5px', fontSize: '11px' }}>75%</span>
          </div>
        </div>
        
        <div className="skill-container">
          <h4 style={{ fontSize: '14px' }}>Extract, Transform, Load (ETL)</h4>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: '75%', height: '8px', backgroundColor: '#4CAF50', display: 'inline-block' }}></div>
            <span className="percentage" style={{ display: 'inline-block', marginLeft: '5px', fontSize: '11px' }}>75%</span>
          </div>
        </div>
      
        <div className="skill-container">
          <h4 style={{ fontSize: '14px' }}>Amazon Web Services (AWS)</h4>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: '70%', height: '8px', backgroundColor: '#4CAF50', display: 'inline-block' }}></div>
            <span className="percentage" style={{ display: 'inline-block', marginLeft: '5px', fontSize: '11px' }}>70%</span>
          </div>
        </div>
    
        <div className="skill-container">
          <h4 style={{ fontSize: '14px' }}>HTML</h4>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: '60%', height: '8px', backgroundColor: '#4CAF50', display: 'inline-block' }}></div>
            <span className="percentage" style={{ display: 'inline-block', marginLeft: '5px', fontSize: '11px' }}>60%</span>
          </div>
        </div>
    
        <div className="skill-container">
          <h4 style={{ fontSize: '14px' }}>CSS</h4>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: '60%', height: '8px', backgroundColor: '#4CAF50', display: 'inline-block' }}></div>
            <span className="percentage" style={{ display: 'inline-block', marginLeft: '5px', fontSize: '11px' }}>60%</span>
          </div>
        </div>
    
        <div className="skill-container">
          <h4 style={{ fontSize: '14px' }}>NodeJS</h4>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: '50%', height: '8px', backgroundColor: '#4CAF50', display: 'inline-block' }}></div>
            <span className="percentage" style={{ display: 'inline-block', marginLeft: '5px', fontSize: '11px' }}>55%</span>
          </div>
        </div>
    
        <div className="skill-container">
          <h4 style={{ fontSize: '14px' }}>React</h4>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: '50%', height: '8px', backgroundColor: '#4CAF50', display: 'inline-block' }}></div>
            <span className="percentage" style={{ display: 'inline-block', marginLeft: '5px', fontSize: '11px' }}>50%</span>
          </div>
        </div>
      </div>
    ),
    
    
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>PG Diploma in Big Data Analytics(2021 - 2021) from Center for Development of Advance Computing, Knowledge Park, Bengaluru, Karnataka, India</li>
        <li>Bachelor of Technology in Electronics and Communication(2016-2020) from Dr. Rammanohar Lohia Avadh University, Ayodhya, Uttar Pradesh, India</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>C++ Basics to Advanced</li>
        <li>Complete Data Wrangling & Data Visualization With Python</li>
        <li>Design/Developement Assurance Level(DAL).</li>
        <li>DO-254 Introduction Certification</li>
        <li>DO-178B/C Applicability and Transitioning Course</li>
        <li>Six Sigma Certified Lean Six Sigma Green Belt</li>
        <li>Foundations: Data, Data, Everywhere by Coursera, and Google</li>
        <li>Penetration Testing and Ethical Hacking with Kali Linux</li>
      </ul>
    ),
  },
  {
    title: "Achievement",
    id: "achievement",
    content: (
      <ul className="list-disc pl-2">
        <li>Aero Young Aviator Program (YAP) 2023 Graduates.</li>
        <li>Bravo/Bronze Award from Honeywell</li>
        <li>Worked as Campus Ambassador for Technex’19 IIT BHU.</li>
        <li>Participated in the 5th National Level Techno Exhibition 2019 , holding 7th Position in Bengaluru</li>
        <li>Participated in IDEATHON’19, Faridabad</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Passionate about the Convergence of Technology and Aviation,I bring 2+ years of hands-on experience in Avionics and Flight Management System Software Development for Airbus A320-A380 Series Aircraft.
          My journey in AI,Machine Learning, Data Science, Data Engineering, and Analytics is fueled by an insatiable curiosity for solving intricate challenges. 
          With a solid background in avionics and aerospace, I m committed to pushing innovation boundaries in this dynamic field. 
          My interests also extend to Generative AI, where I explore creative applications of artificial intelligence for groundbreaking solutions. 
          Lets connect and explore opportunities for collaborative projects at the intersection of aviation and cutting-edge tech.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("achievement")}
              active={tab === "Achievement"}
            >
              {" "}
              Achievement{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
