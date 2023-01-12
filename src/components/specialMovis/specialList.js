import React from 'react';
import { useRef } from 'react';
import MovieCard from './movieCard.js';
import {Fragment} from 'react';
import './specialList.css';


export default function SpecialList(props) {
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
            <h3>ویژه 
            </h3>
            <span>مشاهده همه </span>
        </div>
       <div className='btn-right-left'>
        <button className='btn-right' onClick={() => scroll(300)}>RIGHT</button>  
        <button className='btn-left' onClick={() => scroll(-300)}>LEFT</button>
        </div>
            <div className='special-list' ref={ref}>
            {renderFarm()}
            </div>
            </div>
    </Fragment>
    )
}