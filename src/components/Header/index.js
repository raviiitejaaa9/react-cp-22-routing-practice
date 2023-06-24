// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <navbar className="nav-bar">
    <div className="nav-icon-container">
      <img
        src=" https://assets.ccbp.in/frontend/react-js/wave-logo-img.png "
        alt="wave"
        className="nav-icon"
      />
      <p className="nav-link"> Wave </p>
    </div>

    <ul className="nav-links-container">
      <li>
        <Link to="/" className="nav-link">
          {' '}
          Home{' '}
        </Link>
      </li>
      <li>
        <Link to="./about" className="nav-link">
          {' '}
          About{' '}
        </Link>
      </li>
      <li>
        <Link to="./contact" className="nav-link">
          {' '}
          Contact{' '}
        </Link>
      </li>
    </ul>
  </navbar>
)

export default Header
