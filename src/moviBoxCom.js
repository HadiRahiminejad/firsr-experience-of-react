
export default function Moviebox(props) {
    
    const {data} = props;
   
   
    function renderFarm() {
    return ( data.mostviewedvideos.map(function(item){
      
        return (
        <div className="movie-box banner">
           
            <img src={item.poster} alt="film-poster"/>
           
            <div className='hover-box'>
                <div className='type-product-year padding-top'>
                <span>{item.type}</span>
                <span>-</span>
                <span>{item.product_year}</span>
                </div>
                <div className='user-rate padding-top'>{item.user_rate}</div>
                <div className='imdb padding-top'>{item.imdb}</div>
                <div className='subtitle padding-top'>{item.subtitle}</div>
            </div>
            <div className='title'>{item.title}</div>
        </div>
        ) 
    })
)
    }
    return  <div className="special">{renderFarm()}</div>;
}