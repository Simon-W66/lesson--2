import React from 'react'

import SHOP_DATA from "./shop.date.js"
import PreviewColection from "../../components/preview-collection/preview-collection.component"
class ShopPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }
    render(){
        const {collections} = this.state;
        return(
            <div className="shop-page">
                {
                   collections.map(({id, ...otherCollectionProps}) => (
                       <PreviewColection key={id} {...otherCollectionProps}/>
                   )) 
                }
            </div>
        )
    }
}
 
export default ShopPage;