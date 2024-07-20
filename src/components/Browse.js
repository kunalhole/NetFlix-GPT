import { useEffect } from "react"
import { useDispatch } from "react-redux"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import { API_OPTIONS } from "../utils/contants"
import { addNowPlayMovies } from "../utils/moviesSlice"
import Header from "./Header"

const Browse = () => {
  useNowPlayingMovies()
  return (
    <div>
      <Header />
    </div>
  )
}

export default Browse
