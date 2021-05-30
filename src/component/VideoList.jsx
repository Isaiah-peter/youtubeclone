import React from 'react'
import { VideoItems } from './VideoItem'

export const VideoList = ({videos , onVideoSelect}) => {
  const renderList =  videos.map((video)=>{
    return <VideoItems key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />
   })
   return(
       <div className="ui relaxed divided list">
          {renderList}
       </div>
   )
}