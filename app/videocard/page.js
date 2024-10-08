import React, {useState} from 'react'

export default function VideoCard({video, handleDelete}) {
 
    const [rating, setRating] = useState(video.rating);

    function like() {
        setRating(rating + 1);
      }
    
      function dislike() {
        if(rating <= 0) {
         return
        }
        setRating(rating - 1);
      } 

  return (
    <div className='mt-4'>
        
        <div key={video.id}>
          {/* <p className='p-4 text-center text-orange-500'>{props.video.title}</p> */}
        <div>
            <iframe className='m-auto w-100'
            width="420"
            height="250"
            src={video.url.replace("watch?v=", "embed/")}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title="skilled learning videos"
            allowFullScreen/>
        </div>
        <p className='p-4 text-4xl text-center text-amber-300'>{video.title}</p>

          <p className='m-4 text-center'>RATINGS: {rating}</p>

          <div className="flex justify-evenly m-5 item-center">
            <button onClick={like} className="like">Like: 👍🏼{" "}</button>
            <button onClick={dislike} className="dislike">Dislike: 👎🏻{" "}</button>
            <button className="btn-del" onClick={() => handleDelete(video.id)}>Delete 🗑️</button>
          </div>
          <hr></hr>
        </div>
      </div>
  )
}
