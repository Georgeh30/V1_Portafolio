import MainLayout from '@layouts/jsx/MainLayout';

const BlogPage = () => {
    // Simulación de datos de artículos
    const articles = [
        { id: 1, title: 'Primer Artículo', date: '2024-08-01', summary: 'Este es un resumen del primer artículo. Aquí puedes proporcionar una vista previa que atraiga al lector a hacer clic en el enlace para leer más.' },
        { id: 2, title: 'Segundo Artículo', date: '2024-08-05', summary: 'Este es un resumen del segundo artículo. Añade información interesante para captar la atención de los lectores y mantenerlos interesados.' },
        // Agrega más artículos aquí
    ];

    return (
        <MainLayout>
            <div className="p-6 mt-4 mb-4 max-w-4xl mx-auto bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
                <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">Blog</h1>
                
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Buscar artículos..."
                        className="p-3 border border-gray-300 dark:border-gray-600 rounded-md w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div className="space-y-6">
                    {articles.map(article => (
                        <div key={article.id} className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{article.title}</h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-2">{article.date}</p>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">{article.summary}</p>
                            <a href={`/blog/${article.id}`} className="text-indigo-600 dark:text-indigo-400 hover:underline text-lg font-medium">
                                Leer más
                            </a>
                        </div>
                    ))}
                </div>

                <div className="mt-12 p-6 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Suscríbete al Blog</h2>
                    <form className="flex flex-col space-y-4">
                        <input
                            type="email"
                            placeholder="Tu correo electrónico"
                            className="p-3 border border-gray-300 dark:border-gray-600 rounded-md w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <button
                            type="submit"
                            className="px-4 py-2 bg-indigo-600 dark:bg-indigo-500 text-white rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-400 transition-colors duration-300"
                        >
                            Suscribirse
                        </button>
                    </form>
                </div>
            </div>
        </MainLayout>
    );
};

export default BlogPage;
