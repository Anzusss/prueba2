import { useTheme } from '@/components/contexts/ThemeContext';

export default function Button({
    children,
    onClick,
    type = "button",
    variant = "primary",
    className = ""
}) {
    const { theme } = useTheme();
    // Estilos base que siempre tendrá el botón
    const baseStyles = "px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 flex items-center justify-center";

    // Estilos condicionales según la variante
    const variants = {
        primary: `bg-black text-white hover:bg-gray-800 ${theme === 'dark' ? 'bg-gray-700 text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`,
        secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        danger: "bg-red-50 text-red-600 hover:bg-red-100"
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
}