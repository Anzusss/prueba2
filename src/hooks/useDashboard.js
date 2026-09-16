// src/hooks/useDashboard.js
import { useState, useMemo } from 'react';
import { orderService } from '@/services/orderService';
import { useAbortableFetch } from '@/hooks/useAbortableFetch';

export const useDashboard = () => {
    const [statusTab, setStatusTab] = useState('todas');

    // Reutilizamos el hook genérico para la red y el AbortController
    const {
        data: orders,
        loading,
        error,
        refetch: refreshData
    } = useAbortableFetch((signal) => orderService.fetchOrders(signal));

    // Requisito 3: Cálculo de métricas barriendo el array una única vez con reduce()
    const metrics = useMemo(() => {
        return orders.reduce(
            (acc, order) => {
                acc.totalOrdenes += 1;

                if (order.estado === 'pagadas') {
                    acc.totalFacturado += order.monto;
                    acc.ordenesPagadas += 1;
                }

                return acc;
            },
            { totalFacturado: 0, totalOrdenes: 0, ordenesPagadas: 0 }
        );
    }, [orders]);

    // Cálculo del ticket promedio
    const ticketPromedio = metrics.ordenesPagadas > 0
        ? metrics.totalFacturado / metrics.ordenesPagadas
        : 0;

    // Requisito 2: Filtrado por pestañas de estado
    const filteredOrders = useMemo(() => {
        if (statusTab === 'todas') return orders;
        return orders.filter((o) => o.estado === statusTab);
    }, [orders, statusTab]);

    return {
        orders: filteredOrders,
        metrics: {
            totalFacturado: metrics.totalFacturado,
            totalOrdenes: metrics.totalOrdenes,
            ticketPromedio,
        },
        statusTab,
        setStatusTab,
        loading,
        error,
        refreshData, // Conectado al AbortController genérico
    };
};