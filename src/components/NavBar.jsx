import React from 'react';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom'


function NavBar() {
 
    return (
      
        <div>
       
       <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <Link to="/">Hard Store</Link>
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
       <span className="sr-only"><Link to="/category/procesador">Procesadores</Link></span>
      </li>
      <li className="nav-item">
      <span className="sr-only"><Link to="/category/mother">Mother</Link></span>
      </li>
      <li className="nav-item">
      <span className="sr-only"><Link to="/detail">Detail</Link></span>
      </li>
       
    </ul>
    </div>
  
    <form className="form-inline my-2 my-lg-0 d-flex justify-content-end">
      <input className="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search"></input>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    
 
  <div className=""><Link to="/cart"><li><CartWidget/></li></Link> </div>
</nav>

        </div>
        
    )
}

export default NavBar
