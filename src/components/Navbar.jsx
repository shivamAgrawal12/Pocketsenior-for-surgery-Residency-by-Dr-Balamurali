import React, { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.png';
import testimonialsData from "./testimonials";
import longcasestudyData from "./longcases";
import shortcasestudyData from './shortcases';
import "./Style.css";

const Navbar = () => {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const chaptersRef = useRef(null);
    const reachOutRef = useRef(null);

    const [dropdownOpen, setDropdownOpen] = useState(null); // track which dropdown is open
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => setIsOpen(!isOpen);

    const toggleDropdown = (menu) => {
        setDropdownOpen(dropdownOpen === menu ? null : menu);
    };

    const handleChapterClick = (path) => {
        setDropdownOpen(null);
        setIsOpen(false);

        window.scrollTo({ top: 0, behavior: "smooth" });

        setTimeout(() => {
            navigate(path);
        }, 300); 
    };

    return (
        <nav id="navbar">
            <div id="nav-div">
                <img 
                    src={logo} 
                    alt="Logo" 
                    className="App-logo" 
                    onClick={() => handleChapterClick("/")} 
                />

                {/* Mobile Menu Toggle */}
                <button className="menu-toggle" onClick={toggleMenu}>
                    {isOpen ? "✖" : "☰"}
                </button>
                
                {/* Mobile Nav */}
                <ul className={`nav-links ${isOpen ? "active" : ""}`} id='group-nav'>
                    <li><a className="head" onClick={() => handleChapterClick("/")}>HOME</a></li>
                    <li><a className="head" onClick={() => handleChapterClick("/about")}>ABOUT</a></li>
                    
                    <li className={`dropdown-container ${dropdownOpen === "chapters" ? "open" : ""}`}>
                        <a className="head" onClick={() => toggleDropdown("chapters")}>
                            CHAPTERS ▾
                        </a>
                        <ul className="dropdown-menu">
                            {testimonialsData.map((chapter) => (
                                <li key={chapter.id || chapter.name}>
                                    <button onClick={() => handleChapterClick(`/chapter/${chapter.id || chapter.chapterId}`)}>
                                        {chapter.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </li>

                    <li className={`dropdown-container ${dropdownOpen === "longcases" ? "open" : ""}`}>
                        <a className="head" onClick={() => toggleDropdown("longcases")}>
                            LONG CASES ▾
                        </a>
                        <ul className="dropdown-menu">
                            {longcasestudyData.map((chapter) => (
                                <li key={chapter.id || chapter.name}>
                                    <button onClick={() => handleChapterClick(`/Longcasechapter/${chapter.id || chapter.chapterId}`)}>
                                        {chapter.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </li>

                    <li className={`dropdown-container ${dropdownOpen === "shortcases" ? "open" : ""}`}>
                        <a className="head" onClick={() => toggleDropdown("shortcases")}>
                            SHORT CASES ▾
                        </a>
                        <ul className="dropdown-menu">
                            {shortcasestudyData.map((chapter) => (
                                <li key={chapter.id || chapter.name}>
                                    <button onClick={() => handleChapterClick(`/Shortcaseschapter/${chapter.id || chapter.chapterId}`)}>
                                        {chapter.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </li>
                </ul>

                {/* Desktop Nav */}
                <div className="group">
                    <div className="head" onClick={() => handleChapterClick("/")}>HOME</div>
                    <div className="head" onClick={() => handleChapterClick("/about")}>ABOUT</div>
                    
                    <div className={`dropdown-container ${dropdownOpen === "chapters" ? "open" : ""}`}>
                        <div className="head" onClick={() => toggleDropdown("chapters")}>
                            CHAPTERS <span className='drop-chap'>▾</span>
                        </div>
                        <ul className="dropdown-menu">
                            {testimonialsData.map((chapter) => (
                                <li key={chapter.id || chapter.name}>
                                    <button onClick={() => handleChapterClick(`/chapter/${chapter.id || chapter.chapterId}`)}>
                                        {chapter.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={`dropdown-container ${dropdownOpen === "longcases" ? "open" : ""}`}>
                        <div className="head" onClick={() => toggleDropdown("longcases")}>
                            LONG CASES <span className='drop-chap'>▾</span>
                        </div>
                        <ul className="dropdown-menu">
                            {longcasestudyData.map((chapter) => (
                                <li key={chapter.id || chapter.name}>
                                    <button onClick={() => handleChapterClick(`/Longcasechapter/${chapter.id || chapter.chapterId}`)}>
                                        {chapter.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={`dropdown-container ${dropdownOpen === "shortcases" ? "open" : ""}`}>
                        <div className="head" onClick={() => toggleDropdown("shortcases")}>
                            SHORT CASES <span className='drop-chap'>▾</span>
                        </div>
                        <ul className="dropdown-menu">
                            {shortcasestudyData.map((chapter) => (
                                <li key={chapter.id || chapter.name}>
                                    <button onClick={() => handleChapterClick(`/Shortcaseschapter/${chapter.id || chapter.chapterId}`)}>
                                        {chapter.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
