
import { Fragment } from "react";
import './movieCard.css';
export default function MovieCard(props) {
    const {data} = props;
   
    // console.log( data);
    const {title, poster, type, product_year, user_rate, imdb, subtitle} = data;
    return (
        <Fragment>
     
            <div className="movie-card">
                <img className="poster" src={poster} alt={title} />
                <div className="info-hover">
                    <div className="type-product-year">
                        <span>{type}</span>
                        <span>-</span>
                        <span>{product_year}</span>
                    </div>
                    <div calssName="user-rate">
                         <img src="" /> 
                        <span>{user_rate}</span>
                    </div>
                    <div className="imdb">
                         <img src="" />
                            <span>{imdb}</span>
                       
                    </div>
                    <div className="subtitle-or-dubbing">
                        <img src="" />
                        <span>{subtitle}</span>
                    </div>
                </div>
                <h5>{title}</h5>
            </div>
        
     
  
</Fragment>
      
    )
}