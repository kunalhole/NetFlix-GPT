import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/contants"
import { addNowPlayMovies } from "../utils/moviesSlice"

const useNowPlayingMovies = () => {
  const dispatch = useDispatch()
  const getMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    )
    const json = await data.json()
    dispatch(addNowPlayMovies(json.results))
  }

  useEffect(() => {
    getMovies()
  }, [])
}

export default useNowPlayingMovies
