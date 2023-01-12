import './topMenu.css';
import search from './images/search-sm-svgrepo-com.svg';
export default function Head() {
   
  const menuData = [
   
    {
        title: 'خانه',
        link: '#',
    },
    {
        title: 'فیلم ها',
        link: '#',
    },
    {
        title: 'سریال ها',
        link: '#',
    },
    {
        title: 'دسته بندی',
        link: '#',
    },
    {
        title: 'تازه ها',
        link: '#',
    },
    { 
        title: 'کودکان',
        link: '#',
    },
    {
        title: 'نماوا مگ',
        link: '#',
    },    
    ];
    
    function renderFarmHeaderRight() {
            return ( menuData.map(({link, title}, i) => {
                return (
                 
                     <ul className='ul'> 
                        <li className='li' key={i} >
                            <a  href={link}>{title}</a>
                        </li>
                        </ul>
                        )
            }) 
        )}
                                                                       
    return (  
        <div className='all-header'>
           
                <div className='header-box'>
                    <div className='logo-ul-right'>
                        <h3>نماوا</h3>
                  
                    <div className='ul-right'>
                       {renderFarmHeaderRight()}
                       </div>
                       </div>
                    <div className='ul-left'>
                        <ul>   
                    <li>
                       <img src={search} alt='search' />
                        </li>
                        <li>خرید اشتراک</li>
                        <li className='btn-enter'>ورود/ثبت نام</li>
                        </ul>
                </div>
            </div>
        </div>
    
    )
}
  
    