import './banner.css';
import  wednsday from "./images/wednesday.jpg";
import anten from "./images/anten.jpg";
import garcia from "./images/garcia.jpg";
import roozi from "./images/Roozi-Roozegari-Merikh.jpg";
import s1923 from "./images/s1923.jpg";
import s2521 from "./images/s2521.jpg";
import zanan from "./images/shabake-zanan.jpg";
import {Fragment} from 'react';
import React from 'react';
export default function Banner() {
     const images = [
        {
        image: wednsday,
        title: "ونزدی",
    }, 
    {
        image: anten,
        title: "آنتن",
    }, 
    {
        image: garcia,
        title: "گارسیا!",
    }, 
    {
        image: roozi,
        title: "روزی روزگاری در مریخ",
    },
    {
        image: s1923,
        title: "1923",
    },
    {
        image: s2521,
        title: "بیست و پنج بیست و یک",
    },
    {
        image: zanan,
        title: "شبکه مخفی زنان",
    },
    ];


    
        function renderFarm(){
        let i = Math.floor(Math.random()* 8);
        console.log(i)
        return (
         <div class="slider">
     <a href="/series/192180-%DA%A9%D9%84%D8%A7%DB%8C%D8%AF%D8%B3%DA%A9%D9%88%D9%BE">
     <img class="slider-img" src={images[i]['image']} alt={images[i]['title']} title={images[i]['title']} key={i}/>
     </a>
     <div class="">
      <h2 class="">
     {/* <a href="/series/192180-%DA%A9%D9%84%D8%A7%DB%8C%D8%AF%D8%B3%DA%A9%D9%88%D9%BE" key={i}>{images[i]['title']}</a> */}
     </h2> 
     </div>
     <div class="">
     <a class="" href="/series/192180-%DA%A9%D9%84%D8%A7%DB%8C%D8%AF%D8%B3%DA%A9%D9%88%D9%BE">
     <div class="">
    {/* <span class="">قسمت ها</span>  */}
     </div>
     </a>
     </div>
     </div>
         
       ) }
   function myInterval() {
    return setInterval(renderFarm(), 5000)
   }
    return (<Fragment>
      {renderFarm()}
        </Fragment>
    )
}