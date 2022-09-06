import { Link } from 'react-router-dom';
import '../../assets/styles/css/pages/notFoundPage.css';

function NotFoundPage() {
  return (
    <main>
      <div className='error_message'>
        <h2>404</h2>
        <p>Page Not Found</p>
      </div>

      <div className='link-block'>
        <Link to='/'>Home</Link>
      </div>
    </main>
  );
}

export default NotFoundPage;