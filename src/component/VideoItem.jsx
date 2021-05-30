import React from 'react'
import './videoItem.css'

export const VideoItems = ({video,onVideoSelect}) => {

   return(
       <div onClick={()=>onVideoSelect(video)} className=" video-item  item">
          <img alt={video.snippet.title} className='ui image' src={video.snippet.thumbnails.medium.url} alt="" />
          <div className="content">
         <div className="header">
         {video.snippet.title}
         </div>
          </div>
       </div>
   )
}