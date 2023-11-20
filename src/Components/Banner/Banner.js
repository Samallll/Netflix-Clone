import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios';
import { API_KEY,imageUrl } from '../../Constants/constants';

function Banner() {
  const[bannerData,setBannerData] = useState()
  useEffect(()=>{
    axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      setBannerData(response.data.results[3]);
    })
  },[])
  return (
    <div className='banner'style={{backgroundImage:`url(${bannerData ? imageUrl+bannerData.backdrop_path: "" })`}}>
        <div className='content'>
            <h1 className='title'>{bannerData ? bannerData.title : ""}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'>{bannerData ? bannerData.overview : ""}</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
