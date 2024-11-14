"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

const Detailcomp = ({image}:string|string[]|StaticImageData|any)=>{
        const [path] = useState("")
    return(

        <div>
            <Image
             src={path ? path :  image[0]}  
             alt="pic" 
             width={400} 
             height={200} 
            className='rounded-lg lg:h-[450px] lg:w-[1000px] w-[300px]'
            />
         </div>
    )
} 

export default Detailcomp;