import { configureStore } from '@reduxjs/toolkit'
import  BlogcatoSlice  from './features/blogcat'
import  BlogdetaSlice  from './features/blogdet'
// ...

export const store = configureStore({
  reducer: {
    categoryBlog:BlogcatoSlice,
    detailBlog:BlogdetaSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch