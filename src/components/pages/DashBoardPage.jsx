// src/pages/DashboardPage.jsx
import { useDashboard } from '@/components/hooks/useDashboard';
import KpiCards from '@/components/dashboard/KpiCards';
import OrderTabs from '@/components/dashboard/OrderTabs';
import Button from '@/components/Button';
import DynamicTable from '@/components/DynamicTable';
import { getOrderColumns } from '@/components/config/orderColumns';
import { useTheme } from '@/components/contexts/ThemeContext';

export default function DashboardPage() {
    const { theme } = useTheme();
    const {
        orders,
        metrics,
        statusTab,
        setStatusTab,
        loading,
        error,
        refreshData,
    } = useDashboard();

    // Obtenemos las columnas desde nuestra capa de configuración
    const columns = getOrderColumns();

    return (
        <div className="space-y-8">
            {/* Cabecera */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className={`text-2xl font-bold tracking-tight ${theme === 'dark' ? 'text-gray-400' : 'text-gray-900'}`}>Dashboard de Órdenes</h1>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Resumen financiero y control de operaciones en tiempo real.</p>
                </div>

                <Button
                    variant="secondary"
                    onClick={refreshData}
                    disabled={loading}
                >
                    {loading ? 'Actualizando...' : 'Refrescar Datos'}
                </Button>
            </div>

            {error && <div className={`p-4 ${theme === 'dark' ? 'bg-gray-800 text-red-400' : 'bg-red-50 text-red-700'} rounded-lg text-sm`}>{error}</div>}

            {/* Tarjetas KPI */}
            <KpiCards metrics={metrics} />

            {/* Tabs y Tabla */}
            <div className="space-y-4">
                <OrderTabs currentTab={statusTab} onTabChange={setStatusTab} />
                {loading && orders.length === 0 ? (
                    <div className={`bg-white rounded-lg border border-gray-200 p-8 text-center shadow-sm ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-400'}`}>
                        Cargando órdenes...
                    </div>
                ) : (
                    <DynamicTable data={orders} columns={columns} />
                )}
            </div>
        </div>
    );
}