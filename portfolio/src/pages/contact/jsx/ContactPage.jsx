import { useState, useEffect } from "react";
import MainLayout from '@layouts/jsx/MainLayout';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
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

// Validation schema using Yup
const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required'),
});

const ContactPage = () => {
    // State to manage form submission status
    const [formStatus, setFormStatus] = useState(null);

    // Effect to hide status message after 5 seconds
    useEffect(() => {
        if (formStatus) {
            const timer = setTimeout(() => {
                setFormStatus(null);
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [formStatus]);

    // Form submission handler
    const handleSubmit = async (values, { resetForm }) => {
        try {
            const response = await fetch('https://formspree.io/f/xpwarjvl', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            if (response.ok) {
                setFormStatus({ type: 'success', message: 'Your message has been sent successfully!' });
                resetForm();
            } else {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to submit the form');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setFormStatus({ type: 'error', message: 'There was an error sending your message. Please try again.' });
        }
    };

    return (
        <MainLayout>
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
            >
            <div className="p-6 max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold mb-4 text-center">Contact</h1>
                <p className="mb-6 text-center">I’m here to answer your questions! Fill out the form below or reach out via email.</p>

                <div className="p-6 bg-lightColorHF dark:bg-gray-800 rounded-lg shadow-lg">
                    <Formik
                        initialValues={{ name: '', email: '', message: '' }}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                                    <Field
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="mt-1 block w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 bg-gray-100 rounded-md shadow-sm focus:border-gray-600 dark:focus:border-gray-400 focus:ring focus:ring-gray-500 focus:ring-opacity-50"
                                    />
                                    <ErrorMessage name="name" component="div" className="text-red-600 dark:text-red-400 text-sm mt-1" />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                                    <Field
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="mt-1 block w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 bg-gray-100 rounded-md shadow-sm focus:border-gray-600 dark:focus:border-gray-400 focus:ring focus:ring-gray-500 focus:ring-opacity-50"
                                    />
                                    <ErrorMessage name="email" component="div" className="text-red-600 dark:text-red-400 text-sm mt-1" />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-gray-300">Message</label>
                                    <Field
                                        as="textarea"
                                        name="message"
                                        id="message"
                                        rows="4"
                                        className="mt-1 block w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 bg-gray-100 rounded-md shadow-sm focus:border-gray-600 dark:focus:border-gray-400 focus:ring focus:ring-gray-500 focus:ring-opacity-50"
                                    />
                                    <ErrorMessage name="message" component="div" className="text-red-600 dark:text-red-400 text-sm mt-1" />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Send
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>

                {formStatus && (
                    <div
                        className={`fixed bottom-4 right-4 p-4 rounded-md shadow-lg text-white ${formStatus.type === 'success'
                            ? 'bg-green-600 dark:bg-green-700'
                            : formStatus.type === 'error'
                                ? 'bg-red-600 dark:bg-red-700'
                                : 'bg-orange-600 dark:bg-orange-700'
                        }`}
                    >
                        {formStatus.message}
                    </div>
                )}

                <div className="mt-8">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Other Contact Information</h2>
                    <p className="mt-2">Email: <a href="mailto:johncrotf2@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">johncrotf2@gmail.com</a></p>
                </div>
            </div>
            </motion.div>
        </MainLayout>
    );
};

export default ContactPage;
