import { detailblog } from '@/app/utilities/type'
import { createSlice } from '@reduxjs/toolkit'




// Define the initial state using that type
const initialState: detailblog[] = []

export const BlogdetaSlice = createSlice({
  name: 'Blogdeta',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    
  },
})

export const {  } = BlogdetaSlice.actions


export default BlogdetaSlice.reducer
