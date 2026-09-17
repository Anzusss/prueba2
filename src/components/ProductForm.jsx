import { useForm } from "react-hook-form";
import Input from '@/components/Input';
import Button from '@/components/Button';
import { verificarSkuUnico } from '@/utils/validators';


export default function ProductForm({ onSubmit, onCancel, initialData = {} }) {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            nombre: initialData.nombre || '',
            sku: initialData.sku || '',
            precio: initialData.precio || 0,
            stock: initialData.stock || 0,
            categoria: initialData.categoria || 'Tecnología'
        }
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                    label="Nombre del Producto"
                    {...register('nombre', {
                        required: 'El nombre es obligatorio',
                        minLength: { value: 5, message: 'El nombre debe tener al menos 5 caracteres' },
                        maxLength: { value: 25, message: 'El nombre debe tener menos de 25 caracteres' }
                    })}
                    error={errors.nombre?.message}
                />
                <Input
                    label="SKU"
                    {...register('sku', {
                        required: 'El SKU es obligatorio',
                        minLength: { value: 5, message: 'El SKU debe tener al menos 5 caracteres' },
                        maxLength: { value: 25, message: 'El SKU debe tener menos de 25 caracteres' },
                        pattern: { value: /^[A-Z0-9]{5,10}$/, message: 'El SKU debe tener entre 5 y 10 caracteres alfanuméricos mayúsculas' },
                        validate: (value) => verificarSkuUnico(value, initialData.id) ? true : 'El SKU ya existe'
                    })}
                    error={errors.sku?.message}
                />
                <Input
                    label="Precio ($)"
                    {...register('precio', {
                        required: 'El precio es obligatorio',
                        validate: {
                            esPositivo: (value) => Number(value) > 0 || 'El precio debe ser mayor a 0'
                        },
                        pattern: { value: /^[0-9]+([.,][0-9]+)?$/, message: 'El precio debe ser un número' }
                    })}
                    error={errors.precio?.message}
                />
                <Input
                    label="Stock Inicial"
                    {...register('stock', {
                        required: 'El stock es obligatorio',
                        min: { value: 0, message: 'El stock debe ser mayor o igual a 0' },
                        pattern: { value: /^[0-9]+([.,][0-9]+)?$/, message: 'El stock debe ser un número' }
                    })}
                    error={errors.stock?.message}
                />
            </div>

            <div className="flex flex-col space-y-1">
                <label className="text-sm font-medium text-gray-700">Categoría</label>
                <select
                    {...register('categoria', {
                        required: 'La categoría es obligatoria'
                    })}
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