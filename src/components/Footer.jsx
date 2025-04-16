import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container1}>
                <h2>Quick Links</h2>
                <div className={styles.links}>
                    <Link to='/'>HOME</Link>
                    <Link to='about'>ABOUT US</Link>
                    <Link to='services'>SERVICES</Link>
                    <Link to='portfolio'>PORTFOLIO</Link>
                    <Link to='testimonials'>CLIENT TESTIMONIALS</Link>
                    <Link to='contact'>CONTACT US</Link>
                </div>
            </div>
            <div className={styles.container2}>
                <h2>Get in Touch</h2>
                <div className={styles.contactUs}>
                    <p>Phone: 1234567890</p>
                    <p>Email: abce@gmail.com</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;