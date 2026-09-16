import { useState, useMemo } from 'react';

export const useProductFilters = (products = []) => {
    const [busqueda, setBusqueda] = useState('');
    const [categoria, setCategoria] = useState('');

    // Memoriza el resultado del filtro y solo lo recalcula cuando cambian los productos o los criterios
    const productosFiltrados = useMemo(() => {
        return products.filter((p) => {
            const coincideBusqueda =
                p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                p.sku.toLowerCase().includes(busqueda.toLowerCase());

            const coincideCategoria = categoria === '' || p.categoria === categoria;

            return coincideBusqueda && coincideCategoria;
        });
    }, [products, busqueda, categoria]);

    return {
        busqueda,
        setBusqueda,
        categoria,
        setCategoria,
        productosFiltrados,
    };
};