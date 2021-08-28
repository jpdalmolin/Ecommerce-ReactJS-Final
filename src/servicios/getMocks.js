import { productos } from "../components/productos"




const task=new Promise((res)=>{
    
    res(productos)
    
}, 2000)


export const getMocks=()=>{
    return(
        task
    )
}