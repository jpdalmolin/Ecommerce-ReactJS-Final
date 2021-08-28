import React from 'react'
import {useParams} from 'react-router-dom'
import ItemList from './ItemList';
import { useEffect,useState } from 'react';
import { getFirestore } from '../servicios/firebaseService';

const ItemListContainer = (props) =>{
    const[itemList,setItemList]=useState([])
    const{categoryId}=useParams()
useEffect(() => {
  
    if(categoryId===undefined){
    const dbQuery= getFirestore()
    dbQuery.collection('items').get()
                               //where('precio', '>=',14000)
    .then(resp=> setItemList(resp.docs.map(ite=>({...ite.data(),id:ite.id}))))
    }else{
        const dbQuery= getFirestore()
        dbQuery.collection('items').where('categoria','==',categoryId).get()
                                   //where('precio', '>=',14000)
        .then(resp=> setItemList(resp.docs.map(ite=>({...ite.data(),id:ite.id}))))

        
    }
    },[categoryId])

    return (
        <div>
            <div className="banner">
                <h1 className='greeting'>{props.greeting}</h1>
                <h2 className='user'>{props.user}</h2>


              
              <ItemList key={categoryId} productos={itemList}/>
            </div>
        </div>
    )
}

export default ItemListContainer
