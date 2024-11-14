"use client";
import { motion } from "framer-motion";
import React from "react";
const FeaturedVideos = () => {
  return (
    <div>
        <h1 className=" text-3xl font-extrabold text-center text-myverydarkpink dark:text-white md:text-4xl lg:text-5xl mb-[100px]"><span className="text-transparent bg-clip-text bg-gradient-to-r to-myverydarkpink/90 from-pink-400 ">Featured Videos</span></h1>
<div className="flex gap-7 lg:gap-10 flex-wrap justify-center mb-[100px] ">
  
  <motion.div
    initial={{ opacity: 0, scale: 1.1 }}
    animate={{ opacity: 1, scale: 1 }}
    // exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.7, ease: "easeInOut" }}
    className="relative w-[200px]  h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden"
  >
   <div >
   <video
      src="/video11.mp4"
      autoPlay
      loop
      muted
      className="w-full h-full object-cover"
    />
    <h1 className=" font-semibold text-myverydarkpink">Easy Makeup Tutorial</h1>
   </div>

    <div className="absolute inset-0"></div>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, scale: 1.1 }}
    animate={{ opacity: 1, scale: 1 }}
    // exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.7, ease: "easeInOut" }}
    className="relative w-[200px]  h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden "
  >
  
   <div>
     <video
      src="/video22.mp4"
      autoPlay
      loop
      muted
      className="w-full h-full object-cover"
    />
    <h1 className="font-semibold text-myverydarkpink">Easy Decent Makeup</h1>
    </div>

    <div className="absolute inset-0"></div>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, scale: 1.1 }}
    animate={{ opacity: 1, scale: 1 }}
    // exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.7, ease: "easeInOut" }}
    className="relative w-[200px]  h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden "
  >
  
   <div>
     <video
      src="/video3.mp4"
      autoPlay
      loop
      muted
      className="w-full h-full object-cover"
    />
    <h1 className="font-semibold text-myverydarkpink">Best Hair Care Routine</h1>
    </div>

    <div className="absolute inset-0"></div>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, scale: 1.1 }}
    animate={{ opacity: 1, scale: 1 }}
    // exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.7, ease: "easeInOut" }}
    className="relative w-[200px]  h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden "
  >
  
   <div>
     <video
      src="/video4.mp4"
      autoPlay
      loop
      muted
      className="w-full h-full object-cover"
    />
    <h1 className="font-semibold text-myverydarkpink">Bath Routine Must try</h1>
    </div>

    <div className="absolute inset-0"></div>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, scale: 1.1 }}
    animate={{ opacity: 1, scale: 1 }}
    // exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.7, ease: "easeInOut" }}
    className="relative w-[200px]  h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden "
  >
  
   <div>
     <video
      src="/video5.mp4"
      autoPlay
      loop
      muted
      className="w-full h-full object-cover"
    />
    <h1 className="font-semibold text-myverydarkpink">ASMR skin care routine</h1>

    </div>

    <div className="absolute inset-0"></div>
  </motion.div>

</div>
</div>
    
  );
};
export default FeaturedVideos;
