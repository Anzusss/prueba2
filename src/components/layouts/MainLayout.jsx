import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import { useTheme } from '@/components/contexts/ThemeContext';

export default function MainLayout() {
    const { theme } = useTheme();
    return (
        <div className={`min-h-screen font-sans text-gray-900 ${theme === 'dark' ? 'bg-gray-900' : ''}`}>
            {/* El encabezado fijo arriba */}
            <Header />

            {/* El contenedor principal que renderiza las rutas hijas */}
            <main className="max-w-5xl mx-auto p-6 md:p-8">
                <Outlet />
            </main>
        </div>
    );
}