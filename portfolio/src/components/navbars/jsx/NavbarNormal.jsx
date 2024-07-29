import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const navigation = [
    { name: 'Home', href: '/Portfolio/Home' },
    { name: 'About', href: '/Portfolio/About' },
    { name: 'Projects', href: '/Portfolio/Projects' },
    { name: 'Contact', href: '/Portfolio/Contact' },
    { name: 'Blog', href: '/Portfolio/Blog' },
    { name: 'Curriculum', href: '/Portfolio/Curriculum' },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function NavbarNormal() {
    const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
    const [isOpen, setIsOpen] = useState(false); // Estado para el menú desplegable
    const location = useLocation();
    const [currentPath, setCurrentPath] = useState(location.pathname);

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        if (newDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    useEffect(() => {
        setCurrentPath(location.pathname);
    }, [location.pathname]);

    return (
        <nav className="bg-lightColorHF dark:bg-darkColorHF fixed top-0 left-0 w-full z-50">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    {/* Botón de menú desplegable */}
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button 
                            onClick={() => setIsOpen(!isOpen)} // Cambia el estado al hacer clic
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 dark:text-lightColor hover:bg-gray-700 hover:text-white focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className={`h-6 w-6 ${isOpen ? 'hidden' : 'block'}`} aria-hidden="true" />
                            <XMarkIcon className={`h-6 w-6 ${isOpen ? 'block' : 'hidden'}`} aria-hidden="true" />
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center me-3">
                            <FontAwesomeIcon icon={faBriefcase} className="h-8 w-auto text-indigo-500" />
                        </div>
                        {/* Menú para pantallas grandes */}
                        <div className="hidden sm:flex sm:space-x-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    aria-current={item.href === currentPath ? 'page' : undefined}
                                    className={classNames(
                                        item.href === currentPath
                                            ? 'bg-gray-900 dark:bg-darkColor text-white dark:text-lightColor'
                                            : 'dark:text-lightColor hover:bg-lightColorHover dark:hover:bg-darkColorHover',
                                        'rounded-md px-3 py-2 text-sm font-medium'
                                    )}
                                    onClick={() => setCurrentPath(item.href)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button
                            type="button"
                            onClick={toggleDarkMode}
                            className="relative inline-flex items-center justify-center rounded-full p-2 dark:text-lightColor hover:text-gray-500"
                        >
                            <span className="sr-only">Toggle Dark Mode</span>
                            {darkMode ? (
                                <SunIcon className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <MoonIcon className="h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {/* Menú desplegable en pantallas pequeñas */}
            <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'} bg-white dark:bg-gray-800 rounded-md shadow-lg absolute inset-x-0 top-16 mt-2`}>
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            aria-current={item.href === currentPath ? 'page' : undefined}
                            className={classNames(
                                item.href === currentPath
                                    ? 'bg-gray-900 dark:bg-darkColor text-white dark:text-lightColor'
                                    : 'dark:text-lightColor hover:bg-lightColorHover dark:hover:bg-darkColorHover',
                                'block rounded-md px-3 py-2 text-base font-medium'
                            )}
                            onClick={() => {
                                setCurrentPath(item.href);
                                setIsOpen(false); // Cierra el menú al seleccionar una opción
                            }}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
