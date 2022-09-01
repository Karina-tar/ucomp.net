import { Link } from "react-router-dom";
import '../../assets/styles/css/pages/header.css';

function Header() {
  return (
    <header className='header'>
      <Link to="/"><h3>ucomp</h3></Link>
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