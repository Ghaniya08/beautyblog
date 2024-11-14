import { categoryBlog } from '@/app/utilities/mock'
import { cateblog } from '@/app/utilities/type'
import { createSlice } from '@reduxjs/toolkit'




// Define the initial state using that type
const initialState: cateblog[] = categoryBlog
  

export const BlogcatoSlice = createSlice({
  name: 'Blogcato',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    
  },
})

export const {  } = BlogcatoSlice.actions


export default BlogcatoSlice.reducer