/* const Header = ({ toggleTheme }) => {
    return (
        <header>
            <nav>
                <button onClick={toggleTheme}>Toggle Theme</button>
            </nav>
        </header>
    );
};

export default Header; */

import NavbarNormal from '@components/navbars/jsx/NavbarNormal';

const Header = () => {
    return (
        <header>
            <NavbarNormal />
        </header>
    );
};

export default Header;

