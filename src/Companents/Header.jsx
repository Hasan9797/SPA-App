import { Link } from "react-router-dom"

function Header() {
  return (
    <nav>
        <div className="nav-wrapper">
          <Link to="/" classNameName="brand-logo">
            SPA-APP
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
    </nav>
  )
}

export default Header