import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductForm from '@/components/ProductForm';
import { useProducts } from '@/components/hooks/useProducts';
import { useTheme } from '@/components/contexts/ThemeContext';
import toast from 'react-hot-toast';

export default function EditProductPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { theme } = useTheme();
    const { productos, actualizarProducto } = useProducts();

    const [productoAEditar, setProductoAEditar] = useState(null);

    // Buscamos el producto específico cuando se cargan los productos
    useEffect(() => {
        const encontrado = productos.find((p) => p.id === id);
        if (encontrado) setProductoAEditar(encontrado);
    }, [id, productos]);

    const handleSubmit = (formData) => {
        actualizarProducto(id, formData);
        toast.success("Producto actualizado exitosamente");
        navigate(`/inventario/${id}`); // Volvemos a la vista de detalle tras guardar
    };

    // Mientras el hook carga los datos del localStorage
    if (!productoAEditar && productos.length === 0) {
        return <p className={`text-center py-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Cargando...</p>;
    }

    // Si cargó y no existe
    if (!productoAEditar && productos.length > 0) {
        return <p className={`text-center py-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Producto no encontrado</p>;
    }

    return (
        <div className={`max-w-2xl mx-auto p-8 rounded-lg border shadow-sm ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Editar Producto</h2>

            <ProductForm
                initialData={productoAEditar} // Pre-rellena los campos
                onSubmit={handleSubmit}
                onCancel={() => navigate(`/inventario/${id}`)}
            />
        </div>
    );
}