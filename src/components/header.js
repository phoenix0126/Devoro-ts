import React from 'react'
import { Link } from 'gatsby'

import '../styles/header.css'

const Header = () => (
  <header className="header">
    <div className="container">
      <nav className="nav">
        <ul className="header__list-links">
          <li className="dropdown__wrapper">
            <Link to="/brand-portfolio" className="dropdown__trigger">
              Brand portfolio
            </Link>

            <ul className="dropdown__list">
              <li className="dropdown__item">
                <Link to="">AI</Link>
              </li>

              <li className="dropdown__item">
                <Link to="">Financial</Link>
              </li>

              <li className="dropdown__item">
                <Link to="">Foundation</Link>
              </li>

              <li className="dropdown__item">
                <Link to="">Galactic</Link>
              </li>

              <li className="dropdown__item">
                <Link to="">Genomics</Link>
              </li>

              <li className="dropdown__item">
                <Link to="">Industries</Link>
              </li>

              <li className="dropdown__item">
                <Link to="">Media</Link>
              </li>

              <li className="dropdown__item">
                <Link to="">Studio</Link>
              </li>

              <li className="dropdown__item">
                <Link to="">Technologies</Link>
              </li>
            </ul>
          </li>

          <li className="dropdown__wrapper">
            <Link to="/about-us/" className="dropdown__trigger">Discover DEVERO</Link>

            <ul className="dropdown__list">
              <li className="dropdown__item">
                <Link to="">About us</Link>
              </li>

              <li className="dropdown__item">
                <Link to="">Our story</Link>
              </li>

              <li className="dropdown__item">
                <Link to="">Our brand</Link>
              </li>

              <li className="dropdown__item">
                <Link to="">Our mission</Link>
              </li>
            </ul>
          </li>

          <li>
            <a href="https://www.blog.alexdevero.com" rel="noopener noreferrer" target="_blank">Blog</a>
          </li>

          <li>
            <Link to="/foundation/">Foundation</Link>
          </li>
        </ul>

        <ul className="header__list-social">
          <li>
            <a href="/" target="_blank">
              <span className="fab fa-facebook-f" />
            </a>
          </li>

          <li>
            <a href="/" target="_blank">
              <span className="fab fa-twitter" />
            </a>
          </li>

          <li>
            <a href="/" target="_blank">
              <span className="fab fa-instagram" />
            </a>
          </li>

          <li>
            <a href="/" target="_blank">
              <span className="fab fa-linkedin" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
