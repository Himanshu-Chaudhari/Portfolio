"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Blogify",
    description: "A single-page blog application , enabling users to write, read, and share blogs.",
    image: "/projects/Blogify.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Himanshu-Chaudhari/blogify",
    previewUrl: "https://blogify-smoky-omega.vercel.app",
  },
  {
    id: 2,
    title: "fundForge",
    description: "A portfolio management application with a user-friendly dashboard, enabling dynamic investment visualization and tracking.",
    image: "/projects/fundForge.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Himanshu-Chaudhari/fundForge",
    previewUrl: "https://fund-forge-two.vercel.app",
  },
  {
    id: 3,
    title: "Coursify",
    description: "A Course Selling website that allows users to browse, purchase, and access educational Courses. The platform features a seamless payment system,for enhanced user experience.",
    image: "/projects/Coursify.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Himanshu-Chaudhari/coursify",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "PayTM",
    description: "A Paytm-like wallet app with secure transactions, balance management, and payment tracking, ensuring reliable financial operations.",
    image: "/projects/PayTM.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Himanshu-Chaudhari/PayTM.git",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "MyExchange(Decentralised Exchange)",
    description: "A mild combination of a decentralized and centralized exchange",
    image: "/projects/WazirX3.jpg",
    tag: ["All", "Web3"],
    gitUrl: "https://github.com/Himanshu-Chaudhari/MyExchange",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Muzii",
    description: "A Music Streaming Platform (Being Developed)",
    image: "/projects/MixMaster.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Himanshu-Chaudhari/Muzii",
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
      <div className="h-40"></div>
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
          name="Web3"
          isSelected={tag === "Web3"}
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
