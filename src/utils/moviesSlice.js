import { createSlice } from "@reduxjs/toolkit"

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayMovies: (state, action) => {
      state.nowPlayMovies = action.payload
    },
    addTrailer: (state, action) => {
      state.trailerVideo = action.payload
    },
  },
})

export const { addNowPlayMovies, addTrailer } = moviesSlice.actions
export default moviesSlice.reducer
