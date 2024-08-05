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
    { name: 'JQuery', icon: <SiJquery className="text-blue-600 text-4xl" /> },
    { name: 'Java', icon: <FaJava className="text-red-600 text-4xl" /> },
    { name: 'Python', icon: <SiPython className="text-yellow-500 text-4xl" /> },
    { name: 'Django', icon: <SiDjango className="text-green-600 text-4xl" /> },
    { name: 'REST API', icon: <FaServer className="text-blue-500 text-4xl" /> },
    { name: 'Tailwind', icon: <SiTailwindcss className="text-blue-500 text-4xl" /> },
    { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-600 text-4xl" /> },
    { name: 'MUI', icon: <SiMui className="text-blue-600 text-4xl" /> },
    { name: 'Webpack', icon: <SiWebpack className="text-blue-600 text-4xl" /> },
    { name: 'Babel', icon: <SiBabel className="text-yellow-500 text-4xl" /> },
    { name: 'MySQL', icon: <SiMysql className="text-blue-600 text-4xl" /> },
    { name: 'SQLite', icon: <SiSqlite className="text-blue-600 text-4xl" /> },
    { name: 'SQL Server', icon: <SiMicrosoftsqlserver className="text-red-600 text-4xl" /> }
];

const HomePage = () => {
    const BASE_URL = config.BASE_URL;

    return (
        <MainLayout>
            <div>
                {/* Introducción breve */}
                <section id="intro" className="text-center py-12">
                    <motion.h1
                        className="text-4xl font-bold"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <ReactTyped
                            strings={[
                                "Hello, I'm Jorge Alvarado Garcia.",
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
                        className="mt-4 text-xl"
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
                    <h2 className="text-2xl font-semibold text-center mb-3">Skills</h2>
                    <motion.div
                        className="max-w-7xl mx-auto px-4"
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-4">
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
                <section id="featured-projects" className="ml-6 mr-6 mt-12 py-8">
                    <h2 className="text-2xl font-semibold text-center mb-3">Featured Projects</h2>
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="bg-lightColorHF dark:bg-darkColorHF rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                            <div className="relative h-80"> {/* Cambia el tamaño de altura aquí para hacerlo más cuadrado */}
                                <img src={`${BASE_URL}img/project-move.png`} alt="Project Image 2" className="absolute inset-0 w-full h-full object-cover" />
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-2">Proyecto 2</h3>
                                <p className="text-gray-600 dark:text-gray-400 mt-1">Brief description of the project goes here.</p>
                                <a href="/projects/project-2" className="text-blue-500 hover:underline mt-2 inline-block">See more</a>
                            </div>
                        </div>
                        <div className="bg-lightColorHF dark:bg-darkColorHF rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                            <div className="relative h-80">
                                <img src={`${BASE_URL}img/project-todo.png`} alt="Project Image 1" className="absolute inset-0 w-full h-full object-cover" />
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-2">Proyecto 1</h3>
                                <p className="text-gray-600 dark:text-gray-400 mt-1">Brief description of the project goes here.</p>
                                <a href="/projects/project-1" className="text-blue-500 hover:underline mt-2 inline-block">See more</a>
                            </div>
                        </div>
                        <div className="bg-lightColorHF dark:bg-darkColorHF rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                            <div className="relative h-80">
                                <img src={`${BASE_URL}img/project-digital-clock.png`} alt="Project Image 2" className="absolute inset-0 w-full h-full object-cover" />
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-2">Proyecto 2</h3>
                                <p className="text-gray-600 dark:text-gray-400 mt-1">Brief description of the project goes here.</p>
                                <a href="/projects/project-2" className="text-blue-500 hover:underline mt-2 inline-block">See more</a>
                            </div>
                        </div>
                        {/* Añade más proyectos aquí */}
                    </motion.div>
                </section>


                {/* Llamada a la acción */}
                <section id="call-to-action" className="text-center mt-12 py-8">
                    <a href="/Portfolio/contact" className="px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition">Contact me</a>
                </section>

                {/* Testimonios */}
                <section id="testimonials" className="ml-6 mr-6 mt-12 py-8">
                    <h2 className="text-2xl font-semibold text-center mb-3">Testimonials</h2>
                    {/* <div className="overflow-hidden mt-4"> */}
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
                    {/* </div> */}
                </section>



            </div>
        </MainLayout>
    );
};

export default HomePage;
