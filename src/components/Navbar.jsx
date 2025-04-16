import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import styles from './Navbar.module.css';
import { FaBars, FaTimes } from 'react-icons/fa'; // FontAwesome icons

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className={styles.navbar}>
            <div className={styles.navLogo}>
                <img src={logo} alt="Logo" />
            </div>
            <button className={styles.hamburger} onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>
            <div className={`${styles.navLinks} ${isOpen ? styles.showMenu : ''}`}>
                <Link to='/' onClick={() => setIsOpen(false)}>HOME</Link>
                <Link to='about' onClick={() => setIsOpen(false)}>ABOUT US</Link>
                <Link to='services' onClick={() => setIsOpen(false)}>SERVICES</Link>
                <Link to='portfolio' onClick={() => setIsOpen(false)}>PORTFOLIO</Link>
                <Link to='testimonials' onClick={() => setIsOpen(false)}>CLIENT TESTIMONIALS</Link>
                <Link to='contact' onClick={() => setIsOpen(false)}>CONTACT US</Link>
            </div>
        </div>
    );
};

export default Navbar;
