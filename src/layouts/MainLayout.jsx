import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';

export default function MainLayout() {
    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
            {/* El encabezado fijo arriba */}
            <Header />

            {/* El contenedor principal que renderiza las rutas hijas */}
            <main className="max-w-5xl mx-auto p-6 md:p-8">
                <Outlet />
            </main>
        </div>
    );
}