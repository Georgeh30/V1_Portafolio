import MainLayout from '@layouts/jsx/MainLayout';
import { FaBriefcase, FaHeart, FaQuoteLeft, FaCode } from 'react-icons/fa';
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
                        <img src={`${BASE_URL}img/perfil.png`} alt="Profile" className="w-32 h-32 rounded-full mb-4 border-4 border-blue-500" />
                        <h1 className="text-4xl font-bold mb-2">Hello! I'm Jorge Alvarado</h1>
                        <p className="text-lg max-w-lg mx-auto">
                            I'm a developer passionate about technology and innovation. My career has led me to explore various areas of web development, and I'm always looking for new challenges.
                        </p>
                    </div>

                    {/* Personal and Professional Story */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold mb-6 flex items-center">
                            <FaBriefcase className="mr-3 text-amber-800" /> My Story
                        </h2>
                        <div className="bg-lightColorHF dark:bg-darkColorHF p-4 rounded-lg shadow-md">
                            <p className="text-base leading-relaxed">
                                From my early steps in technology, I've been driven by problem-solving and creating impactful solutions. My journey includes a variety of roles and projects that have shaped my professional and personal approach.
                            </p>
                        </div>
                    </section>

                    {/* Values and Work Philosophy */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold mb-6 flex items-center">
                            <FaHeart className="mr-3 text-red-500" /> Values and Philosophy
                        </h2>
                        <div className="bg-lightColorHF dark:bg-darkColorHF p-4 rounded-lg shadow-md">
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>Integrity:</strong> I always work with honesty and transparency.</li>
                                <li><strong>Collaboration:</strong> I believe in the power of teamwork to achieve common goals.</li>
                                <li><strong>Innovation:</strong> I strive to find creative and efficient solutions.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Skills and Projects */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold mb-6 flex items-center">
                            <FaCode className="mr-3 text-yellow-500" /> What I Do
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-4 bg-lightColorHF dark:bg-darkColorHF rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                                <p>
                                    I have experience in both frontend and backend, working with technologies like React, Node.js, and PHP.
                                </p>
                            </div>
                            <div className="p-4 bg-lightColorHF dark:bg-darkColorHF rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-2">Featured Projects</h3>
                                <p>
                                    I've worked on various projects ranging from enterprise applications to personal productivity tools.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Testimonials */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold mb-6 flex items-center">
                            <FaQuoteLeft className="mr-3 text-gray-500" /> Testimonials
                        </h2>
                        <div className="bg-lightColorHF dark:bg-darkColorHF p-4 rounded-lg shadow-md">
                            <p className="text-base">
                                "Jorge Alvarado has proven to be an exceptional professional in every project. His problem-solving ability and dedication are unmatched." - [Testimonial Name]
                            </p>
                        </div>
                    </section>

                    {/* Contact and Social Media */}
                    <section>
                        <h2 className="text-3xl font-semibold mb-6 flex items-center">
                            <IoMdMail className="mr-3 text-blue-500" /> Let's Connect
                        </h2>
                        <div className="bg-lightColorHF dark:bg-darkColorHF p-4 rounded-lg shadow-md">
                            <p className="text-base">
                                If you'd like to get in touch with me, feel free to send me an email at <a href="mailto:johncrotf2@gmail.com" className="text-blue-500">example@example.com</a> or follow me on my social networks.
                            </p>
                        </div>
                    </section>
                </div>
            </section>
        </MainLayout>
    );
};

export default AboutPage;
