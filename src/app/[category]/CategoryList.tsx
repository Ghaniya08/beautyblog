"use client";
import TrendComp from "@/components/Trend";
import { useAppSelector } from "../store/hooks";
// import { cateblog } from "../utilities/type";
const Catogrypage = ({params} : {params:{category : string}}) => {
    const Catergoy = useAppSelector((state)=>state.categoryBlog)
    const Compforyou = Catergoy.filter((val)=>val.category == params.category);
     console.log();
    return (
    <div>
      <div className="text-center mb-14">
      <h1 className=" scroll-m-20  pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-myverydarkpink capitalize">
        <strong>{params.category}</strong>
      </h1>
    </div>
      <div className=" flex flex-wrap justify-center lg:gap-5 gap-1 ">
        {Compforyou.map((items:any , i) =>(
            <TrendComp
             key={i}
             src={items.image[0]}
             alt={items.title}
             title={items.title} 
             description={items.description} 
             catogry={items.category}
             blog={items.blog}
    
            />
          ))
        }
        </div>
    </div>
  )
}

export default Catogrypage
