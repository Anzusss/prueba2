// src/components/SearchInput.jsx

export default function SearchInput({ value, onChange, placeholder = "Buscar..." }) {
    return (
        <div className="relative w-full max-w-md">
            {/* Input de texto */}
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="w-full text-left pl-2 pr-8 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
        </div>
    );
}