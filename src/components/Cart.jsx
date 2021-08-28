import React, {useState, useContext} from 'react'
import { NotiContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import firebase from 'firebase'
import { getFirestore } from '../servicios/firebaseService'


function Cart() {
    const {cartList,price,removeFromCart,cleanList} = useContext(NotiContext)
         
        const [buyer,setBuyer]=useState({})
        const order={buyer, item:cartList , date: firebase.firestore.Timestamp.fromDate(new Date()),total:(price())}

        const handlerChange =(evt)=>{
            setBuyer({
                ...buyer,
                [evt.target.name]: evt.target.value
            })}
            const handlerSubmit =(evt)=>{
                evt.preventDefault()
                const db=getFirestore()
    
                db.collection('order').add(order)
                
                
            }

    return  (
        <>
        <br />
        <br />
      <Link to={`/`}><Button variant="primary">Volver</Button></Link>
         {(cartList.length > 0) ?
           cartList.map(item =>(
               <>
                <div className="row" key={item.item.id}> 
                <p className="col"key="uniqueId9595">{item.item.id}</p> 
                    <p className="col" key="uniqueId9593">{item.item.nombre}</p> 
                    <p className="col" key="uniqueId959222">{item.item.categoria}</p> 
                    <p className="col" key="uniqueId953333">{item.quantity}</p>  
                    <p className="col" key="uniqueId959333333"><img className="img-fluid" src={item.item.image} alt="Alternate Text" /></p>  
                    <p className="col" key="uniqueId95921313">{item.item.precio}</p>  
                      
                    <button className="btn btn-danger" onClick={removeFromCart}>X</button>
                </div>
               
                <hr/>
               
                </>))   
                 : <h3>No hay items en el carrito
                 </h3>             }
                {cartList.length>0 ?
                <>
                <h4  key="uniqueId9324234593">Su total es : ${price()}</h4>  <button className="btn btn-danger" onClick={cleanList}>X</button></>:'' }
                {cartList.length>0 ?
                <form 
                    onChange={handlerChange}
                    onSubmit={handlerSubmit}
                >
                    <input 
                        type="text"
                        placeholder='nombre'
                        name='name'
                        value={order.name}
                    />
                    <input 
                        type="text"
                        placeholder='ingresar cel'
                        name='phone'
                        value={order.phone}
                    />
                    <input 
                    id='emailV'
                        type="text"
                        placeholder='ingresar email'
                        name='email'
                        value={order.email}
                    />
                      <input 
                      id='emailD'
                        type="text"
                        placeholder='Reingresar email'
                        name='reingresarEmail'
                        value={order.reingresarEmail}
                        
                    /> <button disabled={order.buyer.email !== order.buyer.reingresarEmail} >Confirmar Compra</button>
                   
                    
                </form>
: ""}
        </>
    )
}
export default Cart