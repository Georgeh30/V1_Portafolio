import MainLayout from '@layouts/jsx/MainLayout';
import { FaBriefcase, FaGraduationCap, FaCogs, FaCertificate, FaProjectDiagram, FaLanguage, FaEnvelope, FaPython, FaCode, FaNetworkWired, FaJs, FaReact, FaPhp, FaJava, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiDjango } from 'react-icons/si';

import config from '@config/config';

// Ejemplo de uso
const CurriculumPage = () => {
    const BASE_URL = config.BASE_URL;

    return (
        <MainLayout>
            <section id="curriculum" className="py-8 px-4 sm:px-6 lg:px-8 bg-lightColor dark:bg-darkColor text-darkColor dark:text-lightColor">
                <div className="container mx-auto">
                    <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">Curriculum Vitae</h1>
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-8 flex justify-center">
                            <a
                                href={`${BASE_URL}files/cv.pdf`}
                                download="Curriculum_Vitae.pdf"
                                className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-300"
                            >
                                Descargar CV en PDF
                            </a>
                        </div>

                        <section className="mb-8">
                            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 border-b-2 border-blue-500 pb-2 flex items-center">
                                <FaBriefcase className="mr-2" /> Resumen Profesional
                            </h2>
                            <div className="space-y-4">
                                <div className="dark:bg-darkColorHF bg-lightColorHF p-4 rounded-lg shadow-md">
                                    <p className="text-base sm:text-lg leading-relaxed">
                                        Soy un desarrollador Full Stack con amplia experiencia en liderazgo de equipos y en la creación de 
                                        soluciones tecnológicas innovadoras. Mi experiencia abarca el uso de tecnologías clave como 
                                        JavaScript (incluyendo Vanilla JS), React.js, Vite.js, Redux, PHP y SQL Server. He gestionado 
                                        y desplegado aplicaciones en servidores IIS, demostrando habilidades en la optimización del rendimiento 
                                        y la resolución de problemas complejos. Mi enfoque está en proporcionar soluciones eficientes y de 
                                        alta calidad que faciliten el éxito de los proyectos y mejoren la experiencia del usuario.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 border-b-2 border-blue-500 pb-2 flex items-center">
                                <FaBriefcase className="mr-2" /> Experiencia Laboral
                            </h2>
                            <div className="space-y-4">
                                <div className="dark:bg-darkColorHF bg-lightColorHF p-4 rounded-lg shadow-md">
                                    <h3 className="text-lg sm:text-xl font-semibold">Senior IT Developer, Software Engineer</h3>
                                    <p className="text-gray-700 dark:text-gray-300">BCM LATAM, DSV Global Transport and Logistics, Ciudad de México</p>
                                    <p className="text-gray-700 dark:text-gray-300">Septiembre 2023 — Actualidad</p>
                                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                                        Dirijo un equipo de desarrollo en la creación, configuración e implementación de aplicaciones web. Mi enfoque está en optimizar procesos internos mediante el uso de herramientas avanzadas y servidores locales para el despliegue. Mi rol también implica proporcionar soporte continuo y asegurar la alta disponibilidad y rendimiento de las aplicaciones.
                                    </p>
                                </div>

                                <div className="dark:bg-darkColorHF bg-lightColorHF p-4 rounded-lg shadow-md">
                                    <h3 className="text-lg sm:text-xl font-semibold">IT Developer, Software Engineer</h3>
                                    <p className="text-gray-700 dark:text-gray-300">BCM LATAM, DSV Global Transport and Logistics, Ciudad de México</p>
                                    <p className="text-gray-700 dark:text-gray-300">Enero 2021 — Agosto 2023</p>
                                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                                        Desarrollo, configuro e implemento aplicaciones web para mejorar los procesos en todas las áreas de la empresa. Mi responsabilidad incluye el soporte técnico y el mantenimiento de las aplicaciones, asegurando su funcionalidad y eficiencia a través de diversas herramientas y servidores locales para el despliegue.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 border-b-2 border-blue-500 pb-2 flex items-center">
                                <FaGraduationCap className="mr-2" /> Educación
                            </h2>
                            <div className="space-y-4">
                                <div className="dark:bg-darkColorHF bg-lightColorHF p-4 rounded-lg shadow-md">
                                    <h3 className="text-lg sm:text-xl font-semibold">Licenciatura en Ingeniería en Sistemas Computacionales</h3>
                                    <p className="text-gray-700 dark:text-gray-300">Tecnológico de Estudios Superiores de Ecatepec, Estado de México</p>
                                    <p className="text-gray-700 dark:text-gray-300">2016 — 2020</p>
                                    <p className="text-gray-700 dark:text-gray-300 mt-2">
                                        Graduado con honores, con una sólida formación en tecnologías de la información. Participé en proyectos de investigación, desarrollando habilidades en liderazgo, trabajo en equipo y resolución de problemas complejos.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 border-b-2 border-blue-500 pb-2 flex items-center">
                                <FaCogs className="mr-2" /> Habilidades
                            </h2>
                            <div className="space-y-4">
                                <div className="dark:bg-darkColorHF bg-lightColorHF p-4 rounded-lg shadow-md">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {/* Desarrollo Frontend */}
                                        <div className="flex items-center space-x-4">
                                            <div className="w-12 h-12 flex items-center justify-center bg-blue-200 rounded-full">
                                                <FaJs className="text-yellow-500 text-3xl" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg font-semibold">JavaScript</h3>
                                                <div className="relative pt-1">
                                                    <div className="flex items-center justify-between text-xs font-semibold">
                                                        <span>Intermedio</span>
                                                    </div>
                                                    <div className="flex h-2 mb-2 overflow-hidden text-xs bg-gray-200 rounded">
                                                        <div style={{ width: '60%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-4">
                                            <div className="w-12 h-12 flex items-center justify-center bg-blue-200 rounded-full">
                                                <FaReact className="text-blue-500 text-3xl" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg font-semibold">React JS</h3>
                                                <div className="relative pt-1">
                                                    <div className="flex items-center justify-between text-xs font-semibold">
                                                        <span>Intermedio</span>
                                                    </div>
                                                    <div className="flex h-2 mb-2 overflow-hidden text-xs bg-gray-200 rounded">
                                                        <div style={{ width: '50%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-4">
                                            <div className="w-12 h-12 flex items-center justify-center bg-green-200 rounded-full">
                                                <FaPython className="text-green-500 text-3xl" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg font-semibold">Python</h3>
                                                <div className="relative pt-1">
                                                    <div className="flex items-center justify-between text-xs font-semibold">
                                                        <span>Básico</span>
                                                    </div>
                                                    <div className="flex h-2 mb-2 overflow-hidden text-xs bg-gray-200 rounded">
                                                        <div style={{ width: '20%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Add more skills here following the same format */}
                                        {/* Desarrollo Backend */}
                                        <div className="flex items-center space-x-4">
                                            <div className="w-12 h-12 flex items-center justify-center bg-red-200 rounded-full">
                                                <FaJava className="text-red-500 text-3xl" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg font-semibold">Java</h3>
                                                <div className="relative pt-1">
                                                    <div className="flex items-center justify-between text-xs font-semibold">
                                                        <span>Intermedio</span>
                                                    </div>
                                                    <div className="flex h-2 mb-2 overflow-hidden text-xs bg-gray-200 rounded">
                                                        <div style={{ width: '40%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-4">
                                            <div className="w-12 h-12 flex items-center justify-center bg-blue-200 rounded-full">
                                                <FaNodeJs className="text-green-500 text-3xl" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg font-semibold">Node.js</h3>
                                                <div className="relative pt-1">
                                                    <div className="flex items-center justify-between text-xs font-semibold">
                                                        <span>Intermedio</span>
                                                    </div>
                                                    <div className="flex h-2 mb-2 overflow-hidden text-xs bg-gray-200 rounded">
                                                        <div style={{ width: '40%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-4">
                                            <div className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full">
                                                <FaDatabase className="text-gray-700 text-3xl" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg font-semibold">SQL Server</h3>
                                                <div className="relative pt-1">
                                                    <div className="flex items-center justify-between text-xs font-semibold">
                                                        <span>Intermedio</span>
                                                    </div>
                                                    <div className="flex h-2 mb-2 overflow-hidden text-xs bg-gray-200 rounded">
                                                        <div style={{ width: '50%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-700"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-4">
                                            <div className="w-12 h-12 flex items-center justify-center bg-blue-200 rounded-full">
                                                <SiDjango className="text-blue-700 text-3xl" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg font-semibold">Django</h3>
                                                <div className="relative pt-1">
                                                    <div className="flex items-center justify-between text-xs font-semibold">
                                                        <span>Básico</span>
                                                    </div>
                                                    <div className="flex h-2 mb-2 overflow-hidden text-xs bg-gray-200 rounded">
                                                        <div style={{ width: '20%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-700"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Otras Habilidades */}
                                        <div className="flex items-center space-x-4">
                                            <div className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full">
                                                <FaCode className="text-gray-700 text-3xl" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg font-semibold">JQuery</h3>
                                                <div className="relative pt-1">
                                                    <div className="flex items-center justify-between text-xs font-semibold">
                                                        <span>Intermedio</span>
                                                    </div>
                                                    <div className="flex h-2 mb-2 overflow-hidden text-xs bg-gray-200 rounded">
                                                        <div style={{ width: '50%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-600"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Repeat similar blocks for other skills */}
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 border-b-2 border-blue-500 pb-2 flex items-center">
                                <FaCertificate className="mr-2" /> Cursos
                            </h2>
                            <div className="space-y-4">
                                <div className="dark:bg-darkColorHF bg-lightColorHF p-6 rounded-lg shadow-md">
                                    <div className="flex items-start space-x-4">
                                        <FaPython className="text-blue-500 text-2xl" />
                                        <div>
                                            <h3 className="text-lg font-semibold mb-1">Python</h3>
                                            <p className="text-gray-700 dark:text-gray-300">Platzi, YT</p>
                                            <p className="text-gray-600 dark:text-gray-400">Febrero 2021 — Febrero 2022</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="dark:bg-darkColorHF bg-lightColorHF p-6 rounded-lg shadow-md">
                                    <div className="flex items-start space-x-4">
                                        <FaCode className="text-green-500 text-2xl" />
                                        <div>
                                            <h3 className="text-lg font-semibold mb-1">Django</h3>
                                            <p className="text-gray-700 dark:text-gray-300">Platzi, YT</p>
                                            <p className="text-gray-600 dark:text-gray-400">Febrero 2022 — Junio 2022</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="dark:bg-darkColorHF bg-lightColorHF p-6 rounded-lg shadow-md">
                                    <div className="flex items-start space-x-4">
                                        <FaCode className="text-green-500 text-2xl" />
                                        <div>
                                            <h3 className="text-lg font-semibold mb-1">Django Rest Framework</h3>
                                            <p className="text-gray-700 dark:text-gray-300">Platzi, YT</p>
                                            <p className="text-gray-600 dark:text-gray-400">Febrero 2022 — Febrero 2023</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="dark:bg-darkColorHF bg-lightColorHF p-6 rounded-lg shadow-md">
                                    <div className="flex items-start space-x-4">
                                        <FaNetworkWired className="text-orange-500 text-2xl" />
                                        <div>
                                            <h3 className="text-lg font-semibold mb-1">Cisco Nivel 1 y 2</h3>
                                            <p className="text-gray-700 dark:text-gray-300">Cisco.com</p>
                                            <p className="text-gray-600 dark:text-gray-400">Marzo 2018 — Octubre 2019</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 border-b-2 border-blue-500 pb-2 flex items-center">
                                <FaProjectDiagram className="mr-2" /> Proyectos destacados
                            </h2>
                            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                {/* Proyecto 1 */}
                                <div className="dark:bg-darkColorHF bg-lightColorHF p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                                    <a href="https://todo-repo-v1.netlify.app/" className="block mb-3">
                                        <img src={`${BASE_URL}img/project-todo.png`} alt="To Do List" className="w-full h-32 object-cover rounded-md" />
                                    </a>
                                    <h3 className="text-base sm:text-lg font-semibold mb-1">
                                        <a href="https://todo-repo-v1.netlify.app/" className="text-blue-600 hover:underline">To Do List</a>
                                    </h3>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                                        Aplicación de lista de tareas construida únicamente con React JS. Permite agregar, editar y eliminar tareas de manera eficiente y moderna.
                                    </p>
                                </div>
                                {/* Proyecto 2 */}
                                <div className="dark:bg-darkColorHF bg-lightColorHF p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                                    <a href="https://move-repo-v1.netlify.app/movie-catalog" className="block mb-3">
                                        <img src={`${BASE_URL}img/project-move.png`} alt="Lista de Películas Recientes" className="w-full h-32 object-cover rounded-md" />
                                    </a>
                                    <h3 className="text-base sm:text-lg font-semibold mb-1">
                                        <a href="https://move-repo-v1.netlify.app/movie-catalog" className="text-blue-600 hover:underline">Move</a>
                                    </h3>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                                        Aplicación de catálogo de solo información sobre películas alimentada a través de una API. Desarrollada con React JS, Vite JS, React Router, Redux y Redux Toolkit.
                                    </p>
                                </div>
                                {/* Proyecto 3 */}
                                <div className="dark:bg-darkColorHF bg-lightColorHF p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                                    <a href="https://digital-clock-repo-v1.netlify.app/" className="block mb-3">
                                        <img src={`${BASE_URL}img/project-digital-clock.png`} alt="Reloj Digital" className="w-full h-32 object-cover rounded-md" />
                                    </a>
                                    <h3 className="text-base sm:text-lg font-semibold mb-1">
                                        <a href="https://digital-clock-repo-v1.netlify.app/" className="text-blue-600 hover:underline">Reloj Digital</a>
                                    </h3>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                                        Reloj digital realizado con JavaScript puro. Muestra la hora actual, minuto y segundo, y se actualiza en tiempo real.
                                    </p>
                                </div>
                                {/* Proyecto 4 (Interno) */}
                                <div className="dark:bg-darkColorHF bg-lightColorHF p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                                    <img src={`${BASE_URL}img/project-ac.png`} alt="Attendance Control" className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-md mb-3" />
                                    <h3 className="text-base sm:text-lg font-semibold mb-1">Attendance Control</h3>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                                        Plataforma de control de asistencia y gestión de incidencias desarrollada para la empresa. Implementada con React JS + Vite JS + React Router + Redux y backend en PHP con SQL Server.
                                    </p>
                                </div>
                                {/* Proyecto 5 (Interno) */}
                                <div className="dark:bg-darkColorHF bg-lightColorHF p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                                    <img src={`${BASE_URL}img/project-omnia.png`} alt="Omnia" className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-md mb-3" />
                                    <h3 className="text-base sm:text-lg font-semibold mb-1">Omnia</h3>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                                        Herramienta para el control de rendimiento mensual de operadores y vendedores. Desarrollada con JavaScript puro y jQuery para el frontend, y PHP con SQL Server para el backend.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 border-b-2 border-blue-500 pb-2 flex items-center">
                                <FaLanguage className="mr-2" /> Idiomas
                            </h2>
                            <div className="space-y-4">
                                <div className="dark:bg-darkColorHF bg-lightColorHF p-4 rounded-lg shadow-md">
                                    <ul className="list-disc list-inside space-y-2">
                                        <li>Español (Nativo)</li>
                                        <li>Inglés (Básico)</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 border-b-2 border-blue-500 pb-2 flex items-center">
                                <FaEnvelope className="mr-2" /> Contacto
                            </h2>
                            <div className="dark:bg-darkColorHF bg-lightColorHF p-4 rounded-lg shadow-md">
                                <p className="text-gray-700 dark:text-gray-300">
                                    Email: <a href="mailto:johncrotf2@gmail.com" className="text-blue-500 hover:underline">johncrotf2@gmail.com</a>
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default CurriculumPage;
