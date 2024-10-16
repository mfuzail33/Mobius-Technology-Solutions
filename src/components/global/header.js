import React, { useState, useEffect, useRef } from "react";
import { Navbar } from "react-bootstrap";
import { GoChevronDown } from "react-icons/go";
import { Link as PageLink } from "react-router-dom";
import { FaPhoneAlt, FaSun, FaMoon } from "react-icons/fa";
import "../../i18n";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from 'react-responsive';
import Logo from "../../assets/images/logo.png";

const Header = ({ header }) => {
  const [isLangDropdownOpen, setLangDropdownOpen] = useState(false);
  const [fix, setFix] = useState(false);
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('language') || 'EN');
  const [menuOpen, setMenuOpen] = useState(false); 
  const langDropdownRef = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    document.body.className = theme === "light" ? "light-mode" : "dark-mode";

    // Store theme and language in local storage
    localStorage.setItem('theme', theme);
    localStorage.setItem('language', selectedLanguage);

    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setFix(true);
      } else {
        setFix(false);
      }
    };

    const handleClickOutside = (event) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target)) {
        setLangDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [theme, selectedLanguage]);

  const languageOptions = {
    EN: "English",
    ZH: "Chinese",
    FR: "French",
    IT: "Italian",
    ES: "Spanish",
    AR: "Arabic",
    RU: "Russian",
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language.toLowerCase());
    setSelectedLanguage(language);
    setLangDropdownOpen(false);
    if (isMobile) setMenuOpen(false); 
  };

  const toggleLangDropdown = () => {
    setLangDropdownOpen(!isLangDropdownOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    if (isMobile) setMenuOpen(false); 
  };

  return (
    <header className={fix ? "header navbar_fixed" : "header"}>
      <div className="container">
        <div className="row">
          <Navbar bg="none" expand="lg" expanded={menuOpen} onToggle={() => setMenuOpen(!menuOpen)}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
              <a href="/" style={{ zIndex: 1 }}>
                <img src={Logo} alt={"Mobius"} style={{ width: '80px' }} />
              </a>
              <a href="/" style={{ zIndex: 1 }}>
                <h1 className="main_heading" style={{ textAlign: 'center', marginTop: '10px' }}>Mobius</h1>
              </a>
            </div>
            <Navbar.Toggle aria-controls="navbarSupportedContent">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </Navbar.Toggle>

            <Navbar.Collapse id="navbarSupportedContent">
              <ul className="navbar-nav menu ms-auto">
                {header.menu?.map((data, i) => (
                  <li className="nav-item" key={i}>
                    <PageLink
                      activeClass="active"
                      className="nav-link"
                      to={`${data.link}`}
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-60}
                      onClick={() => setMenuOpen(false)} 
                    >
                      {t(data.title)}
                    </PageLink>
                  </li>
                ))}

                {isMobile ? (
                  <li className="nav-item">
                    <button onClick={toggleTheme} className="btn theme-toggle">
                      {theme === "light" ? (
                        <FaSun className="icon-sun" />
                      ) : (
                        <FaMoon className="icon-moon" />
                      )}
                    </button>
                  </li>
                ) : null}

                <li className="nav-item dropdown" ref={langDropdownRef} style={{ fontWeight: 500, alignItems: isMobile ? 'flex-start' : 'center' }}>
                  <span
                    className="nav-link main_heading dropdown-toggle"
                    role="button"
                    onClick={toggleLangDropdown}
                    aria-expanded={isLangDropdownOpen}
                  >
                    {selectedLanguage} <GoChevronDown />
                  </span>
                  <ul className={isLangDropdownOpen ? "dropdown-menu show dropdown-menu-bg" : "dropdown-menu dropdown-menu-bg"} style={{ marginTop: isMobile ? '0px' : '280px' }}>
                    {Object.entries(languageOptions).map(([key, name]) => (
                      <li key={key}>
                        <button onClick={() => changeLanguage(key)} className="dropdown-item main_heading">
                          {name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </li>

                {!isMobile ? (
                  <li className="nav-item">
                    <button onClick={toggleTheme} className="btn theme-toggle">
                      {theme === "light" ? (
                        <FaSun className="icon-sun" />
                      ) : (
                        <FaMoon className="icon-moon" />
                      )}
                    </button>
                  </li>
                ) : null}
              </ul>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </header>
  );
};

export default Header;
