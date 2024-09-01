import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaJava, FaServer, FaDatabase } from 'react-icons/fa';
import { SiReactrouter, SiRedux, SiPhp, SiJquery, SiPython, SiDjango, SiTailwindcss, SiBootstrap, SiMui, SiWebpack, SiBabel, SiMysql, SiSqlite, SiMicrosoftsqlserver } from 'react-icons/si';
import MainLayout from '@layouts/jsx/MainLayout';
import { ReactTyped } from 'react-typed';
import '@pages/home/css/styles-home.css';
import config from '@config/config';


const skills = [
    { name: 'HTML', icon: <FaHtml5 className="text-red-600 text-4xl" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-600 text-4xl" /> },
    { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-500 text-4xl" /> },
    { name: 'React', icon: <FaReact className="text-blue-400 text-4xl" /> },
    { name: 'React Router', icon: <SiReactrouter className="text-red-600 text-4xl" /> },
    { name: 'Redux', icon: <SiRedux className="text-purple-600 text-4xl" /> },
    { name: 'Redux ToolKit', icon: <SiRedux className="text-purple-600 text-4xl" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600 text-4xl" /> },
    { name: 'PHP', icon: <SiPhp className="text-blue-700 text-4xl" /> },
    { name: 'Git', icon: <FaGitAlt className="text-orange-600 text-4xl" /> },
    { name: 'GitHub', icon: <FaGithub className="text-black text-4xl" /> },
    // { name: 'JQuery', icon: <SiJquery className="text-blue-600 text-4xl" /> },
    // { name: 'Java', icon: <FaJava className="text-red-600 text-4xl" /> },
    // { name: 'Python', icon: <SiPython className="text-yellow-500 text-4xl" /> },
    // { name: 'Django', icon: <SiDjango className="text-green-600 text-4xl" /> },
    { name: 'REST API', icon: <FaServer className="text-blue-500 text-4xl" /> },
    { name: 'Tailwind', icon: <SiTailwindcss className="text-blue-500 text-4xl" /> },
    { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-600 text-4xl" /> },
    { name: 'MUI', icon: <SiMui className="text-blue-600 text-4xl" /> },
    { name: 'Webpack', icon: <SiWebpack className="text-blue-600 text-4xl" /> },
    // { name: 'Babel', icon: <SiBabel className="text-yellow-500 text-4xl" /> },
    { name: 'MySQL', icon: <SiMysql className="text-blue-600 text-4xl" /> },
    // { name: 'SQLite', icon: <SiSqlite className="text-blue-600 text-4xl" /> },
    { name: 'SQL Server', icon: <SiMicrosoftsqlserver className="text-red-600 text-4xl" /> }
];

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

const BASE_URL = config.BASE_URL;

const featuredProjects = [
    {
        name: 'Move',
        description: 'A movie catalog application where you can browse, search, and filter movies. Built with React and Tailwind CSS.',
        imageUrl: `${BASE_URL}img/project-move.png`,
        link: 'https://move-repo-v1.netlify.app/movie-catalog'
    },
    {
        name: 'Todo List',
        description: 'A task management app to help you organize and track your to-do items. Built with React, Redux, and Tailwind CSS.',
        imageUrl: `${BASE_URL}img/project-todo.png`,
        link: 'https://todo-repo-v1.netlify.app/'
    },
    {
        name: 'Digital Clock',
        description: 'A digital clock application that displays the current time with a sleek design. Built with React and styled with Tailwind CSS.',
        imageUrl: `${BASE_URL}img/project-digital-clock.png`,
        link: 'https://digital-clock-repo-v1.netlify.app/'
    },
    {
        name: 'Calculator',
        description: 'A simple calculator application with basic arithmetic functions. Developed using pure JavaScript, CSS, and HTML for a clean and responsive design.',
        imageUrl: `${BASE_URL}img/project-calculator.png`,
        link: 'https://calculator-repo-v1.netlify.app/'
    },
    {
        name: 'Weather App',
        description: 'A modern weather application built with React JS, Vite JS, Redux, Redux Toolkit, React Router, and styled with Tailwind CSS. It fetches weather data from OpenWeatherMap API, providing real-time updates and forecasts.',
        imageUrl: `${BASE_URL}img/project-weather.png`,
        link: 'https://weather-repo-v1.netlify.app/'
    },
    {
        name: 'English Helper',
        description: 'A web application designed to assist users in learning English. Built with React JS, Vite JS, Tailwind CSS, Redux, Redux Toolkit, and React Router, this app utilizes the Cloud Translation API and api.dictionaryapi.dev to provide translation and dictionary services for an enhanced learning experience.',
        imageUrl: `${BASE_URL}img/project-englishHelper.png`,
        link: 'https://englishhelper-repo-v1.netlify.app/'
    },
    {
        name: 'Attendance Control',
        description: 'Attendance control and incident management platform developed for the company. Implemented with React JS + Vite JS + React Router + Redux and backend in PHP with SQL Server.',
        imageUrl: `${BASE_URL}img/project-ac.png`,
        link: '#',
        note: 'This project is not publicly available as it was developed on the company\'s internal servers.'
    },
    {
        name: 'Omnia',
        description: 'Tool for monthly performance tracking of operators and salespeople. Developed with plain JavaScript and jQuery for the frontend, and PHP with SQL Server for the backend.',
        imageUrl: `${BASE_URL}img/project-omnia.png`,
        link: '#',
        note: 'This project is not publicly available as it was developed on the company\'s internal servers.'
    }
    // Añade más proyectos aquí si es necesario
];

const HomePage = () => {

    return (
        <MainLayout>
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
            >
                <div>
                    {/* Introducción breve */}
                    <section id="intro" className="text-center py-12 px-4">
                        <motion.h1
                            className="text-3xl sm:text-4xl md:text-5xl font-bold"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <ReactTyped
                                strings={[
                                    "Hello, I'm Jorge Alvarado",
                                    "FullStack Web Developer",
                                    "Web developer with experience in modern technologies."
                                ]}
                                typeSpeed={50}
                                backSpeed={25}
                                backDelay={1000}
                                startDelay={500}
                                smartBackspace
                                loop
                            />
                        </motion.h1>

                        <motion.p
                            className="mt-4 text-lg sm:text-xl md:text-3xl"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            <ReactTyped
                                strings={["Welcome to my portfolio!"]}
                                typeSpeed={50}
                                backSpeed={25}
                                backDelay={1000}
                                startDelay={2700}
                            />
                        </motion.p>
                    </section>

                    {/* Foto de perfil */}
                    <section id="profile-pic" className="flex justify-center mt-8">
                        <div className="profile-card">
                            <div className="profile-card-inner">
                                <div className="profile-card-front">
                                    <motion.img
                                        src={`${BASE_URL}img/perfil.png`}
                                        alt="Profile Picture"
                                        className="rounded-full w-32 h-32 shadow-lg"
                                        initial={{ scale: 0.8 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </div>
                                <div className="profile-card-back">
                                    <img
                                        src={`${BASE_URL}img/linkelin-qr.png`}
                                        alt="Backside"
                                        className="p-1"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Resumen de habilidades */}
                    <section id="skills" className="mt-12 py-8">
                        <h2 className="text-3xl font-semibold text-center mb-3">Skills</h2>
                        <motion.div
                            className="max-w-7xl mx-auto px-4 lg:px-8"
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4">
                                {skills.map((skill, index) => (
                                    <div key={index} className="bg-lightColorHF dark:bg-darkColorHF skill-card p-4 rounded-lg shadow-lg flex flex-col items-center transform transition-transform duration-300 hover:scale-105">
                                        <div className="icon-container mb-2">
                                            {skill.icon}
                                        </div>
                                        <h3 className="text-xl cursor-default">{skill.name}</h3>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </section>

                    {/* Proyectos destacados */}
                    <section id="featured-projects" className="mt-12 py-8 px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-semibold text-center mb-6">Featured Projects</h2>
                        <div className="max-w-7xl mx-auto px-4 lg:px-8">
                            <motion.div
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                {featuredProjects.map((project, index) => (
                                    <div key={index} className="dark:bg-darkColorHF bg-lightColorHF p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                                        <div className="relative w-full h-48 sm:h-56 lg:h-64">
                                            <img src={project.imageUrl} alt={`${project.name} Project Image`} className="absolute inset-0 w-full h-full object-cover rounded-border transition-opacity duration-300 hover:opacity-80" />
                                        </div>
                                        <div className="p-4">
                                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-2">{project.name}</h3>
                                            <p className="text-gray-600 dark:text-gray-400 mt-1">{project.description}</p>
                                            {project.link ? (
                                                <a href={project.link} className="text-blue-500 hover:underline mt-2 inline-block">See more</a>
                                            ) : (
                                                <p className="mt-3 text-gray-600 dark:text-gray-400">
                                                    <strong className="text-red-500 font-semibold">Note:</strong> {project.note}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </section>



                    {/* Llamada a la acción */}
                    <section id="call-to-action" className="text-center mt-12 py-8">
                        <div className="container mx-auto px-4">
                            <a
                                href="/Portfolio/contact"
                                className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-300 focus:ring-indigo-500"
                            >
                                Contact me
                            </a>
                        </div>
                    </section>

                    {/* Testimonios */}
                    {/* <section id="testimonials" className="ml-6 mr-6 mt-12 py-8">
                    <h2 className="text-3xl font-semibold text-center mb-3">Testimonials</h2>
                    <motion.div
                        className="flex space-x-4"
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="bg-lightColorHF dark:bg-darkColorHF testimonial p-6 rounded shadow-lg w-80 transform transition-transform duration-300 hover:scale-105">
                            <p>"[Tu Nombre] es un excelente desarrollador, muy profesional y con gran atención al detalle."</p>
                            <p className="mt-2 font-semibold">- Cliente 1</p>
                        </div>
                        <div className="bg-lightColorHF dark:bg-darkColorHF testimonial p-6 rounded shadow-lg w-80 transform transition-transform duration-300 hover:scale-105">
                            <p>"Trabajar con [Tu Nombre] ha sido una experiencia increíble. Muy recomendable."</p>
                            <p className="mt-2 font-semibold">- Cliente 2</p>
                        </div>
                    </motion.div>
                </section> */}

                </div>
            </motion.div>
        </MainLayout>
    );
};

export default HomePage;
