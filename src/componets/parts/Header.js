import { Link } from 'react-router-dom';
import logo from '../../assets/images/logoV2.svg'

import '../../assets/styles/css/parts/header.css';

function Header() {
  return (
    <header className='header'>
      <Link to="/">
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
    </header>
  );
}


export default Header;