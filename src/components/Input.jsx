import { useTheme } from '@/components/contexts/ThemeContext';

export default function Input({ label, error, ...props }) {
    const { theme } = useTheme();
    return (
        <div className="flex flex-col space-y-1">
            <label className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {label}
            </label>
            <input
                className={`px-3 py-2 border rounded-md ${theme === 'dark' ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white'}`}
                {...props}
            />
            {/* Si la prop "error" tiene texto, lo mostramos en rojo */}
            {error && <span className="text-xs text-red-500">{error}</span>}
        </div>
    );
}