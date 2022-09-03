import { Link } from 'react-router-dom';
import logo from '../../assets/images/logoV2.svg'

import '../../assets/styles/css/parts/header.css';

function Header() {
  return (
    <header className='main-header'>
      <Link to="/" className='logo'>
        <img src={logo} alt="logo"/>
      </Link>

      <ul>
        <li>
          <Link to="blog">Blog</Link>
        </li>
        <li>
          <Link to="publications">Publications</Link>
        </li>
        <li>
          <Link to="people">People</Link>
        </li>
        <li>
          <Link to="projects">Projects</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>

      <Link to="contacts" className='special-link'>Contact us</Link>
    </header>
  );
}


export default Header;