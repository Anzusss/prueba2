import { useTheme } from '@/components/contexts/ThemeContext';

export default function TableHeader({ columns }) {
    const { theme } = useTheme();
    return (
        <thead className={`bg-gray-50 text-gray-700 font-semibold ${theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-gray-50 text-gray-700'}`}>
            <tr>
                {columns.map((col, index) => (
                    <th
                        key={col.key || index}
                        className={`px-6 py-3 ${col.align === 'right' ? 'text-right' : 'text-left'} ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                        {col.header}
                    </th>
                ))}
            </tr>
        </thead>
    );
}