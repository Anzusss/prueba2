// src/services/orderService.js
const mockOrders = [
    { id: 'ORD-001', cliente: 'María Pérez', monto: 150.00, estado: 'pagadas', fecha: '2026-09-10' },
    { id: 'ORD-002', cliente: 'Juan Soto', monto: 75.50, estado: 'pendientes', fecha: '2026-09-11' },
    { id: 'ORD-003', cliente: 'Carlos Ruiz', monto: 300.00, estado: 'pagadas', fecha: '2026-09-12' },
    { id: 'ORD-004', cliente: 'Ana Gómez', monto: 50.00, estado: 'anuladas', fecha: '2026-09-13' },
    { id: 'ORD-005', cliente: 'Luis Torres', monto: 220.00, estado: 'pagadas', fecha: '2026-09-14' },
];

export const orderService = {
    fetchOrders(signal) {
        return new Promise((resolve, reject) => {
            const timer = setTimeout(() => {
                resolve(mockOrders);
            }, 800); // Simulamos 800ms de red

            // Escuchamos si el AbortController cancela la petición
            if (signal) {
                signal.addEventListener('abort', () => {
                    clearTimeout(timer);
                    const error = new Error('Petición cancelada');
                    error.name = 'AbortError';
                    reject(error);
                });
            }
        });
    }
};