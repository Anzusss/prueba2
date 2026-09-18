export const verificarSkuUnico = (skuIngresado, idActual = null) => {
    const productos = JSON.parse(localStorage.getItem('productos')) || [];

    const skuExiste = productos.some((producto) =>
        producto.sku?.toLowerCase?.() === skuIngresado?.toLowerCase?.() &&
        producto.id !== idActual // Ignora el producto que estamos editando
    );

    return !skuExiste;
};