import { useNavigate } from "react-router-dom";
import { useAuth } from "@/components/contexts/AuthContext";
import { GoogleLogin } from "@react-oauth/google";
import toast, { Toaster } from 'react-hot-toast';

export default function LoginPage() {
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleLoginSuccess = (credentialResponse) => {
        // Creamos un objeto mock básico o extraído para asegurar que el usuario nunca viaje vacío
        const userInfo = {
            name: "Usuario ERP",
            email: "admin@erp.com"
        };

        // Pasamos ambos parámetros que exige tu AuthContext
        login(credentialResponse, userInfo);
        toast.success("Login exitoso");
        navigate("/inventario");
    };

    const handleLoginError = () => {
        toast.error("Login fallido");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
            <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center space-y-6">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Iniciar Sesión</h1>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                    Accede al invetario y dashboard con tu cuenta de Google.
                </p>
                <div className="flex justify-center pt-4">
                    <GoogleLogin
                        onSuccess={handleLoginSuccess}
                        onError={handleLoginError}
                        theme="outline"
                        size="large"
                        shape="pill"
                    />
                </div>
            </div>
        </div>
    );
}