import React from "react";

import './collection_item.styles.scss'

const CollectionItems = ({item}) =>
{

 return(
  <div className='collection_item'>
      <div className='item_image' style={{backgroundImage:`url(${item.imageUrl})`}}></div>
      <div className='collection_footer'>
          <span className='item_name'>{item.name}</span>
          <span className='item_price'>${item.price}</span>
      </div>
  </div>)
}

export default CollectionItems