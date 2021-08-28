import React, {useState,useEffect} from 'react'
import ItemDetail from '../components/ItemDetail'
import{useParams} from 'react-router-dom'
import { getFirestore } from '../servicios/firebaseService'


function ItemDetailContainer() {
    const [item,setItem]=useState([])
    const{detalleId}=useParams()
useEffect(() => {
   
    const dbQuery= getFirestore()
     dbQuery.collection('items').doc(detalleId).get()
                                //where('precio', '>=',14000)
     .then(resp=> setItem({id:resp.id, ...resp.data()}))
    
},[detalleId])

return (
    <div key="uniqueId93595">
        
       
        <ItemDetail key={detalleId} producto={item}/>
       
        </div>
    )
}
export default ItemDetailContainer