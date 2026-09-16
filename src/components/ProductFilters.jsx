import SearchInput from '@/components/SearchInput';

export default function ProductFilters({
    busqueda,
    onSearchChange,
    categoria,
    onCategoryChange,
    categorias = ['Tecnología', 'Hogar', 'Ropa']
}) {
    return (
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto ">
            <SearchInput
                value={busqueda}
                onChange={onSearchChange}
                placeholder="Buscar Producto"
            />

            <select
                value={categoria}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="w-full sm:w-auto px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <option value="">Todas las categorías</option>
                {categorias.map((cat) => (
                    <option key={cat} value={cat}>
                        {cat}
                    </option>
                ))}
            </select>
        </div>
    );
}