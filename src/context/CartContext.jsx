import { createContext, useState } from "react";
import '../css/itemDetail.css'

export const NotiContext = createContext()//estados y funciones sean globales para todos. 

export default function UseNotiContext({children}){
    
    const [cartList, setCartList] = useState([])// {item: item, cantidad: cantidad}
   
    const guardarItem = (producto, cantidad) => {
        if(isInCart(producto.id)){
            let index = cartList.findIndex((e) => e.item.id === producto.id)
            const oldQt = cartList[index].quantity
            cartList.splice(index, 1)
            setCartList([...cartList, {'item': producto, 'quantity': cantidad + oldQt}])
        }else{
            setCartList([...cartList, {'item': producto , 'quantity': cantidad }])
        }
 }
    const isInCart = (id) => {
        return cartList.find((item)=>{
            if(item.item.id !== id){
                return false
            }
            else{
                return item.item.id
            }
        })
    }
    

    const removeFromCart = (itemId) =>{
        cartList.splice(
            cartList.findIndex(( item => item.id !== itemId)), 1)   
        setCartList([...cartList])
    }
    
    const price =()=>{
       return cartList.reduce((acum, valor)=>(acum + (valor.quantity*valor.item.precio)), 0) //[item.cantidad, ]
  }
    const size =()=>{
        return cartList.reduce((acum, valor)=> acum + valor.quantity, 0) //[item.cantidad],0) 

    }
    function cleanList (){
        setCartList([])
    }
    
    return(
        <NotiContext.Provider value={{
            cartList,
            removeFromCart,
           price,
            size,
            guardarItem,
            cleanList,
            
        }}>
            {children}
        </NotiContext.Provider>
    )
}