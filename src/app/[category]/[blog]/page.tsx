import React from 'react'
import BlogsMain from './BlogsMain'

const page = ({params} : {params:{blog:string}}) => {
  return (
    <div>
      <BlogsMain params={params}/>
    </div>
  )
}

export default page
