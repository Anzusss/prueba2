import Button from '@/components/Button';


export default function ProductCard({ product, onBack, onEdit }) {
    const isAvailable = product.stock > 0;

    return (
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 space-y-6">
            {/* ... cabecera y detalles ... */}
            <div className="flex justify-between items-start border-b border-gray-100 pb-4">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">{product.nombre}</h2>
                    <p className="text-sm font-mono text-gray-500 mt-1">SKU: {product.sku}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${isAvailable ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                    {isAvailable ? 'Disponible' : 'Agotado'} ({product.stock} unidades)
                </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="p-3 bg-gray-50 rounded-md">
                    <p className="text-gray-500 font-medium">Categoría</p>
                    <p className="text-gray-900 font-semibold mt-0.5">{product.categoria}</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-md">
                    <p className="text-gray-500 font-medium">Precio Unitario</p>
                    <p className="text-gray-900 font-semibold mt-0.5">${Number(product.precio).toFixed(2)}</p>
                </div>
            </div>

            {/* Botones de acción inferior */}
            <div className="pt-4 flex justify-between items-center border-t border-gray-100 mt-6">
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