export default function OrderTabs({ currentTab, onTabChange }) {
    const tabs = [
        { id: 'todas', label: 'Todas' },
        { id: 'pagadas', label: 'Pagadas' },
        { id: 'pendientes', label: 'Pendientes' },
        { id: 'anuladas', label: 'Anuladas' },
    ];

    return (
        <div className="flex border-b border-gray-200 space-x-4">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => onTabChange(tab.id)}
                    className={`pb-3 text-sm font-medium transition-colors border-b-2 ${currentTab === tab.id
                            ? 'border-blue-600 text-blue-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700'
                        }`}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
}