import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
const TrendComp = (
  {
    src ,
    alt ,
    title, 
    description , 
    catogry,
    blog,
   } :{
      src:string , 
      alt:string ,
      title:string, 
      description:string , 
      catogry:string,
      blog : string,
  }
) => {
  return (
    <div className=" mb-[100px]  ">
<div className="text-gray-600 body-font mb-7">
  <div className="">
    <div className="flex flex-wrap -m-4 lg:gap-5 gap-1 lg:py-24 mx-auto lg:-mt-28 ">
    <Link href={`${catogry}/${blog}`}>
        <div className="lg:w-[300px] lg:h-[100px] md:w-1/2 p-4 lg:gap-5 gap-1 w-full ">
        <div className="block relative h-[200px] rounded overflow-hidden hover:scale-110 hover:duration-500">
            <Image 
            src={src}  
            alt={alt}
            width={300}
            height={300}
            />  
        </div>
        <div className="mt-4">
          <h1 className="line-clamp-1 w-[275px] text-[17px] text-myverydarkpink font-semibold">{title}</h1>
          <h2 className=" title-font text-sm font-medium line-clamp-1 w-[250px] text-start text-black items-start">
         {description}
          </h2>       
        </div>
      </div>
      </Link>
      </div >
  </div>
</div>
        </div>
//     <div>
//       <div>

//       <section className="text-gray-600 body-font">
//   <div className="container px-5 py-24 mx-auto">
//     <div className="flex flex-wrap -m-4">
//     <Link href={`${catogry}/${blog}`}>
//       <div className="lg:w-[300px] md:w-1/2 p-4 w-full">
//         <a className="block relative h-48 rounded overflow-hidden">
//           <Image
//             src={src}
//             alt={alt}
//             width={300}
//             height={300}
//             className="object-cover object-center w-full h-full block"
//           />
//         </a>
//         <div className="mt-4">
//           <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
//             CATEGORY
//           </h3>
//           <h2 className="text-gray-900 title-font text-lg font-medium line-clamp-1">
//           {title}
//           </h2>
//           <p className="mt-1 line-clamp-2">{description}</p>
//         </div>
//       </div>
//       </Link>
//     </div>
//   </div>
// </section>
//  {/* <section className="text-gray-600 body-font mb-5 px-2">
//   <div className="container  py-24 mx-auto">
//     <div className="flex flex-wrap -m-4">
//     <Link href={`${catogry}/${blog}`}>
//       <div className="lg:w-[350px] lg:h-[130px] md:w-1/2 lg:gap-5 gap-1 w-full p-4 mb-7 ">
//         <div className=" p-6 rounded-lg">
//         <div className="block relative h-48 rounded overflow-hidden hover:scale-110 hover:duration-500">
//           <Image
//             className="h-40 rounded w-full object-cover object-center mb-6"
//             src={src}
//             alt={alt}
//             width={300}
//             height={300}
//           />
//           </div>
//           <h2 className="text-lg text-gray-900 font-medium title-font mb-1 line-clamp-1">
//             {title}
//           </h2>
//           <p className="leading-relaxed text-base line-clamp-2">
//            {description}
//           </p>
//         </div>
//       </div>
//       </Link>
//     </div>
//   </div>
// </section> */}
// </div>
//     </div>
  )
}
export default TrendComp;
