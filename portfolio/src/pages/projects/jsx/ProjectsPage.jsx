import MainLayout from '@layouts/jsx/MainLayout';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const projects = [
    {
        id: 1,
        title: 'School Management System',
        description: 'Developed with React and Node.js to automate and manage the daily operations of an educational institution.',
        technologies: ['React', 'Node.js', 'MongoDB'],
        imageUrl: '/images/school-management.png',
        demoUrl: 'https://demo-school-management.com',
        repoUrl: 'https://github.com/user/school-management',
    },
    {
        id: 2,
        title: 'E-Commerce Application',
        description: 'A complete e-commerce platform with functionalities including shopping cart, payment gateway, and admin panel.',
        technologies: ['React', 'Tailwind CSS', 'REST API'],
        imageUrl: '/images/e-commerce.png',
        demoUrl: 'https://demo-e-commerce.com',
        repoUrl: 'https://github.com/user/e-commerce',
    },
    {
        id: 3,
        title: 'Real-Time Task Management',
        description: 'Real-time task management application with notifications and instant updates using WebSockets.',
        technologies: ['React', 'Socket.io', 'Express'],
        imageUrl: '/images/task-manager.png',
        demoUrl: 'https://demo-task-manager.com',
        repoUrl: 'https://github.com/user/task-manager',
    },
    {
        id: 4,
        title: 'Personal Blog Application',
        description: 'A personal blog with features for article publishing, commenting, and content management.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
        imageUrl: '/images/personal-blog.png',
        demoUrl: 'https://demo-personal-blog.com',
        repoUrl: 'https://github.com/user/personal-blog',
    },
    {
        id: 5,
        title: 'Data Analysis Dashboard',
        description: 'Interactive dashboard for data visualization using charts and tables, ideal for business data analysis.',
        technologies: ['React', 'D3.js', 'Chart.js'],
        imageUrl: '/images/data-dashboard.png',
        demoUrl: 'https://demo-data-dashboard.com',
        repoUrl: 'https://github.com/user/data-dashboard',
    },
];

const ProjectsPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
        }, 5000); // Change project every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
    };

    return (
        <MainLayout>
            <section className="py-10 bg-light-background dark:bg-dark-background">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-10">
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 0.5 }}
                            className="text-4xl font-bold text-light-text dark:text-dark-text mb-4"
                        >
                            Featured Projects
                        </motion.h1>
                        <p className="text-lg text-light-subtext dark:text-dark-subtext">
                            Discover some of the most notable projects I have worked on. Each project showcases different aspects of my experience and skills.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="overflow-hidden">
                            <motion.div
                                key={projects[currentIndex].id}
                                initial={{ opacity: 0, x: 100 }} 
                                animate={{ opacity: 1, x: 0 }} 
                                exit={{ opacity: 0, x: -100 }} 
                                transition={{ duration: 0.5 }}
                                className="dark:bg-darkColorHF bg-lightColorHF p-6 rounded-lg shadow-lg"
                            >
                                <img 
                                    src={projects[currentIndex].imageUrl} 
                                    alt={projects[currentIndex].title} 
                                    className="dark:bg-darkColorHover bg-lightColorHover h-64 w-full object-cover rounded-md mb-4"
                                />
                                <h2 className="text-2xl font-semibold mb-2 text-light-text dark:text-dark-text">{projects[currentIndex].title}</h2>
                                <p className="text-light-subtext dark:text-dark-subtext mb-4">{projects[currentIndex].description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {projects[currentIndex].technologies.map((tech, index) => (
                                        <span 
                                            key={index} 
                                            className="dark:bg-darkColorHover bg-lightColorHover text-sm text-light-tag-text dark:text-dark-tag-text px-2 py-1 rounded"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-between items-center">
                                    <a href={projects[currentIndex].demoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                                        View Demo
                                    </a>
                                    <a href={projects[currentIndex].repoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                                        View Code
                                    </a>
                                </div>
                            </motion.div>
                        </div>

                        {/* Carousel Controls */}
                        <button 
                            onClick={handlePrev} 
                            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-light-control dark:bg-dark-control p-2 rounded-full shadow-lg focus:outline-none"
                        >
                            <FaArrowLeft className="text-light-control-text dark:text-dark-control-text" />
                        </button>
                        <button 
                            onClick={handleNext} 
                            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-light-control dark:bg-dark-control p-2 rounded-full shadow-lg focus:outline-none"
                        >
                            <FaArrowRight className="text-light-control-text dark:text-dark-control-text" />
                        </button>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default ProjectsPage;
