import React, {useState} from 'react'

export default function VideoCard(props) {

    const [rating, setRating] = useState(props.video.rating);

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
        
        <div key={props.video.id}>
          {/* <p className='p-4 text-center text-orange-500'>{props.video.title}</p> */}
        <div>
            <iframe className='m-auto w-100'
            width="420"
            height="250"
            src={props.video.url.replace("watch?v=", "embed/")}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title="skilled learning videos"
            allowFullScreen/>
        </div>
        <p className='p-4 text-center text-orange-500'>{props.video.title}</p>

          <p className='m-4 text-center'>RATINGS: {rating}</p>

          <div className="flex justify-evenly m-5 item-center">
            <button onClick={like} className="like">Like: 👍🏼{" "}</button>
            <button onClick={dislike} className="dislike">Dislike: 👎🏻{" "}</button>
            <button className="btn-del" onClick={() => handleDelete(props.video.id)}>Delete 🗑️</button>
          </div>
          <hr></hr>
        </div>
      </div>
  )
}
