import React, { useRef } from "react";
import { Container } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";
import logoImg from "../../assets/all-images/logo.png";

const navLinks = [
  {
    path: "/home",
    display: "Accueil",
  },
  {
    path: "/about",
    display: "À propos",
  },
  {
    path: "/cars",
    display: "Voitures",
  },
  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header">
      {/* ========== main navigation =========== */}
      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="logo header__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  {logoImg ? (
                    <img
                      src={logoImg}
                      alt="SLAIHI CAR"
                      style={{ height: 48 }}
                    />
                  ) : (
                    <>
                      <i className="ri-car-line"></i>
                      <span>
                        SLAIHI CAR <br /> Location de voitures
                      </span>
                    </>
                  )}
                </Link>
              </h1>
            </div>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="Recherche" />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
