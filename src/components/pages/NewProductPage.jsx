import { useNavigate } from 'react-router-dom';
import ProductForm from '@/components/ProductForm';
import { useProducts } from '@/components/hooks/useProducts';
import { useTheme } from '@/components/contexts/ThemeContext';
import toast from 'react-hot-toast';

export default function NewProductPage() {
    const navigate = useNavigate();
    const { crearProducto } = useProducts();
    const { theme } = useTheme();

    const handleSubmit = (formData) => {
        crearProducto(formData);
        toast.success("Producto creado exitosamente");
        navigate('/inventario'); // Volver al inicio tras guardar
    };

    return (
        <div className={`max-w-2xl mx-auto p-8 rounded-lg border shadow-sm ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Agregar Nuevo Producto</h2>

            <ProductForm
                onSubmit={handleSubmit}
                onCancel={() => navigate('/inventario')}
            />
        </div>
    );
}