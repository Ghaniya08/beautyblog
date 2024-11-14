import Catogrypage from "./CategoryList";

const Catogry = ({params} : {params:{category:string}}) =>{
    return (
        <div className="mt-[50px]  mb-[100px]">
          <Catogrypage params={params}/>
        </div>
    )
}

export default Catogry;