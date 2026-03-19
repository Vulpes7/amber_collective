import React from 'react';
import Link from 'next/link';

const Layout = ({ children }) => {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><Link href='/' >Home</Link></li>
                        <li><Link href='/about' >About</Link></li>
                        <li><Link href='/services' >Services</Link></li>
                        <li><Link href='/contact' >Contact</Link></li>
                    </ul>
                </nav>
            </header>
            <main>{children}</main>
            <footer>
                <img src='/brand/logo.png' alt='Brand Logo' />
                <p>&copy; 2026 Your Company Name. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Layout;
