// src/configs/orderColumns.jsx
import { formatCurrency } from '@/components/utils/formatters';
import { useTheme } from '@/components/contexts/ThemeContext';



export const getOrderColumns = () => {
    const { theme } = useTheme();
    return [
        {
            key: 'id',
            header: 'ID Orden',
            render: (row) => <span className={`font-mono ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{row.id}</span>
        },
        {
            key: 'cliente',
            header: 'Cliente',
            render: (row) => <span className={`text-gray-800 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{row.cliente}</span>
        },
        {
            key: 'fecha',
            header: 'Fecha',
            render: (row) => <span className={`text-gray-500 ${theme === 'dark' ? 'text-white' : 'text-gray-500'}`}>{row.fecha}</span>
        },
        {
            key: 'estado',
            header: 'Estado',
            render: (row) => {
                const badgeColor =
                    row.estado === 'pagadas' ? 'bg-green-100 text-green-800' :
                        row.estado === 'pendientes' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800';
                return (
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold capitalize ${badgeColor}`}>
                        {row.estado}
                    </span>
                );
            }
        },
        {
            key: 'monto',
            header: 'Monto',
            align: 'right',
            render: (row) => <span className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{formatCurrency(row.monto)}</span>
        }
    ];
}