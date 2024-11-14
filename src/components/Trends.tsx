"use client";
import { useAppSelector } from '@/app/store/hooks';
import React from 'react'
import TrendComp from './Trend';
const Trends = () => {
    const catess = useAppSelector((state)=>state.categoryBlog);
    const trendforfront = catess.slice(0,12);
  return(
    <div className='mb-[200px]'>
      <div className='text-center'>
      <h1 className="mb-4 text-3xl font-extrabold text-center text-myverydarkpink dark:text-white md:text-4xl lg:text-5xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-myverydarkpink/90 from-pink-400">Trending Topics</span></h1>
      </div>
      <div className='flex flex-wrap justify-center lg:gap-5'>
        {
            trendforfront.map((items:any , i )=>(
                <TrendComp
                    key={i}
                    src={items.image[0]}
                    alt={items.alt}
                    title={items.title}
                    description={items.description}
                    catogry={items.category}
                    blog={items.blog} />
            ))}
      </div>
    </div>
  )
}

export default Trends
