import { z } from "zod";
import { verificarSkuUnico } from "@/utils/validators";

const CategoryEnum = ['Tecnología', 'Hogar', 'Ropa'] as const;

export const productSchema = z.object({
    nombre: z.string()
        .min(5, "El nombre debe tener al menos 5 caracteres")
        .max(25, "El nombre debe tener menos de 25 caracteres"),
    sku: z.string()
        .min(5, "El SKU debe tener al menos 5 caracteres")
        .max(25, "El SKU debe tener menos de 25 caracteres")
        .refine(verificarSkuUnico, "El SKU debe ser único")
        .regex(/^[A-Z0-9]{5,10}$/, "El SKU debe tener entre 5 y 10 caracteres alfanuméricos mayúsculas"),
    precio: z.string().refine(precio => !isNaN(parseFloat(precio)), "El precio debe ser un número")
        .refine(precio => Number(precio) > 0, "El precio debe ser mayor a 0")
        .regex(/^[0-9]+([.,][0-9]+)?$/, "El precio debe ser un número"),
    stock: z.string().refine(stock => !isNaN(Number(stock)), "El stock debe ser un número").refine(stock => Number(stock) >= 0, "El stock debe ser mayor o igual a 0")
        .regex(/^[0-9]+([.,][0-9]+)?$/, "El stock debe ser un número"),
    categoria: z.enum(CategoryEnum, { message: "La categoría es obligatoria" })
});