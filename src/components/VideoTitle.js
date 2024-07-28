const VideoTitle = ({ title, overview }) => {
  return (
    <div className="px-24 pt-[20%]  absolute bg-gradient-to-r from-black w-screen aspect-video text-white">
      <h1 className="font-semibold text-6xl">{title}</h1>
      <p className="w-1/4 mt-5 mb-5">{overview}</p>
      <div className="space-x-5">
        <button className="px-6 py-3 rounded-md bg-white text-black font-semibold hover:bg-opacity-70">
          ▶ Play
        </button>

        <button className="px-6 py-3 rounded-md font-semibold bg-gray-500 bg-opacity-50">
          More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle
