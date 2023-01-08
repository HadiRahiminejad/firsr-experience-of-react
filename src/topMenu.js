import './topMenu.css';



export default function Head(props) {
    const {dataHeader} = props;
  
    function renderFarmHeaderRight() {
            return ( dataHeader.bothHeader.map(function(item) {
                return (
                <ul className="ul-right">
                            <li>{item.namava}</li>
                            <li>{item.home}</li>
                            <li>{item.movies}</li>
                            <li>{item.categories}</li>
                            <li>{item.new}</li>
                            <li>{item.kids}</li>
                            <li>{item.namava_magezin}</li>
                        </ul>
                        )
            }) 
        )}
        function renderFarmHeaderLeft() {
            return ( dataHeader.bothHeader.map(function(item) {
                return (
                   
                <ul className="ul-left">
                            <li><img src={item.searchIcon} alt='search'/></li>
                            <li>{item.buy_sub}</li>
                            <li className='btn-enter'>{item.intrance}</li>
                          
                        </ul>
                        )
            }) 
        )}                                                                      
                        
    return (  
    <div className='all-header'>
       
        {renderFarmHeaderRight()}
      
      
        {renderFarmHeaderLeft()}
      
    </div> 
    )
}