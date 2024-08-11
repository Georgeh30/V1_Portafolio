import MainLayout from '@layouts/jsx/MainLayout';
import { FaBriefcase, FaHeart, FaQuoteLeft, FaCode } from 'react-icons/fa';
import { SiDjango } from 'react-icons/si';
import { IoMdMail } from 'react-icons/io';

import config from '@config/config';

const AboutPage = () => {
    const BASE_URL = config.BASE_URL;

    return (
        <MainLayout>
            <section id="about" className="py-12 px-6 bg-lightColor dark:bg-darkColor text-darkColor dark:text-lightColor">
                <div className="container mx-auto">
                    {/* Hero Section */}
                    <div className="flex flex-col items-center text-center mb-12">
                        <img src={`${BASE_URL}img/perfil.png`} alt="Perfil" className="w-32 h-32 rounded-full mb-4 border-4 border-blue-500" />
                        <h1 className="text-4xl font-bold mb-2">¡Hola! Soy Jorge Alvarado</h1>
                        <p className="text-lg max-w-lg mx-auto">
                            Soy un desarrollador apasionado por la tecnología y la innovación. Mi carrera me ha llevado a explorar diversas áreas del desarrollo web, y siempre estoy buscando nuevos desafíos.
                        </p>
                    </div>

                    {/* Historia Personal y Profesional */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold mb-6 flex items-center">
                            <FaBriefcase className="mr-3 text-amber-800" /> Mi Historia
                        </h2>
                        <div className="bg-lightColorHF dark:bg-darkColorHF p-4 rounded-lg shadow-md">
                            <p className="text-base leading-relaxed">
                                Desde mis primeros pasos en la tecnología, he estado motivado por la resolución de problemas y la creación de soluciones impactantes. Mi trayectoria incluye una variedad de roles y proyectos que han moldeado mi enfoque profesional y personal.
                            </p>
                        </div>
                    </section>

                    {/* Valores y Filosofía de Trabajo */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold mb-6 flex items-center">
                            <FaHeart className="mr-3 text-red-500" /> Valores y Filosofía
                        </h2>
                        <div className="bg-lightColorHF dark:bg-darkColorHF p-4 rounded-lg shadow-md">
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>Integridad:</strong> Siempre trabajo con honestidad y transparencia.</li>
                                <li><strong>Colaboración:</strong> Creo en el poder del trabajo en equipo para alcanzar objetivos comunes.</li>
                                <li><strong>Innovación:</strong> Me esfuerzo por encontrar soluciones creativas y eficientes.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Habilidades y Proyectos */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold mb-6 flex items-center">
                            <FaCode className="mr-3 text-yellow-500" /> Lo que Hago
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-4 bg-lightColorHF dark:bg-darkColorHF rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-2">Desarrollo Web</h3>
                                <p>
                                    Tengo experiencia en frontend y backend, trabajando con tecnologías como React, Node.js y PHP.
                                </p>
                            </div>
                            <div className="p-4 bg-lightColorHF dark:bg-darkColorHF rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-2">Proyectos Destacados</h3>
                                <p>
                                    He trabajado en diversos proyectos que van desde aplicaciones empresariales hasta herramientas de productividad personal.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Testimonios */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold mb-6 flex items-center">
                            <FaQuoteLeft className="mr-3 text-gray-500" /> Testimonios
                        </h2>
                        <div className="bg-lightColorHF dark:bg-darkColorHF p-4 rounded-lg shadow-md">
                            <p className="text-base">
                                "Jorge Alvarado ha demostrado ser un profesional excepcional en cada proyecto. Su habilidad para resolver problemas y su dedicación son incomparables." - [Nombre del Testimonio]
                            </p>
                        </div>
                    </section>

                    {/* Contacto y Redes Sociales */}
                    <section>
                        <h2 className="text-3xl font-semibold mb-6 flex items-center">
                            <IoMdMail className="mr-3 text-blue-500" /> Conéctemos
                        </h2>
                        <div className="bg-lightColorHF dark:bg-darkColorHF p-4 rounded-lg shadow-md">
                            <p className="text-base">
                                Si deseas ponerte en contacto conmigo, no dudes en enviarme un correo a <a href="mailto:example@example.com" className="text-blue-500">example@example.com</a> o seguirme en mis redes sociales.
                            </p>
                        </div>
                    </section>
                </div>
            </section>
        </MainLayout>
    );
};

export default AboutPage;
