export default function TableBody({ data, columns }) {
    if (data.length === 0) {
        return (
            <tbody>
                <tr>
                    <td colSpan={columns.length} className="text-center py-8 text-gray-500">
                        No hay registros para mostrar.
                    </td>
                </tr>
            </tbody>
        );
    }

    return (
        <tbody className="divide-y divide-gray-200">
            {data.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                    {columns.map((col, index) => (
                        <td
                            key={col.key || index}
                            className={`px-6 py-4 ${col.align === 'right' ? 'text-right' : 'text-left'}`}
                        >
                            {/* Si la columna tiene una función personalizada 'render', la usa. Si no, imprime la clave directamente */}
                            {col.render ? col.render(row) : row[col.key]}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    );
}