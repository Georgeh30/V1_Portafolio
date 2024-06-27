const Header = ({ toggleTheme }) => {
    return (
        <header>
            <nav>
                <button onClick={toggleTheme}>Toggle Theme</button>
            </nav>
        </header>
    );
};

export default Header;
