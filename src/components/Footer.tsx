import React from 'react'
import { IoLogoGithub } from "react-icons/io";
import { FaInstagram ,FaFacebook  ,FaLinkedin  } from "react-icons/fa6";
import Image from "next/image";

const Footer = () => {
  return (
    <div className='bg-mylitpink'>
      <footer className="text-gray-600 body-font justify-center mx-auto">
        <h1 className='text-mydarkpink mx-auto justify-center text-center'>We have different kinds of CATEGORIES you can view our website and order from there</h1>
         <div className="container px-5 py-11  mx-auto ">
    <div className="flex flex-wrap md:text-left text-center -mb-6 -mx-4">
      <div className="lg:w-1/6 md:w-1/2 w-full px-4 ">
        <h3 className=" scroll-m-20 font-semibold tracking-tight mb-3 text-myverydarkpink ">
        Practice Project
        </h3>
        <nav className="list-none mb-10">
          <li>
          <p className=" flex  text-xs font-semibold tracking-tight text-mydarkpink hover:text-myverydarkpink/80 duration-300">
          In the pursuit of becoming a professional web developer. This website serves as a practical project to help me learn and apply the core concepts of web development, from designing a user-friendly interface to integrating essential features for online shopping.
          </p>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
         <h2 className=" scroll-m-20 text-base font-semibold tracking-tight mb-3 text-myverydarkpink ">
         Challenges and Learning Process
        </h2>
        <nav className="list-none mb-10">
          {/* <li>
            <a className="text-gray-600 hover:text-gray-800">First Link</a>
          </li> */}
          <li>
          <p className=" flex  text-xs font-semibold tracking-tight text-mydarkpink hover:text-myverydarkpink/80 duration-300">
          As a student still in the process of learning, this project is a significant stepping stone. I am learning how to work with technologies like HTML, CSS , Tailwind CSS , JavaScript, and TypeScript, and applying frameworks such as Next.js . 
          </p>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
         <h2 className=" scroll-m-20 text-base font-semibold tracking-tight mb-3 text-myverydarkpink ">
         Future Aspirations and Goals
        </h2>
        <nav className="list-none mb-10">
          <li>
          <p className=" flex  text-xs font-semibold tracking-tight text-mydarkpink hover:text-myverydarkpink/80 duration-300">
          With this project, I aim to build a solid foundation in e-commerce development. In the future, I plan to enhance the website with additional features like personalized recommendations, product reviews, and a more robust backend system.         .
          </p>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
      <h2 className=" scroll-m-20 text-base font-semibold tracking-tight mb-3 text-myverydarkpink ">
      CATEGORIES
        </h2>
        <nav className="list-none mb-10 ">
          <li>
            <a className=" lg:text-xs text-xl font-semibold tracking-tight text-mydarkpink hover:text-myverydarkpink/80 duration-300">Eyes</a>
          </li>
          <li>
            <a className=" lg:text-xs text-xl font-semibold tracking-tight text-mydarkpink hover:text-myverydarkpink/80 duration-300">Face</a>
          </li>
          <li>
            <a className="lg:text-xs text-xl font-semibold tracking-tight text-mydarkpink hover:text-myverydarkpink/80 duration-300">Nails</a>
          </li>
          <li>
            <a className="  lg:text-xs text-xl font-semibold tracking-tight text-mydarkpink hover:text-myverydarkpink/80 duration-300">Lips</a>
          </li>
          <li>
            <a className=" lg:text-xs text-xl font-semibold tracking-tight text-mydarkpink hover:text-myverydarkpink/80 duration-300">Hair care</a>
          </li>
          <li>
            <a className="  lg:text-xs text-xl font-semibold tracking-tight text-mydarkpink hover:text-myverydarkpink/80 duration-300">Skin care</a>
          </li>
          <li>
            <a className=" lg:text-xs text-xl  font-semibold tracking-tight text-mydarkpink hover:text-myverydarkpink/80 duration-300">Accessories</a>
          </li>
        </nav>
      </div>
       <div>
       <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
          <label
            htmlFor="footer-field"
            className="leading-7 text-sm text-myverydarkpink"
          >
            Enter Your Email here 
          </label>
          <input
            type="text"
            id="footer-field"
            name="footer-field"
            className="w-full bg-myWhite bg-opacity-50 rounded border border-myverydarkpink focus:ring-2 focus:bg-transparent focus:ring-myverydarkpink focus:border-myverydarkpink text-base outline-none text-myverydarkpink py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
       <div className='mt-6 ml-40'>
       <button className="inline-flex text-white bg-myverydarkpink border-0 py-2 px-6 focus:outline-none hover:bg-mynormalpink rounded">
         Submit
        </button>
        <div>
        </div>
        </div>
        </div>
        </div>
  </div>
  <div className="border-t border-gray-200">
  </div>
  <div className="bg-mylitpink">
    <h1 className="ml-14 text-myverydarkpink text-xl "><strong>Ghaniya s Makeup Blog Website</strong></h1>
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className=" flex text-gray-500 text-sm text-center sm:text-left title-font items-center font-medium justify-center">
     <Image src="/forimgpic.jpg" 
    width={200}
     height={40}
      alt="" 
      className='h-10 w-28'
      />
        <a
         href="https://github.com/Ghaniya08"
        >
          © Ghaniya s Beauty Blog
        </a>
      </p>
      <span className=" text-myverydarkpink gap-3 lg:ml-auto lg:mt-0 mt-4 w-full justify-center md:justify-start md:w-auto">
        <p className="text-myverydarkpink inline-flex mr-3"><strong>Follow me on</strong></p>
       <div className="text-2xl font-semibold  flex gap-4">
       <a href="https://pk.linkedin.com/in/ghaniya-khan-138919308"> <FaLinkedin /></a>
        <a href="https://github.com/Ghaniya08"><IoLogoGithub  /></a>
          <a href="https://instagram.com/ghaniya08">< FaInstagram/></a>
          <a href="https://www.facebook.com/profile.php?id=61554662968933&mibextid=ZbWKwL"><FaFacebook /></a>
       </div>
      </span>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer
