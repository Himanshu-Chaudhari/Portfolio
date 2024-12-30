"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-left justify-self-start"
        >
          <h1 className="text-white mb-10 text-3xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <div className="text-3xl sm:text-5xl lg:text-7xl">
              <TypeAnimation
                sequence={[
                  "Himanshu..",
                  1000,
                  "Software Developer",
                  1000,
                  "Web 3 Developer",
                  1000,
                  "UI/UX Designer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </h1>
          
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Connect With Me
            </Link>
            <Link
              href="https://docs.google.com/document/d/1xqXQOxpbjmRBWOI00wS0u7VvQGnx20n9WX8vJNOKK40/edit?usp=sharing" target="_blank"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-3 place-self-center mt-4 lg:mt-0"
        >
          <Image
            src="/projects/himanshu.jpg"
            alt="Fund Forge"
            height={200}
            width={400}
            className="rounded-full "
          />

        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;



// "use client";

// import React from "react";
// import Image from "next/image";
// import { TypeAnimation } from "react-type-animation";
// import { motion } from "framer-motion";
// import Link from "next/link";

// const HeroSection = () => {
//   return (
//     <section className="lg:py-16">
//       <div className="grid grid-cols-1 sm:grid-cols-12">
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7 }}
//           className="col-span-9  text-left sm:text-left"
//         >
//           <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
//               Hello, I&apos;m{" "}
//             </span>
//             <br />
//             <TypeAnimation
//               sequence={[
//                 "Himanshu..",
//                 1000,
//                 "Software Developer",
//                 1000,
//                 "Web 3 Developer",
//                 1000,
//                 "UI/UX Designer",
//                 1000,
//               ]}
//               wrapper="span"
//               speed={50}
//               repeat={Infinity}
//             />
//           </h1>
//           <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
//             I'm a <span className="font-bold text-[#c7d0d5]">Software Developer</span> specializing in creating dynamic and user-friendly websites.
//             <br />
//             I can deliver innovative solutions tailored to your needs. Open for Work and Collaborations!
//           </p>
//           <div>
//             <Link
//               href="/#contact"
//               className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
//             >
//               Connect With Me
//             </Link>
//             <Link
//               href="https://docs.google.com/document/d/1xqXQOxpbjmRBWOI00wS0u7VvQGnx20n9WX8vJNOKK40/edit?usp=sharing"
//               target="_blank"
//               className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
//             >
//               <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
//                 Download CV
//               </span>
//             </Link>
//           </div>
//         </motion.div>

//         {/* Image Section on RHS */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7 }}
//           className="col-span-3 h-auto relative"
//         >
// <Image
//   src="/projects/fundForge.jpg" // Adjust your path if needed
//   alt="Fund Forge"
//   width={500} // Set custom image width
//   height={1000} // Set custom image height
//   className="rounded-full"
// />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

