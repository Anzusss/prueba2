import TableHeader from './table/TableHeader';
import TableBody from './table/TableBody';

export default function DynamicTable({ data, columns }) {
    return (
        <div className="overflow-x-auto bg-white rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
                <TableHeader columns={columns} />
                <TableBody data={data} columns={columns} />
            </table>
        </div>
    );
}