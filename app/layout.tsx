import './globals.css';

export const metadata = {
  title: 'Amber Collective',
  description: 'Welcome to Amber Collective, a hub of creativity and innovation.',
};

const RootLayout = ({ children }) => {
  const currentYear = new Date().getFullYear();
  return (
    <html lang="en">
      <body>
        <header>
          <img src="/brand/logo.png" alt="Amber Collective Logo" />
          <h1>Amber Collective</h1>
        </header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <main>{children}</main>
        <footer>
          <p>&copy; {currentYear} Amber Collective</p>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;