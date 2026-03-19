import './globals.css';
import Image from 'next/image';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
            <header>
                <nav>
                    <Image src="/brand/logo.png" alt="Logo" width={50} height={50} />
                    <h1>Amber Collective</h1>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/portfolio">Portfolio</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
            {children}
            <footer>
                <p>&copy; {new Date().getFullYear()}</p>
            </footer>
        </body>
        </html>
    );
}