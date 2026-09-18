import TableHeader from './table/TableHeader';
import TableBody from './table/TableBody';
import { useTheme } from '@/components/contexts/ThemeContext';

export default function DynamicTable({ data, columns }) {
    const { theme } = useTheme();
    return (
        <div className={`overflow-x-auto rounded-lg border shadow-sm ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
            <table className={`min-w-full divide-y divide-gray-200 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                <TableHeader columns={columns} />
                <TableBody data={data} columns={columns} />
            </table>
        </div>
    );
}