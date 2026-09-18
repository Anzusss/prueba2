import { useNavigate } from 'react-router-dom';
import DynamicTable from '@/components/DynamicTable';
import ProductFilters from '@/components/ProductFilters';
import { getProductColumns } from '@/components/config/productColumns';
import { useProducts } from '@/components/hooks/useProducts';
import { useProductFilters } from '@/components/hooks/useProductFilters';
import Button from '@/components/Button';
import { useTheme } from '@/components/contexts/ThemeContext';

export default function HomePage() {
    const navigate = useNavigate();
    const { theme } = useTheme();
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
        onView: (id) => navigate(`/inventario/${id}`),
        onDelete: eliminarProducto
    });

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h1 className={`text-2xl font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Inventario</h1>

                <ProductFilters
                    busqueda={busqueda}
                    onSearchChange={setBusqueda}
                    categoria={categoria}
                    onCategoryChange={setCategoria}
                />
                <Button className={`w-full md:w-auto ${theme === 'dark' ? 'text-gray-900' : 'text-white'} mt-2 md:mt-0`}
                    onClick={() => navigate('/nuevo')}>
                    Agregar producto
                </Button>
            </div>

            <DynamicTable data={productosFiltrados} columns={columnas} />
        </div>
    );
}