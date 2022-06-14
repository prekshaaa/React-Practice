import React from 'react';
import propTypes from 'prop-types';
export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="https://gigvistas.com/blog/">{props.navItemOne}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://gigvistas.com/services/">{props.navItemTwo}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://gigvistas.com/how-it-works/" aria-current="page">{props.navItemThree}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="https://gigvistas.com/about/">{props.navItemFour}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="https://beta.gigvistas.com/login">{props.NavItemFive}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="https://beta.gigvistas.com/login">{props.NavItemSix}</a>
            </li>
          </ul>
        </div>
      </div>
        <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Eg. web developer, python, custom services" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit"> SEARCH GIGS </button>
        </form>
    </nav>
  )
}

Navbar.propTypes= {title: propTypes.string.isRequired,
navItemOne: propTypes.string, navItemTwo: propTypes.string, navItemThree: propTypes.string, navItemFour: propTypes.string, NavItemFive: propTypes.string, NavItemSix: propTypes.string}; 

Navbar.defaultProps={navItemOne: "Home", navItemTwo: "About us", navItemThree: "blog", navItemFour: "policy", NavItemFive: "contact us", NavItemSix: "something"};