import { useState, useEffect } from 'react';

export const useProducts = () => {
    const [productos, setProductos] = useState([]);

    // Cargar productos (Read)
    useEffect(() => {
        const guardados = JSON.parse(localStorage.getItem('productos')) || [];
        setProductos(guardados);
    }, []);

    // Función auxiliar privada para actualizar estado y localStorage de golpe
    const guardarYActualizar = (nuevoInventario) => {
        setProductos(nuevoInventario);
        localStorage.setItem('productos', JSON.stringify(nuevoInventario));
    };

    // Crear producto (Create)
    const crearProducto = (formData) => {
        const nuevoProducto = {
            ...formData,
            id: crypto.randomUUID(),
            precio: Number(formData.precio),
            stock: Number(formData.stock)
        };
        guardarYActualizar([...productos, nuevoProducto]);
    };

    // Actualizar producto (Update)
    const actualizarProducto = (id, formData) => {
        const nuevoInventario = productos.map((p) =>
            p.id === id
                ? {
                    ...p,
                    ...formData,
                    precio: Number(formData.precio),
                    stock: Number(formData.stock)
                }
                : p
        );
        guardarYActualizar(nuevoInventario);
    };

    // Eliminar producto (Delete)
    const eliminarProducto = (id) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este producto?')) {
            const actualizados = productos.filter((p) => p.id !== id);
            guardarYActualizar(actualizados);
        }
    };

    return {
        productos,
        crearProducto,
        actualizarProducto,
        eliminarProducto
    };
};