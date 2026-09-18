// src/components/Header.jsx
import { NavLink } from 'react-router-dom';
import { useTheme } from '@/components/contexts/ThemeContext';

export default function Header() {
    const { theme, toggleTheme } = useTheme();

    const linkClass = ({ isActive }) =>
        `text-sm font-medium transition-colors ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-gray-900'
        }`;

    return (
        <header className={`sticky top-0 z-10 shadow-sm border-b border-gray-200 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
            <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Título o Logo de la App */}
                <div className="flex items-center space-x-2">
                    <span className="text-xl">📦</span>
                    <span className={`font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Sistema ERP / Inventario</span>
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                        {theme === 'dark' ? '☀️' : '🌙'}
                    </button>
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