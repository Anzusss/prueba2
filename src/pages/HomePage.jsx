import { useNavigate } from 'react-router-dom';
import DynamicTable from '@/components/DynamicTable';
import ProductFilters from '@/components/ProductFilters';
import { getProductColumns } from '@/config/productColumns';
import { useProducts } from '@/hooks/useProducts';
import { useProductFilters } from '@/hooks/useProductFilters';

export default function HomePage() {
    const navigate = useNavigate();
    const { productos, eliminarProducto } = useProducts();

    // Custom Hook para filtros
    const {
        busqueda,
        setBusqueda,
        categoria,
        setCategoria,
        productosFiltrados
    } = useProductFilters(productos);

    // Columnas dinamicas con acciones
    const columnas = getProductColumns({
        onView: (id) => navigate(`/${id}`),
        onDelete: eliminarProducto
    });

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900">Inventario</h1>

                <ProductFilters
                    busqueda={busqueda}
                    onSearchChange={setBusqueda}
                    categoria={categoria}
                    onCategoryChange={setCategoria}
                />
                <button className="bg-primary-600 hover:bg-primary-700 font-medium py-2 px-4 rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:ring-offset-white active:bg-primary-800" onClick={() => navigate('/nuevo')}>Agregar producto</button>
            </div>

            <DynamicTable data={productosFiltrados} columns={columnas} />
        </div>
    );
}