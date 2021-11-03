import React from 'react';
import './menu_item.styles.scss'
import { withRouter } from 'react-router';

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) =>
(
   <div className={`${size} menu_item`} onClick={()=> history.push(`${match.url}${linkUrl}`)}>
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

export default withRouter(MenuItem);