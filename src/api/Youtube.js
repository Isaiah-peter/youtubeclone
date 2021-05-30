import axios from 'axios';
const KEY = 'AIzaSyCXNlW6QDdH4WDND2dKWDa7hB5nRG41GjE'



export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
     part:'snippet',
     maxResult:5,
     key:KEY
    },
})