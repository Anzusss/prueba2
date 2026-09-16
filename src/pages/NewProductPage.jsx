import { useNavigate } from 'react-router-dom';
import ProductForm from '@/components/ProductForm';
import { useProducts } from '@/hooks/useProducts';

export default function NewProductPage() {
    const navigate = useNavigate();
    const { crearProducto } = useProducts();

    const handleSubmit = (formData) => {
        crearProducto(formData);
        navigate('/'); // Volver al inicio tras guardar
    };

    return (
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg border shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Agregar Nuevo Producto</h2>

            <ProductForm
                onSubmit={handleSubmit}
                onCancel={() => navigate('/')}
            />
        </div>
    );
}