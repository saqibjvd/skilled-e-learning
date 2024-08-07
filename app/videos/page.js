"use client";
import React, {useState} from "react";
import data from "../data/db.json"
import VideoCard from "../videocard/page";


 
export default function Videos(props) {

  const [videos, setVideos] = useState([]);
  const video = data;

  const handleDelete = (id) => {
    console.log("i am id", id)
    setVideos((prevVideosData) =>
    prevVideosData.filter((video) => video.id !== id)
  );
  console.log("i am clicked by id", id)
  };

 
  

    return (
      <div> 
    <div className="font-sans">
        <h1 className="m-4 text-4xl text-blue-900 md:text-5xl lg:text-6xl text-center">Video Dashboard</h1>
        <br></br>
        <h3 className="text-center text-orange-500">NOTE: You must login / Register to add video to this page</h3>

        <div>
        <h3 className="mt-4 text-center">Total Video Showing: <strong>{video.length}</strong></h3>

        </div>

        {/* view exisitng videos and user must login to addvideo */}
      
        <div className="mt-4 flex min-h-screen flex-col item-center justify-between p-24">
        {video &&
          video
            .sort((a, b) => b.rating - a.rating)
            .map((video) => {
              return (
               <VideoCard 
                  key={video.id}
                  video={video}
                  handleDelete={handleDelete}
                  // newVideos={video}
                  // handleSubmit={handleSubmit}
             />
              );
            })}
      </div>
       
    </div>
  
      </div>
    );
  }
  