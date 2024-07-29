import Header from '@components/headers/jsx/Header';
import Footer from '@components/footers/jsx/Footer';

const MainLayout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow mt-16">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
