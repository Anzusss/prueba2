import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductForm from '@/components/ProductForm';
import { useProducts } from '@/hooks/useProducts';

export default function EditProductPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { productos, actualizarProducto } = useProducts();

    const [productoAEditar, setProductoAEditar] = useState(null);

    // Buscamos el producto específico cuando se cargan los productos
    useEffect(() => {
        const encontrado = productos.find((p) => p.id === id);
        if (encontrado) setProductoAEditar(encontrado);
    }, [id, productos]);

    const handleSubmit = (formData) => {
        actualizarProducto(id, formData);
        navigate(`/${id}`); // Volvemos a la vista de detalle tras guardar
    };

    // Mientras el hook carga los datos del localStorage
    if (!productoAEditar && productos.length === 0) {
        return <p className="text-center py-8">Cargando...</p>;
    }

    // Si cargó y no existe
    if (!productoAEditar && productos.length > 0) {
        return <p className="text-center py-8 text-red-500">Producto no encontrado</p>;
    }

    return (
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg border shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Editar Producto</h2>

            <ProductForm
                initialData={productoAEditar} // Pre-rellena los campos
                onSubmit={handleSubmit}
                onCancel={() => navigate(`/${id}`)}
            />
        </div>
    );
}