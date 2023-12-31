"use client"

import { useState, useEffect } from 'react'
// import { useNavigate, NavLink } from 'react-router-dom';

// import { useTranslation } from 'react-i18next'
import { scrollToTop } from '../../functions/scrollToTop';
import { scrollToBottom } from '../../functions/scrollToBottom';

import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";

//Icons
import { GiHamburgerMenu } from "react-icons/gi";
import { MdWeb } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdPermContactCalendar } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { HiMoon } from "react-icons/hi";
import { HiSun } from "react-icons/hi";


// import { useContext } from 'react';
// import { FillContext } from '../../context/FillContext';
import { activateDarkMode } from '../../functions/activateDarkMode';

import Link from 'next-intl/link'

import { useTranslations } from "next-intl";
// import '@/styles/components/_header.scss'

const sideMenuVariants = {
    open: {
        opacity: 1,
        x: "-100%",
        transition: { duration: 0.6, type: "spring" },
    },
    closed: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.4, type: "spring" },
    },
};

// const initializeHeader = () => {
// //     localStorage.setItem('FillVariable', 'rgb(20,20,20)')
// }

// initializeHeader()

export const Header = () => {

    const t = useTranslations("translation");

    // const { setFillVariable } = useContext(FillContext)

    // const [text, i18n] = useTranslation("global")

    // const navigate = useNavigate()

    const [scrollPosition, setScrollPosition] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);


    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    const handleDarkModeToggle = () => {
        // handleStorageChange()
        setIsDarkMode(!isDarkMode);
        activateDarkMode()
    };

    // const handleStorageChange = () => {
    //     // let fillVariable = localStorage.getItem('FillVariable')

    //     if (fillVariable === 'rgb(20,20,20)') {
    //         // localStorage.setItem('FillVariable', 'rgb(255,255,255)')
    //         // setFillVariable(false)
    //     }
    //     if (fillVariable === 'rgb(255,255,255)') {
    //         // localStorage.setItem('FillVariable', 'rgb(20,20,20)')
    //         // setFillVariable(true)
    //     }
    // };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // const toSpanish = () => {
    //     // window.location.reload();
    //     scrollToTop()
    //     // localStorage.setItem('lastLang', 'ES')
    //     // i18n.changeLanguage("es")
    // }
    // const toEnglish = () => {
    //     scrollToTop()
    //     // window.location.reload();
    //     // localStorage.setItem('lastLang', 'EN')
    //     // i18n.changeLanguage("en")
    // }

    // const lang = localStorage.getItem('lastLang') || 'EN'

    // var langx

    // if (lang === 'ES') {
    //     langx = 'ES';
    // } else {
    //     langx = 'EN';
    // }

    // const changeLanguaje = () => {
    //     if (lang === 'ES') {
    //         toEnglish();
    //     } else {
    //         toSpanish();
    //     }
    // }

    return (
        <header className={
            scrollPosition < 10
                ? ((isDarkMode)
                    ? 'header_container'
                    : 'header_container_light')
                : 'header_container'
        }>

            <div className="header_content">
                {/* <span
                    onClick={() => {
                        navigate('/')
                        scrollToTop()
                    }}
                    style={{ cursor: "pointer" }}
                    className="header_title"
                >
                    {t("header.portofolio")}
                </span> */}
                <Link
                    href={'/'}
                    onClick={() => {
                        // navigate('/')
                        scrollToTop()
                    }}
                    style={{ cursor: "pointer" }}
                    className="header_title"
                >
                    {t("header.portofolio")}
                </Link>



                <span
                    onClick={() => {
                        setIsMenuOpen(true)
                    }}
                    className='hamburger_menu'
                >
                    <GiHamburgerMenu />
                </span>

                <div
                    onClick={() => {
                        setIsMenuOpen(false)
                    }}
                    className={(isMenuOpen) ? 'nav_bg_open' : 'nav_bg_closed'}
                >
                    <motion.div
                        animate={isMobile && (isMenuOpen ? "open" : "closed")}
                        variants={sideMenuVariants}
                        className='nav_container_open'
                        initial={false}
                    >
                        <AiOutlineClose
                            onClick={() => setIsMenuOpen(false)}
                            className='close_menu_button'
                        />

                        <ul className="navigation_list">
                            <li>
                                <Link
                                    className="navigation_button"
                                    // onClick={scrollToTop}
                                    href={"/about"}
                                >
                                    <AiOutlineInfoCircle className='menu_icon' />
                                    {t("header.about")}
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className="navigation_button"
                                    // onClick={scrollToTop}
                                    href={"/work"}
                                >
                                    <MdWeb className='menu_icon' />
                                    {t("header.work")}
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className='navigation_button'
                                    onClick={scrollToBottom}
                                    href={'#'}
                                >
                                    <MdPermContactCalendar className='menu_icon' />
                                    {t("header.contact")}
                                </Link>
                            </li>

                            <li className="dropdown">
                                {/* <button className="navigation_button dropdown-toggle" onClick={changeLanguaje}>
                                    {langx}
                                </button> */}
                                {/* <Link
                                    className='navigation_button dropdown-toggle'
                                    href={'/'}
                                    locale={langx == 'EN' ? 'es' : 'en'}
                                    // onClick={changeLanguaje}
                                >
                                    {langx}
                                </Link> */}
                            </li>

                            {
                                (!isDarkMode)
                                    ? (<li className='li_icon'>
                                        <button className='navigation_button li_mr-2' onClick={() => {
                                            handleDarkModeToggle()
                                        }
                                        }>
                                            Dark
                                        </button>
                                        <span><HiMoon className='header_icon' /></span>
                                    </li>)
                                    : (<li className='li_icon'>
                                        <button className='navigation_button li_mr-2' onClick={() => {
                                            handleDarkModeToggle()
                                        }
                                        }>
                                            Ligth
                                        </button>
                                        <span><HiSun className='header_icon' /></span>
                                    </li>)
                            }

                        </ul>
                    </motion.div>
                </div>

            </div>

        </header>
    )
}
