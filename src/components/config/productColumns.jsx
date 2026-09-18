import Button from '@/components/Button';

export const getProductColumns = ({ onView, onDelete }) => [
    { header: 'Nombre', key: 'nombre' },
    { header: 'SKU', key: 'sku' },
    { header: 'Categoría', key: 'categoria' },
    {
        header: 'Precio',
        key: 'precio',
        render: (row) => `$${Number(row.precio).toFixed(2)}`
    },
    {
        header: 'Estado',
        key: 'stock',
        render: (row) => (
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${row.stock > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                {row.stock > 0 ? 'Disponible' : 'Agotado'} ({row.stock})
            </span>
        )
    },
    {
        header: 'Acciones',
        key: 'acciones',
        align: 'right',
        render: (row) => (
            <div className="flex justify-end gap-2">
                <Button variant="secondary" onClick={() => onView(row.id)}>Ver</Button>
                <Button variant="danger" onClick={() => onDelete(row.id)}>Eliminar</Button>
            </div>
        )
    }
];