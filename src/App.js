//import './App.css';
import './mosca.css';
//import './menu.js';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links a");
  
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
  
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.5
          }s `;
        }
      });
      burger.classList.toggle("toggle");
    });
    //
  };
  
  document.addEventListener("DOMContentLoaded", () => {
    navSlide();
  });
  
  return (
    <div className="App">
      <header>
        <h1>Eliton Trindade Gomes</h1>
        <p>Mestrando em Física Teórica</p>
      </header>
      <Navbar />
 
      <main>
              
        <div class="container">
          
            <Outlet/>
        
        </div>  
      </main>
      <footer>
        &copy; 2023 Eliton Trindade Gomes. Todos os direitos reservados.
      </footer>
    </div>
  );
}

export default App;
