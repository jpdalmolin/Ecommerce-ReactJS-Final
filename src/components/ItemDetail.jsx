import React from 'react'
import ItemCount from './ItemCount'
import {useContext} from 'react'
import { NotiContext } from '../context/CartContext'
import '../css/itemDetail.css'
import Card from 'react-bootstrap/Card'
function ItemDetail({producto}) {
    
const {guardarItem} = useContext(NotiContext)
 function onAdd(cantidad){
   guardarItem(producto, cantidad)

  }
    return (
        <div>
<div className="container">
    <div className="row" id="ads">
    <div className="col-md-4">
        <div className="card rounded">
            <div className="card-image">
                <span className="card-notify-badge">{producto.nombre}</span>
                <span className="card-notify-year">2018</span>
                <img className="img-fluid" src={producto.image} alt="Alternate Text" />
            </div>
            <div className="card-image-overlay m-auto">
                <span className="card-detail-badge">New</span>
                <span className="card-detail-badge">${producto.precio}</span>
            </div>
            <Card.Text>
             Some quick example text to build on the card title and make up the bulk of
                 the card's content.
            </Card.Text>
  
            <div className="card-body text-center">
                <div className="ad-title m-auto">
                    <h5>{producto.nombre}</h5>
                </div>
                <ItemCount stock={5} initial={1} onAdd={onAdd}/>
            </div>
        </div>
    </div>
    </div>
  </div>
        </div>
    )
}
export default ItemDetail