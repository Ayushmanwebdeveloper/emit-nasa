
import { useEffect } from 'react';
export default function Navbar(){
    useEffect(() => {
        const navLinks = document.querySelectorAll('nav ul li > a:not(:only-child)');
        const navDropdowns = document.querySelectorAll('.nav-dropdown');
        const navToggle = document.getElementById('nav-toggle');
      
        navLinks.forEach((link) => {
          link.addEventListener('click', (e) => {
            const siblingDropdown = link.nextElementSibling;
            siblingDropdown.style.display = siblingDropdown.style.display === 'block' ? 'none' : 'block';
            
            navDropdowns.forEach((dropdown) => {
              if (dropdown !== siblingDropdown) {
                dropdown.style.display = 'none';
              }
            });
            
            e.stopPropagation();
          });
        });
      
        document.addEventListener('click', () => {
          navDropdowns.forEach((dropdown) => {
            dropdown.style.display = 'none';
          });
        });
      
        navToggle.addEventListener('click', () => {
          const navUl = document.querySelector('nav ul');
          navUl.style.display = navUl.style.display === 'block' ? 'none' : 'block';
      
          navToggle.classList.toggle('active');
        });
      }, []);

    return(

        <section class="navigation">
  <div class="nav-container">
    <div class="brand">
      <a href="#!">🍀 Clover Clothing</a>
    </div>
    <nav>
  <div class="nav-mobile">
    <a id="nav-toggle" href="#!"><span></span></a>
  </div>
  <ul class="nav-list">
    <li><a href="#!">Home</a></li>
    <li><a href="#!">Shop</a></li>
    <li>
      <a href="#!">Services</a>
      <ul class="nav-dropdown">
        <li><a href="#!">Web Design</a></li>
        <li><a href="#!">Web Development</a></li>
        <li><a href="#!">Graphic Design</a></li>
      </ul>
    </li>
    <li><a href="#!">About Us</a></li>
    <li><a href="#!">Contact</a></li>
  </ul>
</nav>
    </div>
</section>

    );
}