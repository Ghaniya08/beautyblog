"use client"
import {  useAppSelector } from "../../store/hooks";
import { MdAccountCircle } from "react-icons/md";
import Detailcomp from "@/components/Detailblog";
import CommentSection from "@/components/Comment";
const BlogsMain = ( {params} : { params: { blog: string}  } ) => {
    const detailBlogs = useAppSelector((state)=>state.categoryBlog);
    const blog = detailBlogs.filter((val) => val.blog == params.blog );
    // const [blogdetail]= useState ({
    //     id: blog[0].id,
    //     category: blog[0].category,
    //     image: blog[0].image,
    //     description: blog[0].description,
    //     title: blog[0].title,
    //     blog: blog[0].blog,
    // })
    console.log("abc" , blog);
    
    return (
    <div className="mt-[100px] mb-[100px]">
      <div className='lg:w-[800px] px-9 lg:px-12 lg:ml-[340px]'>
      <h1 className="text-3xl lg:mb-[50px] font-extrabold text-center pb-2 dark:text-white md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r to-myverydarkpink from-mynormalpink capitalize">{blog[0].category}</h1>
      <h1 className='flex mt-2 lg:mb-4 text-myverydarkpink'><a href="https://github.com/Ghaniya08"><MdAccountCircle className='text-3xl mr-3' /></a> Ghaniya Khan <span className='ml-4'> November 12 2024</span></h1>
      <Detailcomp image={blog[0].image}/>
      <h1 className="scroll-m-20 text-myverydarkpink font-bold lg:pb-2 lg:text-2xl text-xl  tracking-tight mt-6">{blog[0].title}</h1>
      <p  className='lg:leading-7 text-black lg:text-[16px] text-[12px] lg:[&:not(:first-child)]:mt-6 mb-3'>{blog[0].description}
      </p>
      <CommentSection/>

      </div>
        {/* <h1>{blog[0].category}</h1>
        <Detailcomp image={blog[0].image}/> 
        <h1>{blog[0].description}</h1> */}
    </div>
  )
}

export default BlogsMain
