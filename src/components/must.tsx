import React from 'react'
import Image  from 'next/image';
import skinmaybe from "../../public/finalmaybe.jpg"
import Link from 'next/link';
const Must = () => {
  return (
    <div>
      <h1 className="mb-4 text-3xl font-extrabold text-center text-myverydarkpink dark:text-white md:text-4xl lg:text-5xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-myverydarkpink/90 from-pink-400">Must Try Products</span></h1>
      <Link href="/skincare">
      <section className="text-gray-600 body-font overflow-hidden bg-white">
  <div className="container px-5 py-24 ">
    <div className="lg:w-4/5 mx-auto gap-9 flex lg:flex-row flex-col  w-2/3 ">
    <Image
        alt="ecommerce"
        className="object-cover object-center rounded lg:w-[700px] lg:h-[400px] w-[400px] h-[200px]"
        src={skinmaybe}
        width={500}
        height={200}
      />
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h1 className="itle-font mb-4 scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl text-myverydarkpink">
        5 must have skincare products for Radiant skin.
        </h1>
        <p className="leading-relaxed mb-4 text-myverydarkpink">
        Experience the best in skincare with our curated selection of luxurious products. Whether you're looking for hydration, rejuvenation, or glow, our range is designed to meet your every need. Discover the power of self-care with gentle formulas that nurture your skin, leaving it soft, smooth, and radiant.
        </p>
        <button className='bg-mylitpink/100  text-xs space-x-2 w-24 h-7 rounded-2xl text-white mt-4 ml-80'>See Products</button>
      </div>
      {/* lg:w-1/2 w-full lg:h-auto h-64  */}
      {/* <Image
        alt="ecommerce"
        className="object-cover object-center rounded lg:w-[700px] lg:h-[400px] w-[400px] h-[200px]"
        src={skinmaybe}
        width={500}
        height={200}
      /> */}
    </div>
  </div> 
</section>
      </Link>
    </div>
  
  )
}

export default Must;
