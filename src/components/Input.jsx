export default function Input({ label, type = "text", value, onChange, error, placeholder }) {
    return (
        <div className="flex flex-col space-y-1">
            <label className="text-sm font-medium text-gray-700">
                {label}
            </label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${error
                    ? 'border-red-500 focus:ring-red-200'
                    : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                    }`}
            />
            {/* Si la prop "error" tiene texto, lo mostramos en rojo */}
            {error && <span className="text-xs text-red-500">{error}</span>}
        </div>
    );
}