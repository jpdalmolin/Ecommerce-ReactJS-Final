
import React, {useContext} from 'react'
import { NotiContext } from '../context/CartContext'
import '../css/cartWidget.css'



function CartWidget() {
    
    const {size,cartList} = useContext(NotiContext)
  
    return (
        <div className="cartwidget">
            <button className="btn btn-secondary" type="button" id="dropdownMenuButton">
            CARRITO
            <span id="carritoCantidad" className="badge badge.light">{cartList.length > 0 ? size() : ''}</span> </button>
   
        </div>
    )
}

export default CartWidget
