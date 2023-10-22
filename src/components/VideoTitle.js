
const VideoTitle=({title,overview})=>{
    return(
        <div className=" pt-[20%] w-screen aspect-video   px-24 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-3xl font-bold">{title}</h1>
              <p className="py-5 text-sm w-1/4">{overview}</p>
              <div className="">
              <button className="bg-white text-black p-2 px-5 text-xl  text-bold rounded-lg hover:bg-opacity-80"> ▶ Play</button>
              <button className="mx-2 bg-gray-500 text-white p-2 px-6 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-90">More Info</button>
            </div>
        </div>
    );
};
export default VideoTitle;
