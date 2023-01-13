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
// function randomI(){
   
//     console.log(i);
//     // random(i);
// }

    function random(){
        let i = Math.floor(Math.random()* 9);
        return (
         <div class="slider">
     <a href="/series/192180-%DA%A9%D9%84%D8%A7%DB%8C%D8%AF%D8%B3%DA%A9%D9%88%D9%BE">
     <img class="Component-logoImage-0-1-245" src={images[i]['image']} alt={images[i]['title']} title={images[i]['title']} key={i}/>
     </a>
     <div class="Component-withMarginBottom-0-1-286">
     {/* <h2 class="Component-title-0-1-274 Component-title-d64-0-1-290 inline-block">
     <a href="/series/192180-%DA%A9%D9%84%D8%A7%DB%8C%D8%AF%D8%B3%DA%A9%D9%88%D9%BE" key={i}>{images[i]['title']}</a>
     </h2> */}
     </div>
     <div class="t-actions-0-1-217 t-actions-d62-0-1-239 t-actions-0-1-192 t-actions-d62-0-1-214">
     <a class="t-boxButton-0-1-218 t-boxButton-0-1-193" href="/series/192180-%DA%A9%D9%84%D8%A7%DB%8C%D8%AF%D8%B3%DA%A9%D9%88%D9%BE">
     <div class="Component-root-0-1-45 Component-neutralRoot-0-1-57 Component-alignCenter-0-1-69">
     {/* <span class="Component-title-0-1-47 Component-neutralTitle-0-1-58">قسمت ها</span> */}
     </div>
     </a>
     </div>
     </div>
         )

}
function myTimeout() {setTimeout(random, 1000)};
function renderFarm() {
   myTimeout();
    return (<Fragment>
    {random()}
  
    </Fragment>)
};
    return (<Fragment>
        {renderFarm()}
        { clearTimeout(myTimeout)}
        </Fragment>
    )
}