import React, { useState ,useEffect} from 'react'
import './App.css';
import { SearchBar } from './component/SearchBar'
import { VideoList } from "./component/VideoList";
import { VideoDetail } from "./component/VideosDetail";
import { UseVideo } from './hooks/useVideos'

const App = () =>{
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [searchVideos, search ] =  UseVideo('building')

 

  useEffect(()=>{
    setSelectedVideo(searchVideos[0])
  },[searchVideos])

 return (
   <div className="ui container">
     <SearchBar onSubmit={search}/>
     <div className='ui grid'>
       <div className='ui row'>
       <div className='eleven wide column'>
       <VideoDetail video={selectedVideo} />
       </div>
        <div className='five wide column'>
        <VideoList 
        onVideoSelect={setSelectedVideo} 
        videos={searchVideos}/>
        </div>
       </div>
     </div>
   </div>
 );
} 

export default App;
