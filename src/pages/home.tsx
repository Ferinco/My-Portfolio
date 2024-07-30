import React, { useEffect, useState } from "react";
import HeroSection from "../components/hero";
import PhotoGrid from "../components/photoGrid";
import WriteUp from "../components/writeUp";
import ProjectsSection from "../components/projectsSection";
import Preloader from "../custom/preloader";
import { motion } from "framer-motion";
export default function Home(): JSX.Element {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    setLoading(true);
  }, []);
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <motion.div
          className="Home py-9 mt-[70px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <HeroSection />
          <PhotoGrid />
          <WriteUp />
          <ProjectsSection />
        </motion.div>
      )}
    </>
  );
}
