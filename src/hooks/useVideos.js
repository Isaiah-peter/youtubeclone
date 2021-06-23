import {useState, useEffect} from 'react'
import youtube from '../api/Youtube'

export const UseVideo = (defaultSearchTerm) =>{
    const [searchVideos ,setSearchVideos] = useState([])

    useEffect(()=>{
        search(defaultSearchTerm)
       },[defaultSearchTerm])

       const search = async(term)=>{
        const response = await youtube.get('/search',{
          params:{
            q:term
          }
        })
     
        setSearchVideos(response.data.items)
        
      }

      //return { searchVideos, search}
      return [ searchVideos, search]

}