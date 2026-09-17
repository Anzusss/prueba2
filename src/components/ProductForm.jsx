import { useForm } from "react-hook-form";
import Input from '@/components/Input';
import Button from '@/components/Button';
import { zodResolver } from '@hookform/resolvers/zod'
import { productSchema } from '@/schemas/productSchemas'


export default function ProductForm({ onSubmit, onCancel, initialData = {} }) {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(productSchema)
    });
    const categories = ['Tecnología', 'Hogar', 'Ropa'];

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                    label="Nombre del Producto"
                    type="text"
                    id="nombre"
                    {...register("nombre")}
                    error={errors.nombre?.message}
                />
                <Input
                    label="SKU"
                    type="text"
                    id="sku"
                    {...register("sku")}
                    error={errors.sku?.message}
                />
                <Input
                    label="Precio ($)"
                    type="number"
                    id="precio"
                    {...register("precio")}
                    error={errors.precio?.message}
                />
                <Input
                    label="Stock Inicial"
                    type="number"
                    id="stock"
                    {...register("stock")}
                    error={errors.stock?.message}
                />
            </div>

            <div className="flex flex-col space-y-1">
                <label className="text-sm font-medium text-gray-700">Categoría</label>
                <select
                    id="categoria"
                    {...register("categoria")}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                >
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
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