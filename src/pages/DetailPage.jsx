import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import Button from '@/components/Button';

export default function DetailPage() {
    const { id } = useParams(); // Lee el ID dinámico de la URL
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const productosGuardados = JSON.parse(localStorage.getItem('productos')) || [];
        const encontrado = productosGuardados.find((p) => p.id === id);

        setProduct(encontrado || null);
        setLoading(false);
    }, [id]);

    if (loading) {
        return <p className="text-center py-8 text-gray-500">Cargando producto...</p>;
    }

    if (!product) {
        return (
            <div className="text-center py-12 bg-white rounded-lg border border-gray-200 p-6 space-y-4">
                <h2 className="text-xl font-bold text-gray-800">Producto no encontrado</h2>
                <p className="text-gray-500 text-sm">El ID consultado no existe en el inventario.</p>
                <Button variant="primary" onClick={() => navigate('/')}>
                    Volver al Inicio
                </Button>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto">
            <ProductCard product={product} onBack={() => navigate('/')} onEdit={() => navigate(`/editar/${product.id}`)} />
        </div>
    );
}