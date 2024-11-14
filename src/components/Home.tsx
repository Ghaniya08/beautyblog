import Image from 'next/image'
import React from 'react';

import fromt from "../../public/front.jpg"
const Homepage = () => {
  return (
      <div className='lg:flex lg:px-40 lg:py-20 px-6 py-6 lg:gap-36 bg-white'>
          <div className='lg:hidden block'>
            <Image src={fromt} alt='js' width={500} height={400} />
          </div>
        <div className=' lg:mt-[90px]' >
          <button className='bg-mylitpink/100  text-xs space-x-2 w-24 h-7 rounded-2xl text-white mb-7 '><a href="https://e-commerce-sigma-tan.vercel.app/">Visit Website</a></button>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-myverydarkpink">Makeup Blog <br />Website</h1>
          <p className='text-myverydarkpink leading-7 [&:not(:first-child)]:mt-6 lg:w-[500px]' >
          Welcome to our Makeup Blog, your go-to destination for the latest beauty 
           trends, tips, and tutorials! Whether you're a beginner or a makeup pro, we 
          provide expert advice,  product reviews, and step-by-step guides to help you
          perfect your look. Explore the world of beauty with us and discover your unique
           style through  our curated content designed to inspire confidence and creativity."
          </p>      
          </div>
          <div className='lg:block hidden'>
            <Image src={fromt} alt='js' width={500} height={400} />
          </div>
      </div>
        
      
  // return (\bg-gradient-to-br from-pink-200 via-white to-transparent h-screen w-full   
  
  )
}

export default Homepage
