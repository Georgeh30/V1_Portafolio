import { useState, useEffect } from 'react';
import MainLayout from '@layouts/jsx/MainLayout';
import { FaInfoCircle } from 'react-icons/fa';
import { InfinitySpin } from 'react-loader-spinner'; // Para mostrar un spinner de carga
import LazyLoad from 'react-lazy-load';
import { motion } from 'framer-motion';

const pageVariants = {
    initial: {
        opacity: 0,
        x: "-100vw"
    },
    in: {
        opacity: 1,
        x: 0
    },
    out: {
        opacity: 0,
        x: "100vw"
    }
};

const pageTransition = {
    type: "tween",
    ease: "circOut",
    duration: 1
};

const BlogPage = () => {
    // Estado para almacenar los artículos
    const [articles, setArticles] = useState([]);

    // Estado para almacenar las categorías de los artículos
    const [categories, setCategories] = useState(['All']);

    // Estado para la categoría seleccionada
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Estado para el término de búsqueda
    const [searchTerm, setSearchTerm] = useState('');

    // Estado para el estado de carga
    const [loading, setLoading] = useState(true);

    // Estado para almacenar errores
    const [error, setError] = useState(null);

    // Hook useEffect para cargar los artículos al montar el componente
    useEffect(() => {
        const fetchArticles = async () => {
            setLoading(true); // Inicia el estado de carga
            try {
                // Fetch de los artículos desde la API externa
                const response = await fetch('https://dev.to/api/articles?tag=javascript&per_page=10');
                const data = await response.json();

                // Verifica si la respuesta es exitosa
                if (response.ok) {
                    setArticles(data); // Almacena los artículos
                    const uniqueCategories = new Set(data.flatMap(article => article.tag_list));
                    setCategories(['All', ...Array.from(uniqueCategories)]); // Establece las categorías
                } else {
                    setError('Could not fetch articles.'); // Establece el error en caso de fallo
                }
            } catch (err) {
                setError('Error loading articles.'); // Manejo de errores
            } finally {
                setLoading(false); // Finaliza el estado de carga
            }
        };

        fetchArticles();
    }, []);

    // Filtra los artículos basados en la categoría seleccionada y el término de búsqueda
    const filteredArticles = articles.filter(article =>
        (selectedCategory === 'All' || article.tag_list.includes(selectedCategory.toLowerCase())) &&
        (article.title.toLowerCase().includes(searchTerm.toLowerCase()) || article.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <MainLayout>
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
            >
                <div className="p-6 max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold mb-4 text-center">Blog</h1>

                    {/* Mensaje sobre la API externa */}
                    <div className="p-4 mb-6 bg-lightColorHF dark:bg-darkColorHF border border-lightColorHover dark:border-darkColorHover rounded-lg shadow-lg flex items-center">
                        <FaInfoCircle className="text-blue-600 dark:text-blue-300 mr-3" />
                        <p className="text-gray-900 dark:text-gray-300">
                            This blog pulls information from an external API (Dev.to) to display the latest articles on JavaScript and web technology.
                        </p>
                    </div>

                    {/* Barra de búsqueda */}
                    <div className="mb-6 relative">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search articles..."
                            className="w-full p-3 pl-10 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                        />
                        <svg className="absolute left-3 top-3 h-5 w-5 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16a5 5 0 100-10 5 5 0 000 10zM21 21l-4.35-4.35" />
                        </svg>
                    </div>

                    {/* Filtros por categorías */}
                    <div className="flex flex-wrap justify-center space-x-2 mb-6">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 m-1 rounded-md text-sm font-medium transition-colors duration-300 focus:outline-none ${selectedCategory === category
                                        ? 'bg-indigo-600 text-white shadow-md'
                                        : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                                    }`}
                            >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </button>
                        ))}
                    </div>

                    {/* Listado de artículos */}
                    <div className="space-y-6">
                        {loading ? (
                            <div className="text-center text-gray-800 dark:text-gray-200">
                                <InfinitySpin width="100" color="#4F46E5" />
                                <p>Loading articles...</p>
                            </div>
                        ) : error ? (
                            <div className="text-center text-red-600 dark:text-red-400">
                                <FaInfoCircle className="inline-block mr-2" />
                                <p>{error}</p>
                            </div>
                        ) : filteredArticles.length > 0 ? (
                            filteredArticles.map((article, index) => (
                                <div key={index} className="p-4 bg-lightColorHF dark:bg-gray-800 rounded-lg shadow-md transition-transform transform hover:scale-105">
                                    {article.cover_image && (
                                        <div className="mb-4">
                                            <LazyLoad>
                                                <img src={article.cover_image} alt={article.title} className="w-full h-48 object-cover rounded-md" />
                                            </LazyLoad>
                                        </div>
                                    )}
                                    <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{article.title}</h2>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {new Date(article.published_at).toLocaleDateString()}
                                    </p>
                                    <p className="mt-2 text-gray-800 dark:text-gray-300">{article.description}</p>
                                    <a
                                        href={article.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-indigo-600 dark:text-indigo-400 hover:underline mt-3 inline-block"
                                    >
                                        Read more...
                                    </a>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-800 dark:text-gray-300">No articles found matching your search.</p>
                        )}
                    </div>

                    {/* Botón para volver al inicio */}
                    <div className="text-center mt-6">
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                        >
                            Back to Top
                        </button>
                    </div>
                </div>
            </motion.div>
        </MainLayout>
    );
};

export default BlogPage;
