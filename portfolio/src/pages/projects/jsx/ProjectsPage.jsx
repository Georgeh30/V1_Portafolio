import MainLayout from '@layouts/jsx/MainLayout';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useState, useMemo } from 'react';

import config from '@config/config';

const BASE_URL = config.BASE_URL;

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

const initialProjects = [
    {
        id: 1,
        title: 'Movie Catalog',
        description: 'A movie catalog application where you can browse, search, and filter movies. Built with React and Tailwind CSS.',
        technologies: ['React', 'Tailwind CSS'],
        imageUrl: `${BASE_URL}img/project-move.png`,
        demoUrl: 'https://move-repo-v1.netlify.app/movie-catalog',
        repoUrl: 'https://github.com/Georgeh30/Movie-Catalog-ReactJS',
        type: 'Catalog',
    },
    {
        id: 2,
        title: 'Todo List',
        description: 'A task management app to help you organize and track your to-do items. Built with React, Redux, and Tailwind CSS.',
        technologies: ['React', 'Redux', 'Tailwind CSS'],
        imageUrl: `${BASE_URL}img/project-todo.png`,
        demoUrl: 'https://todo-repo-v1.netlify.app/',
        repoUrl: 'https://github.com/Georgeh30/TO-DO-WITH-REACT-VITEJS',
        type: 'Task Management',
    },
    {
        id: 3,
        title: 'Digital Clock',
        description: 'A digital clock application that displays the current time with a sleek design. Built with React and styled with Tailwind CSS.',
        technologies: ['React', 'Tailwind CSS'],
        imageUrl: `${BASE_URL}img/project-digital-clock.png`,
        demoUrl: 'https://digital-clock-repo-v1.netlify.app/',
        repoUrl: 'https://github.com/Georgehh30/DIGITAL-CLOCK',
        type: 'Clock',
    },
    {
        id: 4,
        title: 'Calculator',
        description: 'A simple calculator application with basic arithmetic functions. Developed using pure JavaScript, CSS, and HTML for a clean and responsive design.',
        technologies: ['JavaScript', 'CSS', 'HTML'],
        imageUrl: `${BASE_URL}img/project-calculator.png`,
        demoUrl: 'https://calculator-repo-v1.netlify.app/',
        repoUrl: 'https://github.com/Georgeh30/Calculator',
        type: 'Utility',
    },
    {
        id: 5,
        title: 'Attendance Control',
        description: 'Attendance control and incident management platform developed for the company. Implemented with React JS + Vite JS + React Router + Redux and backend in PHP with SQL Server.',
        technologies: ['React JS', 'Vite JS', 'React Router', 'Redux', 'PHP', 'SQL Server'],
        imageUrl: `${BASE_URL}img/project-ac.png`,
        demoUrl: '',
        repoUrl: '',
        type: 'Internal Tool',
        note: 'This project is not publicly available as it was developed on the company\'s internal servers.',
    },
    {
        id: 6,
        title: 'Omnia',
        description: 'Tool for monthly performance tracking of operators and salespeople. Developed with plain JavaScript and jQuery for the frontend, and PHP with SQL Server for the backend.',
        technologies: ['JavaScript', 'jQuery', 'PHP', 'SQL Server'],
        imageUrl: `${BASE_URL}img/project-omnia.png`,
        demoUrl: '',
        repoUrl: '',
        type: 'Internal Tool',
        note: 'This project is not publicly available as it was developed on the company\'s internal servers.',
    },
];

const ProjectsPage = () => {
    const [projects, setProjects] = useState(initialProjects);
    const [selectedSearchMethod, setSelectedSearchMethod] = useState('search');
    const [selectedType, setSelectedType] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    // Get unique project types
    const projectTypes = useMemo(() => {
        const types = new Set(['All']);
        projects.forEach(project => types.add(project.type));
        return Array.from(types);
    }, [projects]);

    const handleSearchMethodChange = (method) => {
        setSelectedSearchMethod(method);
    };

    const handleTypeChange = (event) => {
        setSelectedType(event.target.value);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleButtonClick = (type) => {
        setSelectedType(type);
    };

    const filteredProjects = projects.filter((project) => {
        const matchesType = selectedType === 'All' || project.type === selectedType;
        const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesType && matchesSearch;
    });

    return (
        <MainLayout>
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
            >
                <section className="relative bg-lightColor dark:bg-darkColor min-h-screen p-4 md:p-8">
                    {/* Search Method Selection */}
                    <div className="mb-6">
                        <div className="flex flex-wrap gap-4 mb-4">
                            <button
                                onClick={() => handleSearchMethodChange('search')}
                                className={`px-4 py-2 border rounded-lg transition-colors duration-300 ${selectedSearchMethod === 'search'
                                        ? 'bg-blue-600 text-white border-blue-700 dark:bg-blue-500 dark:border-blue-600'
                                        : 'bg-gray-200 text-black border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600'
                                    }`}
                            >
                                Text Search
                            </button>
                            <button
                                onClick={() => handleSearchMethodChange('select')}
                                className={`px-4 py-2 border rounded-lg transition-colors duration-300 ${selectedSearchMethod === 'select'
                                        ? 'bg-blue-600 text-white border-blue-700 dark:bg-blue-500 dark:border-blue-600'
                                        : 'bg-gray-200 text-black border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600'
                                    }`}
                            >
                                Select Search
                            </button>
                            <button
                                onClick={() => handleSearchMethodChange('buttons')}
                                className={`px-4 py-2 border rounded-lg transition-colors duration-300 ${selectedSearchMethod === 'buttons'
                                        ? 'bg-blue-600 text-white border-blue-700 dark:bg-blue-500 dark:border-blue-600'
                                        : 'bg-gray-200 text-black border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600'
                                    }`}
                            >
                                Button Search
                            </button>
                        </div>

                        {/* Display Selected Search Method */}
                        {selectedSearchMethod === 'search' && (
                            <div className="mb-6">
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                    placeholder="Search projects..."
                                    className="p-3 border rounded-lg shadow-md dark:bg-gray-800 dark:text-white dark:border-gray-600 h-10"
                                />
                            </div>
                        )}

                        {selectedSearchMethod === 'select' && (
                            <div className="mb-6">
                                <select
                                    value={selectedType}
                                    onChange={handleTypeChange}
                                    className="sm:w-64 md:w-80 lg:w-96 p-3 border rounded-lg shadow-md dark:bg-gray-800 dark:text-white dark:border-gray-600 h-11"
                                >
                                    {projectTypes.map((type) => (
                                        <option key={type} value={type}>
                                            {type}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}

                        {selectedSearchMethod === 'buttons' && (
                            <div className="flex flex-wrap gap-2 mb-6">
                                {projectTypes.map((type) => (
                                    <button
                                        key={type}
                                        onClick={() => handleButtonClick(type)}
                                        className={`px-4 py-2 border rounded-lg transition-colors duration-300 ${selectedType === type
                                                ? 'bg-blue-600 text-white border-blue-700 dark:bg-blue-500 dark:border-blue-600'
                                                : 'bg-gray-200 text-black border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600'
                                            }`}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                    {/* Project List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                className="relative bg-lightColorHF dark:bg-darkColorHF p-4 rounded-lg shadow-lg overflow-hidden"
                                whileHover={{ scale: 1.05, transition: { type: 'spring', stiffness: 300 } }}
                            >
                                <div className="relative group">
                                    <img
                                        src={project.imageUrl}
                                        alt={project.title}
                                        className="w-full h-48 object-cover rounded-lg mb-4"
                                    />
                                    {/* Hover effect */}
                                    {project.demoUrl && (
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-60 text-white text-lg font-bold transition-opacity duration-300"
                                        >
                                            View Demo
                                        </a>
                                    )}
                                </div>
                                <h3 className="text-lg font-bold text-darkColor dark:text-lightColor mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-darkColor dark:text-lightColor mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-1 px-2 rounded-full text-xs"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                {project.repoUrl || project.demoUrl ? (
                                    <div className="flex justify-between mt-2">
                                        {project.repoUrl && (
                                            <a
                                                href={project.repoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                                            >
                                                <FaGithub className="mr-2" />
                                                View Repository
                                            </a>
                                        )}
                                        {project.demoUrl && (
                                            <a
                                                href={project.demoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                                            >
                                                <FaExternalLinkAlt className="mr-2" />
                                                View Demo
                                            </a>
                                        )}
                                    </div>
                                ) : null}
                                {project.note && (
                                    <p className="text-sm mt-4">
                                        <span className="text-red-500 font-bold">Note:</span>
                                        <span className="text-black dark:text-gray-200 font-bold ml-1">
                                            {project.note}
                                        </span>
                                    </p>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </section>
            </motion.div>
        </MainLayout>
    );
};

export default ProjectsPage;
