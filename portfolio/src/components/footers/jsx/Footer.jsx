import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-lightColorHF dark:bg-darkColorHF py-6 text-center border-t border-gray-200 dark:border-gray-700">
            <div className="container mx-auto px-4">
                {/* Redes sociales */}
                <div className="flex justify-center gap-6 mb-4 flex-wrap">
                    <a href="https://www.facebook.com/profile.php?id=100009221266546" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300" aria-label="Facebook">
                        <FaFacebookF size={24} />
                    </a>
                    <a href="https://x.com/JorgeAl90752656" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-500 transition-colors duration-300" aria-label="Twitter">
                        <FaTwitter size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/jorge-alvarado-9a99a81b0/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-600 transition-colors duration-300" aria-label="LinkedIn">
                        <FaLinkedinIn size={24} />
                    </a>
                    <a href="https://www.instagram.com/jorgealvarado2609/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300" aria-label="Instagram">
                        <FaInstagram size={24} />
                    </a>
                    <a href="https://github.com/Georgeh30" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-400 transition-colors duration-300" aria-label="GitHub">
                        <FaGithub size={24} />
                    </a>
                </div>
                {/* Contenido central */}
                <div className="text-center">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">&copy; 2024 Jorge Alvarado. All rights reserved.</p>
                    <p className="text-xs text-gray-500 dark:text-gray-600 mb-1">
                        Made with ❤️ by Jorge Alvarado
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-600">
                        Contact us at: <a href="mailto:johncrotf2@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">johncrotf2@gmail.com</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
