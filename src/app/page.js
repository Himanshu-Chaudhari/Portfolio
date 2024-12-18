import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import styles from "./page.module.scss"
import StickyCursor from "./components/cursor/stickyCursor";
import { SharedProvider } from "./components/context/SharedContext";

export default function Home({ Component, pageProps }) {
  return (
    <main className={`${styles.main} flex min-h-screen flex-col bg-[#121212]`}>
      <SharedProvider>
      {/* <StickyCursor {...pageProps}/> */}
      <Navbar {...pageProps} />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
      </SharedProvider>
    </main>
  );
}
