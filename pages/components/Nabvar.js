
import { useEffect } from 'react';
import Link from 'next/link';
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

  <section className="navigation">
  <div className="nav-container">
    <div class="brand">
      <a href="#!">EMIT</a>
    </div>
    <nav>
  <div className="nav-mobile">
    <a id="nav-toggle" href="#!"><span></span></a>
  </div>
  <ul className="nav-list">
    <li><a href="#!">Home</a></li>
    <li><a href="#!">Media</a></li>
    <li>
      <a href="#!">Discover</a>
      <ul className="nav-dropdown">
        <li><a href="#!">Mission</a></li>
        <li><a href="#!">News</a></li>
        <li><a href="#!">Learn</a></li>
      </ul>
    </li>
    <li><a href="#!">About Us</a></li>
    <li><a href="#!">Contact</a></li>
    <li><Link className='usa-button' href='/api/auth/signin'>Login/Signup</Link></li>

  </ul>
</nav>
    </div>
</section>

    );
}

