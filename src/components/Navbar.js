import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav>
          <div class="logo">
            <h4>***</h4>
          </div>
          
          <ul class="nav-links">
            <Link to="/">Início</Link>
            <Link to="/pesquisa">Pesquisa</Link>
            <Link to="/publicacoes">Publicações</Link>
            <Link to="/contato">contato</Link> 
          </ul>
          
          <div class="burger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
          </div>
        </nav>
    );
}
export default Navbar;