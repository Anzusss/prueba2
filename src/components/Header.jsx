// src/components/Header.jsx
import { NavLink } from 'react-router-dom';

export default function Header() {
    const linkClass = ({ isActive }) =>
        `text-sm font-medium transition-colors ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-gray-900'
        }`;

    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
            <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* Título o Logo de la App */}
                <div className="flex items-center space-x-2">
                    <span className="text-xl">📦</span>
                    <span className="font-bold text-gray-900 tracking-tight">Sistema ERP / Inventario</span>
                </div>

                {/* Botones de navegación global */}
                <nav className="flex items-center space-x-6">
                    <NavLink to="/" className={linkClass} end>
                        Inventario
                    </NavLink>
                    <NavLink to="/dashboard" className={linkClass}>
                        Dashboard
                    </NavLink>
                </nav>

            </div>
        </header>
    );
}