import { useState } from 'react';

// Importaciones de Formik y Yup
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Otros imports
import MainLayout from '@layouts/jsx/MainLayout';

// Definición del esquema de validación con Yup
const validationSchema = Yup.object({
    name: Yup.string().required('El nombre es obligatorio'),
    email: Yup.string().email('El correo electrónico es inválido').required('El correo electrónico es obligatorio'),
    message: Yup.string().required('El mensaje es obligatorio'),
});

const ContactPage = () => {
    // Estado para manejar el estado del formulario
    const [formStatus, setFormStatus] = useState(null);

    return (
        <MainLayout>
            <div className="p-6 max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold mb-4">Contacto</h1>
                <p className="mb-6">¡Estoy aquí para responder tus preguntas! Rellena el formulario a continuación o contáctame por correo electrónico.</p>

                <Formik
                    initialValues={{ name: '', email: '', message: '' }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { resetForm }) => {
                        setFormStatus('success');
                        resetForm();
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form 
                            name="contact"
                            method="POST"
                            // netlify="true"
                            data-netlify="true" // Asegúrate de que esto esté correctamente configurado
                            className="space-y-4"
                        >
                            <input type="hidden" name="form-name" value="contact" />
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-gray-300">Nombre</label>
                                <Field
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="mt-1 block w-full border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                                />
                                <ErrorMessage name="name" component="div" className="text-red-600 dark:text-red-400 text-sm mt-1" />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-gray-300">Correo Electrónico</label>
                                <Field
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="mt-1 block w-full border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
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
                                    className="mt-1 block w-full border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
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

                            {formStatus === 'success' && <p className="text-green-600 dark:text-green-400 mt-4">¡Tu mensaje ha sido enviado con éxito!</p>}
                            {formStatus === 'error' && <p className="text-red-600 dark:text-red-400 mt-4">Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.</p>}
                        </Form>
                    )}
                </Formik>

                <div className="mt-8">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Otra Información de Contacto</h2>
                    <p className="mt-2">Correo electrónico: <a href="mailto:tuemail@example.com" className="text-blue-600 dark:text-blue-400 hover:underline">tuemail@example.com</a></p>
                    <p className="mt-2">Sígueme en redes sociales: [Íconos de redes sociales]</p>
                </div>
            </div>
            {/* <form name="contact" netlify="true">
  <p>
    <label>Name <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Email <input type="email" name="email" /></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form> */}
        </MainLayout>
    );
};

export default ContactPage;
