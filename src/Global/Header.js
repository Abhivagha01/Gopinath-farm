import React, { useState, useEffect } from 'react';
import '../App.css'
import header_logo from '../assets/image/logo.png'


function Header() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <header className={isSticky ? 'sticky' : ''}>
                <div className="logo">
                    <img src={header_logo} alt="Header_logo" />
                </div>
            </header>
        </div>
    )
}

export default Header