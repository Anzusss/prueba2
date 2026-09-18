import { useTheme } from '@/components/contexts/ThemeContext';

export default function TableBody({ data, columns }) {
    const { theme } = useTheme();
    if (data.length === 0) {
        return (
            <tbody>
                <tr>
                    <td colSpan={columns.length} className={`text-center py-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                        No hay registros para mostrar.
                    </td>
                </tr>
            </tbody>
        );
    }

    return (
        <tbody className={`divide-y ${theme === 'dark' ? 'divide-gray-700' : 'divide-gray-200'}`}>
            {data.map((row) => (
                <tr key={row.id} className={`hover:bg-gray-50 transition-colors ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}>
                    {columns.map((col, index) => (
                        <td
                            key={col.key || index}
                            className={`px-6 py-4 ${col.align === 'right' ? 'text-right' : 'text-left'} ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}
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