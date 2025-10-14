import React, { useRef, useEffect, useState } from "react";
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
  const navRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [navHeight, setNavHeight] = useState(0);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  useEffect(() => {
    const setHeight = () => {
      if (navRef.current) setNavHeight(navRef.current.offsetHeight || 0);
    };

    const onScroll = () => {
      // when scrolled more than nav height (or 100px) make it sticky
      const threshold = navRef.current ? navRef.current.offsetHeight : 100;
      setIsSticky(window.scrollY > threshold);
    };

    setHeight();
    window.addEventListener("resize", setHeight);
    window.addEventListener("scroll", onScroll, { passive: true });
    // initial
    onScroll();

    return () => {
      window.removeEventListener("resize", setHeight);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className="header">
      {/* ========== main navigation =========== */}
      <div ref={navRef} className={`main__navbar ${isSticky ? "sticky" : ""}`}>
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
      {/* placeholder to avoid content jump when navbar becomes position:fixed */}
      <div style={{ height: isSticky ? navHeight : 0 }} aria-hidden="true" />
    </header>
  );
};

export default Header;
