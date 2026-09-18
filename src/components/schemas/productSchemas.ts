import { z } from "zod";
import { verificarSkuUnico } from "@/components/utils/validators";

const CategoryEnum = ['Tecnología', 'Hogar', 'Ropa'] as const;

export const getProductSchema = (idActual = null) => z.object({
    nombre: z.string()
        .min(5, "El nombre debe tener al menos 5 caracteres")
        .max(25, "El nombre debe tener menos de 25 caracteres"),
    sku: z.string()
        .regex(/^[A-Z0-9]{5,10}$/, "El SKU debe tener entre 5 y 10 caracteres (mayúsculas y números)")
        .refine((val) => verificarSkuUnico(val, idActual), "El SKU ya está registrado"),

    // Preprocesa string o number a number
    precio: z.preprocess(
        (val) => (val === "" || val === null || val === undefined ? undefined : Number(val)),
        z.number({ message: "El precio debe ser un número válido" })
            .positive("El precio debe ser mayor a 0")
    ),
    stock: z.preprocess(
        (val) => (val === "" || val === null || val === undefined ? undefined : Number(val)),
        z.number({ message: "El stock debe ser un número válido" })
            .min(0, "El stock debe ser mayor o igual a 0")
    ),
    categoria: z.enum(CategoryEnum, { message: "La categoría es obligatoria" })
});