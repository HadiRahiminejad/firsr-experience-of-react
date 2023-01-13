import React from 'react';
import { useRef } from 'react';
import MovieCard from './movieCard.js';
import {Fragment} from 'react';
import './newList.css';


export default function NewList(props) {
    const {data} = props;
    const ref = useRef(null);
   
const scroll = (scrollOffset) => {
 ref.current.scrollLeft += scrollOffset;
};
    function renderFarm() {
        return data.map((item, i) => {
        return <MovieCard data={item} key={i} />
        })
    }
    return (
        <Fragment>
        <div className='wrapper' >
        <div className='movies-list-header'>
            <h3>تازه های نماوا 
            </h3>
            <span>مشاهده همه </span>
        </div>
       
       <div className='btn-right-left'>
        <button className='btn-righ' onClick={() => scroll(300)}>RIGHT new</button>  
        <button className='btn-lef' onClick={() => scroll(-300)}>LEFT new</button>
        </div>
            <div className='new-movies-list' ref={ref}>
            {renderFarm()}
            </div>
            </div>
          
    
    </Fragment>
    )
}