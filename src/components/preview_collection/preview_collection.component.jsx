import './preview_collection.styles.scss'
import CollectionItems from '../collection_item/collection_item.component';

const PreviewCollection = ({title,items}) =>
{
   return(
    <div className='collection_preview'>
        <h1 className='preview_title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items.filter((item,index) => index < 4 )
            .map((item) =>   <CollectionItems key={item.id} item={item} />
            )}
        </div>
    </div>
   )
}

export default PreviewCollection;