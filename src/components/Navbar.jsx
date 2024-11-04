// src/components/Navbar.jsx
import React from "react";
import "../styles/style.css";

const Navbar = () => {
  // const [activeSection, setActiveSection] = useState('home');

  // Function to track scrolling and update the active section
  // const handleScroll = () => {
  //   const sections = document.querySelectorAll('.section');
  //   let currentSection = 'home';

  //   sections.forEach((section) => {
  //     const sectionTop = section.offsetTop;
  //     if (window.scrollY >= sectionTop - 60) { // Adjust based on your header height
  //       currentSection = section.getAttribute('id');
  //     }
  //   });

  //   setActiveSection(currentSection);
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <nav className="navbar">
      <div className="oval-background">
        <ul className="nav-links">
          <li><a href="#home">home</a></li>
          <li><a href="#partners">partners</a></li>
          <li><a href="#team">team</a></li>
        </ul>
      </div>
    </nav>
  );
};


export default Navbar;
