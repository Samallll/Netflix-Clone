import React, { useState,useEffect } from 'react'
import './RowPost.css'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../Constants/constants'
import YouTube from 'react-youtube'

function RowPost(props) {
    const[urlId,setUrlId] = useState('')
    const[movies,setMovies] = useState([])
    useEffect(()=>{
        axios.get(props.url).then((response)=>{
            setMovies(response.data.results)
        }).catch(err=>alert("Network Error"))
    },[props.url])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 0,
        },
      };
    
    const handleImgClick = (id) => {
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
            if(response.data.results.length!==0){
                setUrlId(response.data.results[0])
            }
            else{
                console.log("empty array")
            }
        })
    }

  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
            {
                movies.map((obj,index)=>
                    <img key={index} onClick={()=>handleImgClick(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`} />
                )
            }
        </div>
        {urlId && <YouTube opts={opts} videoId={urlId.key}/>}
    </div>
  )
}

export default RowPost
