import { API_OPTIONS } from "../utils/contants"
import { useDispatch } from "react-redux"
import { addTrailer } from "../utils/moviesSlice"
import { useEffect } from "react"

const useMovieTrailer = (id) => {
  const dispatch = useDispatch()
  const fetchMovieTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_OPTIONS
    )
    const json = await data.json()
    const filterData = json.results.filter((video) => video.type == "Trailer")
    const trailer = filterData.length ? filterData[0] : json.results[0]
    console.log(trailer)
    dispatch(addTrailer(trailer))
  }
  useEffect(() => {
    fetchMovieTrailer()
  }, [])
}

export default useMovieTrailer
