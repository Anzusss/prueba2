import Button from '@/components/Button';
import { useTheme } from '@/components/contexts/ThemeContext';

export default function ProductCard({ product, onBack, onEdit }) {
    const { theme } = useTheme();
    const isAvailable = product.stock > 0;

    return (
        <div className={`rounded-lg border border-gray-200 shadow-sm p-6 space-y-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
            {/* ... cabecera y detalles ... */}
            <div className={`flex justify-between items-start border-b ${theme === 'dark' ? 'border-gray-200' : 'border-gray-100'} pb-4`}>
                <div>
                    <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{product.nombre}</h2>
                    <p className="text-sm font-mono text-gray-500 mt-1">SKU: {product.sku}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${isAvailable ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                    {isAvailable ? 'Disponible' : 'Agotado'} ({product.stock} unidades)
                </span>
            </div>

            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
                <div className={`p-3 rounded-md ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
                    <p className={`font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>Categoría</p>
                    <p className={`font-semibold mt-0.5 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{product.categoria}</p>
                </div>
                <div className={`p-3 rounded-md ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
                    <p className={`font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>Precio Unitario</p>
                    <p className="text-gray-900 font-semibold mt-0.5">${Number(product.precio).toFixed(2)}</p>
                </div>
            </div>

            {/* Botones de acción inferior */}
            <div className={`pt-4 flex justify-between items-center border-t mt-6 ${theme === 'dark' ? 'border-gray-600' : 'border-gray-100'}`} >
                <Button variant="secondary" onClick={onBack}>
                    ← Regresar
                </Button>
                <Button variant="primary" onClick={onEdit}>
                    Editar Producto
                </Button>
            </div>
        </div>
    );
}