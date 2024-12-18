"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import image from './svgs/images'
import Link from "next/link";
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex flex-col md:flex-row sm:flex-row text-4xl text-center gap-28">
        <ul >
          <li className="mb-10">FrontEnd</li>
          <li><div className="gap-4  text-2xl flex m-2"><div>{image.JavaScript.svg}</div>JavaScript</div></li>
          <li><div className="gap-4  text-2xl flex m-2"><div>{image.TypeScript.svg}</div>TypeScript</div></li>
          <li><div className="gap-4  text-2xl flex m-2"><div>{image.TailwindCSS.svg}</div >TailWindCSS</div></li>
          <li><div className="gap-4  text-2xl flex m-2"><div>{image.Reactjs.svg}</div>React.Js</div></li>
          <li><div className="gap-4  text-2xl flex m-2"><div>{image.Nextjs.svg}</div>Next.Js</div></li>
        </ul><ul>
          <li className="mb-10">BackEnd</li>
          <li><div className="gap-4  text-2xl flex m-3 mb-2"><div>{image.Nodejs.svg}</div>Node.Js</div></li>
          <li><div className="gap-4  text-2xl flex m-2"><div className="bg-white rounded-sm">{image.Expressjs.svg}</div>Express.Js</div></li>
          <li><div className="gap-4  text-2xl flex m-2"><div>{image.Honojs.svg}</div>Hono.Js</div></li>
        </ul>
        <ul className="pl-2">
          <li className="mb-10">Databases</li>
          <li><div className="gap-4  text-2xl flex m-2"><div>{image.Mongo.svg}</div> Mongo </div></li>
          <li><div className="gap-4  text-2xl flex m-2"><div>{image.PostgreSQL.svg}</div> PostgreSQL </div></li>
          <li><div className="gap-4  text-2xl flex m-2"><div>{image.Sql.svg}</div> MySQL </div></li>
          <li><div className="gap-4  text-2xl flex m-2"><div>{image.Prisma.svg}</div>Prisma </div></li>
        </ul><ul>
          <li className="mb-10">Cloud</li>
          <li><div className="gap-4  text-2xl flex m-2"><div>{image.AWS.svg}</div>AWS </div></li>
          <li><div className="gap-4  text-2xl flex m-2"><div>{image.Cloudfare.svg}</div>Cloudfare </div></li>
          </ul><ul>
          <li className="mb-10">Other</li>
          <li><div className="gap-4  text-2xl flex m-2"><div>{image.Cpp.svg}</div>C++ </div></li>
          <li><div className="gap-4  text-2xl flex m-2"><div>{image.Git.svg}</div>Git </div></li>
          <li><div className="gap-4  text-2xl flex m-2"><div>{image.Github.svg}</div>Github </div></li>
          <li><div className="gap-4 text-2xl  flex m-2"><div>{image.Docker.svg}</div>Docker </div></li>
        </ul>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="text-2xl text-center pl-2">
        <Link href={"https://drive.google.com/file/d/1D-GIXf-2ni0N4ZtvteCkvXXBYqNvwGmf/view"} target="_blank"> <li className="flex text-center justify-center gap-4"><div>AWS Cloud Foundation</div><div>{image.AWS.svg}</div></li> </Link><br></br>
        <Link href={"https://coursera.org/share/d8ee344a79cfd75dd8bd177f48519b62"} target="_blank"><li>IBM DevOps and Software Engineering Professional Certificate</li></Link>
      </ul>
    ),
  },
];

const AboutSection = () => {
  console.log(image)
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white mt-10" id="about">
      <div className="h-28"></div>
      <div className=" py-8 px-4 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 flex flex-col items-center h-full">
          <h2 className="text-4xl font-bold text-white mb-8">About Me</h2>
          <p className="text-justify lg:text-2xl max-w-5xl mb-10">
          I am a passionate Software Developer with a strong focus on building interactive and responsive applications. I have hands-on experience working on a variety of projects, which has helped me become a quick learner and an adaptable problem-solver. I thrive in collaborative environments and enjoy working as part of a team to deliver high-quality, impactful solutions. Continuously driven to expand my knowledge and skill set, I am always eager to embrace new challenges and technologies to create innovative applications.
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
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
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
