"use client";
import React, { useState } from "react";
import GithubIcon from '../assets/github-icon.svg'
import LinkedinIcon from "../assets/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import image from "./svgs/images";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="md:my-12 items-center text-center py-24 relative"
    >
      <div className="z-10 flex flex-col items-center">
        <h5 className="text-xl  font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4">
          {" "}
          I&apos;m currently looking for opportunities, my inbox is always
          open.<br></br> Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-4">
          <Link target="_blank"  href="https://github.com/Himanshu-Chaudhari">
            <div className="rounded-md">{image.Github.svg}</div>
          </Link>
          <Link target="_blank" href="https://www.linkedin.com/in/himanshu-chaudhari-386a40228/">
            {image.LinkedIn.svg}
          </Link>
          <Link href="https://www.instagram.com/__himanshu_chaudhari" target="_blank">{image.Instagram.svg}</Link>
          <Link href="https://x.com/Himanshu___19?t=oCNUvRg7UXNw2QjIdx4VOA&s=09" target="_blank">{image.X.svg}</Link>
          <Link href="mailto:himanshuchaudhari8561@gmail.com">{image.Gmail.svg}</Link>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
