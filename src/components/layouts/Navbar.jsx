import { useState } from 'react';
import { FaBars } from 'react-icons/fa'; // Import ikon hamburger
import logo from '../../assets/logo.svg';
import NavLink from '../elements/NavLink';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='px-4 sm:px-8 md:px-16 py-4 border-b border-gray-300'>
      <nav className='flex flex-col sm:flex-row gap-8'>
        <div className='flex justify-between items-center w-full'>
          <img src={logo} alt='Dimas Rizky Portfolio' className='h-8 sm:h-10 md:h-12' />

          <div className='cursor-pointer sm:hidden' onClick={toggleMenu}>
            <FaBars className='w-6 h-6' />
          </div>
        </div>

        <div className={`sm:flex items-center ${isMenuOpen ? 'flex' : 'hidden'}`}>
          <NavbarItems />
        </div>
      </nav>
    </header>
  );
};

const NavbarItems = () => {
  return (
    <ul className='flex flex-col sm:flex-row gap-2 sm:gap-4 md:gap-8'>
      <li><NavLink to='#' id='about'>About</NavLink></li>
      <li><NavLink to='#' id='experience'>Experience</NavLink></li>
      <li><NavLink to='#' id='projects'>Projects</NavLink></li>
      <li><NavLink to='#' id='awards'>Awards</NavLink></li>
    </ul>
  );
};

Navbar.NavbarItems = NavbarItems;

export default Navbar;
