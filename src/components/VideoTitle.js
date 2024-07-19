

export const VideoTitle = ({title , overview}) => {
  return (
    <div className=" w-screen aspect-video pt-[10%] px-20 absolute text-white bg-gradient-to-r from-black">
   <h1 className="text-6xl font-bold ">{title}</h1>
   <p className="py-6 text-lg w-1/3 ">{overview}</p>
   <div className="my-4 md:m-0">
<button className=" bg-white text-black p-4 px-12 text-xl  rounded-lg hover:bg-opacity-80 ">
    ▶ Play
    </button>
<button className=" mx-2 bg-white text-black p-4 px-12 text-xl rounded-lg hover:bg-opacity-80 ">
    More Info
    </button>
</div>
    </div>
  )
}
