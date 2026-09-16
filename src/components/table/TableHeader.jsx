export default function TableHeader({ columns }) {
    return (
        <thead className="bg-gray-50 text-gray-700 font-semibold">
            <tr>
                {columns.map((col, index) => (
                    <th
                        key={col.key || index}
                        className={`px-6 py-3 ${col.align === 'right' ? 'text-right' : 'text-left'}`}
                    >
                        {col.header}
                    </th>
                ))}
            </tr>
        </thead>
    );
}