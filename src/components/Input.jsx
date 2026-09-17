export default function Input({ label, error, ...props }) {
    return (
        <div className="flex flex-col space-y-1">
            <label className="text-sm font-medium text-gray-700">
                {label}
            </label>
            <input
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...props}
            />
            {/* Si la prop "error" tiene texto, lo mostramos en rojo */}
            {error && <span className="text-xs text-red-500">{error}</span>}
        </div>
    );
}