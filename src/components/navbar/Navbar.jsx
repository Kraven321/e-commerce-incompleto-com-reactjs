import React, { useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom'
const Navbar = () => {

  //TENHO QUE COMENTAR ESSE CODIGO, PROXIMA VEZ QUE EU ABRILO- PARA EU ENTENDER TODOS OS CODIGOS E FUNÇÕES QUE EU CRIAR//

  //esse useState serve para controlar o link que está ativo naquele momento, se estivermos na seção "shop" ele terá uma estilização 
  //e se clicarmos no link "mens" ele deixará de aplicar o estilo de ativo no shop e irá para o "mens" e assim por diante.//
const [menu, setMenu] = useState ("shop")

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="logo" />
            <p>REIS STYLUS</p>
        </div>  
      {/* essa função onclick serve para darmos a funcionalidade do clique nos links do menu, essa função
       chama o setMenu e o setMenu faz a troca do link ativo  no menu */}
       {/* se menu for "shop" e for verdadeiro ele terá uma estilização, se não for verdadeiro quer dizer que o link ativo é algum outro
       e o responsável por fazer essa troca de estado no menu é o setMenu.*/}
        <ul className="nav-menu">
          {/* Tive que adicionar o style diretamente no link, pois quando eu coloquei minha Li como um link 
          ele não aplicou a estilização que eu coloquei em "nav-menu (no caso, não aplicou o text-decoration:none e a cor)*/}
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none', color:'#626262'}} to="/">Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none', color:'#626262'}} to="/mens">Men</Link>{menu === "mens" ? <hr /> : <></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none', color:'#626262'}} to="/womens">Women</Link>{menu === "womens" ? <hr /> : <></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none', color:'#626262'}} to="/kids">Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
        </ul>
        <div className="nav-login-cart">
           <Link to="/login"><button>Login</button></Link> 
            <Link to="/cart"><img src={cart_icon} alt="cart" /></Link>
            <div className="nav-cart-count">0</div>
        </div>
      
    </div>
  )
}

export default Navbar
