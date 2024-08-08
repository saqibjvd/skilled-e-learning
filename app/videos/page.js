"use client";
import React, {useState} from "react";
import data from "../data/db.json"
import VideoCard from "../videocard/page";


export default function Videos() { 
   const video = data;
   const [videos, setVideos] = useState(video);
 
 
  const handleDelete = (id) => {
     setVideos((videos) =>
    videos.filter((video) => video.id !== id)
    )
    };
    
   
 
    return (
      <div> 
        <div className="font-sans">
        <h1 className="m-4 text-4xl text-blue-900 md:text-5xl lg:text-6xl text-center">Video Dashboard</h1>
        <div>
        </div>
        <h3 className="text-center text-orange-500">NOTE: You must login / Register to add video to this page</h3>
        <h3 className="mt-4 text-center">Total Video Showing: <strong>{video.length}</strong></h3>
        </div>

        {/* view exisitng videos and user must login to addvideo */}
      
        <div className="mt-4 flex min-h-screen flex-col item-center justify-between p-24">
        {videos &&
          videos
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
    );
  }
  