import React from 'react'
import './App.css';
import { SearchBar } from './component/SearchBar'
import youtube from './api/Youtube'
import { VideoList } from "./component/VideoList";
import { VideoDetail } from "./component/VideosDetail";


class App extends React.Component{

 state = {
    searchVideos:[],
    selectedVideo: null
  }

  componentDidMount =() =>{
    this.onSearchSumit('building')
  }
 
  onSearchSumit = async(term)=>{
    const response = await youtube.get('/search',{
      params:{
        q:term
      }
    })

    this.setState({
      searchVideos: response.data.items,
      selectedVideo:response.data.items[0]
    }) 
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo:video })
  }

  render(){
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSumit}/>
        <div className='ui grid'>
          <div className='ui row'>
          <div className='eleven wide column'>
          <VideoDetail video={this.state.selectedVideo} />
          </div>
           <div className='five wide column'>
           <VideoList 
           onVideoSelect={this.onVideoSelect} 
           videos={this.state.searchVideos}/>
           </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
