import React from 'react';
import './menu_item.styles.scss'

const MenuItem = ({title, imageUrl, size}) =>
(
   <div className={`${size} menu_item`}>
       <div className='background_image' 
        style={{backgroundImage: `url(${imageUrl})`}} > 
       </div>
       <div className='content'>
          <h1 className='title'>
            {title}
          </h1>
          <span className='subTitle'> Shop</span>
       </div>
  </div>
)

export default MenuItem;