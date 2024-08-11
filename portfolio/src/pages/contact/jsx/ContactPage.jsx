import { useState, useEffect } from "react";
import MainLayout from '@layouts/jsx/MainLayout';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Definición del esquema de validación con Yup
const validationSchema = Yup.object({
    name: Yup.string().required('El nombre es obligatorio'),
    email: Yup.string().email('El correo electrónico es inválido').required('El correo electrónico es obligatorio'),
    message: Yup.string().required('El mensaje es obligatorio'),
});

const ContactPage = () => {
    // Estado para manejar el estado del formulario
    const [formStatus, setFormStatus] = useState(null);

    // Efecto para ocultar el mensaje después de 5 segundos
    useEffect(() => {
        if (formStatus) {
            const timer = setTimeout(() => {
                setFormStatus(null);
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [formStatus]);

    // Manejo del envío del formulario
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
                setFormStatus({ type: 'success', message: '¡Tu mensaje ha sido enviado con éxito!' });
                resetForm();
            } else {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Error al enviar el formulario');
            }
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            setFormStatus({ type: 'error', message: 'Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.' });
        }
    };

    return (
        <MainLayout>
            <div className="p-6 max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold mb-4 text-center">Contacto</h1>
                <p className="mb-6 text-center">¡Estoy aquí para responder tus preguntas! Rellena el formulario a continuación o contáctame por correo electrónico.</p>

                <div className="p-6 bg-lightColorHF dark:bg-gray-800 rounded-lg shadow-lg">
                    <Formik
                        initialValues={{ name: '', email: '', message: '' }}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-gray-300">Nombre</label>
                                    <Field
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="mt-1 block w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 bg-gray-100 rounded-md shadow-sm focus:border-gray-600 dark:focus:border-gray-400 focus:ring focus:ring-gray-500 focus:ring-opacity-50"
                                    />
                                    <ErrorMessage name="name" component="div" className="text-red-600 dark:text-red-400 text-sm mt-1" />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-gray-300">Correo Electrónico</label>
                                    <Field
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="mt-1 block w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 bg-gray-100 rounded-md shadow-sm focus:border-gray-600 dark:focus:border-gray-400 focus:ring focus:ring-gray-500 focus:ring-opacity-50"
                                    />
                                    <ErrorMessage name="email" component="div" className="text-red-600 dark:text-red-400 text-sm mt-1" />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-gray-300">Mensaje</label>
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
                                    Enviar
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
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Otra Información de Contacto</h2>
                    <p className="mt-2">Correo electrónico: <a href="mailto:johncrotf2@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">johncrotf2@gmail.com</a></p>
                </div>
            </div>
        </MainLayout>
    );
};

export default ContactPage;
