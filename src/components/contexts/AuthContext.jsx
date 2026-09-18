import { useContext, createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("authToken") || null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const savedToken = localStorage.getItem("authToken");
        const savedUser = localStorage.getItem("currentUser");

        if (savedToken && savedUser && savedUser !== "undefined") {
            try {
                setToken(savedToken);
                setUser(JSON.parse(savedUser));
            } catch (error) {
                console.error("Error al parsear el usuario del localStorage:", error);
                localStorage.removeItem("currentUser");
            }
        }
        setLoading(false);
    }, []);

    const login = (credentialResponse, userInfo) => {
        const newToken = credentialResponse.credential;
        setToken(newToken);
        setUser(userInfo);
        localStorage.setItem("authToken", newToken);
        localStorage.setItem("currentUser", JSON.stringify(userInfo));
    };

    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem("authToken");
        localStorage.removeItem("currentUser");
    };
    return (
        <AuthContext.Provider value={{ user, token, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth debe usarse dentro de AuthProvider');
    }
    return context;
};