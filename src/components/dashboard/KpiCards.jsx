// src/components/dashboard/KpiCards.jsx
import { MetricCard } from '@/components/MetricCard';
import { formatCurrency } from '@/components/utils/formatters';

export default function KpiCards({ metrics }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MetricCard
                label="Total Facturado"
                value={formatCurrency(metrics.totalFacturado)}
                subtext="Órdenes pagadas con éxito"
            />

            <MetricCard
                label="Órdenes Procesadas"
                value={metrics.totalOrdenes}
                subtext="Total general de registros"
            />

            <MetricCard
                label="Ticket Promedio"
                value={formatCurrency(metrics.ticketPromedio)}
                subtext="Valor medio por orden"
            />
        </div>
    );
}