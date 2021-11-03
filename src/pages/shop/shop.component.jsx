import {React,useState} from "react";
import SHOP_DATA from "./shop.data";
import PreviewCollection from "../../components/preview_collection/preview_collection.component";


const ShopPage= () =>
{
 
    const [collections] = useState(SHOP_DATA)

    return(
        <div>
            {collections.map((collection)=> 
            
              <PreviewCollection key={collection.id} title={collection.title} items={collection.items} />
            )}
        </div>
    )
     
   
}

export default ShopPage;