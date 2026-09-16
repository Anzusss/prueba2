import { useState } from 'react';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { verificarSkuUnico } from '@/utils/validators';

export default function ProductForm({ onSubmit, onCancel, initialData = {} }) {
    const [form, setForm] = useState({
        nombre: initialData.nombre || '',
        sku: initialData.sku || '',
        categoria: initialData.categoria || 'Tecnología',
        precio: initialData.precio || '',
        stock: initialData.stock || ''
    });

    const [errores, setErrores] = useState({});

    const handleChange = (campo, valor) => {
        setForm({ ...form, [campo]: valor });
        setErrores({ ...errores, [campo]: null });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const nuevosErrores = {};

        if (Number(form.precio) <= 0) nuevosErrores.precio = "El precio debe ser mayor a 0";
        if (!verificarSkuUnico(form.sku, initialData.id)) nuevosErrores.sku = "Este SKU ya existe";
        if (!form.nombre) nuevosErrores.nombre = "El nombre es obligatorio";
        if (!form.sku) nuevosErrores.sku = "El SKU es obligatorio";

        if (Object.keys(nuevosErrores).length > 0) {
            setErrores(nuevosErrores);
            return;
        }

        // Le pasa los datos validados al padre
        onSubmit(form);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                    label="Nombre del Producto"
                    value={form.nombre}
                    onChange={(e) => handleChange('nombre', e.target.value)}
                    error={errores.nombre}
                />
                <Input
                    label="SKU"
                    value={form.sku}
                    onChange={(e) => handleChange('sku', e.target.value)}
                    error={errores.sku}
                />
                <Input
                    label="Precio ($)"
                    type="number"
                    value={form.precio}
                    onChange={(e) => handleChange('precio', e.target.value)}
                    error={errores.precio}
                />
                <Input
                    label="Stock Inicial"
                    type="number"
                    value={form.stock}
                    onChange={(e) => handleChange('stock', e.target.value)}
                />
            </div>

            <div className="flex flex-col space-y-1">
                <label className="text-sm font-medium text-gray-700">Categoría</label>
                <select
                    value={form.categoria}
                    onChange={(e) => handleChange('categoria', e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                >
                    <option value="Tecnología">Tecnología</option>
                    <option value="Hogar">Hogar</option>
                    <option value="Ropa">Ropa</option>
                </select>
            </div>

            <div className="flex justify-end space-x-3 pt-4 border-t">
                <Button variant="secondary" onClick={onCancel}>
                    Cancelar
                </Button>
                <Button type="submit" variant="primary">
                    Guardar Producto
                </Button>
            </div>
        </form>
    );
}