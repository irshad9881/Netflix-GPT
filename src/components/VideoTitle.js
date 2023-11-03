
const VideoTitle=({title,overview})=>{
    return(
        <div className=" pt-[20%] w-screen aspect-video px-4 md:px-24 absolute text-white bg-gradient-to-r from to-black">
            <h1 className=" my-20 md:my-0 text-md md:text-3xl md:font-bold">{title}</h1>
              <p className="hidden md:inline-block py-5 text-sm w-1/4">{overview}</p>
              <div className="">
              <button className="relative -top-20 md:my-0 md:fiexd md:top-0 bg-white text-black py-1 md:py-2 px-1.5 md:px-5 text-sm md:text-xl  text-bold rounded-lg hover:bg-opacity-80"> ▶ Play</button>
              <button className=" hidden md:inline-block mx-2 bg-gray-500 text-white p-2 px-6 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-90">More Info</button>
            </div>
        </div>
    );
};
export default VideoTitle;
