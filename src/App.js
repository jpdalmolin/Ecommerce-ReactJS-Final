import './App.css';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListcontainer'
import {useState } from 'react';
import React from 'react';
import ItemDetailContainer from './container/ItemDetailContainer';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Cart from './components/Cart';
import UseNotiContext from './context/CartContext';


function Titulo(){
return(
<h2>Hard Store </h2>
)

}
function App() {
  const [contador, setContador]=useState(0)
  const [fecha, setFecha]=useState(null)
function handleCount(){
setContador(contador+1)
let date=Date();
setFecha(date)
}
  return (
    <UseNotiContext  key="uniqueId9593432545">
   <Router key="asdasdasda">
      <Titulo /> 
      <NavBar />
      <div key="uniqueId959324234233" className="App">
      {contador} <br/>
      {fecha}
      <button onClick={handleCount} >Hora</button>
        <Switch  key="uniqueId9593425243523">
        <Route  key="uniqueId9534543593" forceRefresh={true} exact path="/" >
     <ItemListContainer  key="uniqueId934534543593" greeting='Bienvenido a mi tienda' user='Usuario' />
     </Route>
    <Route  key="uniqueId959345433" forceRefresh={true} exact path={`/detail/:detalleId`} component={ItemDetailContainer}>
 
      </Route>
     <Route forceRefresh={true} exact path="/category/:categoryId" >
     <ItemListContainer   key="uniqueId9534253243243293" greeting='Bienvenido a mi tienda' user='Usuario' />
  
     </Route>
    
     <Route  key="uniqueId9593213123" forceRefresh={false} exact path={`/cart`} component={Cart}>
 
      </Route>
      
    </Switch>
   <Footer />
    </div>
    </Router>
    </UseNotiContext>
  
  );
}

export default App;