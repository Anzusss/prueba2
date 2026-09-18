// src/components/SearchInput.jsx
import { useTheme } from '@/components/contexts/ThemeContext';

export default function SearchInput({ value, onChange, placeholder = "Buscar..." }) {
    const { theme } = useTheme();
    return (
        <div className="relative w-full max-w-md">
            {/* Input de texto */}
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className={`w-full text-left pl-2 pr-8 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${theme === 'dark' ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white text-gray-900'}`}
            />
        </div>
    );
}