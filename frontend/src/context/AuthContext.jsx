import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    // Fonction pour gérer la connexion
    const login = async (email, password) => {
        // Simulons une API locale pour le test
        if (email === "admin@example.com" && password === "admin123") {
            const userData = { full_name: "Admin", role: "admin", token: "fake-token" };
            setUser(userData);
            localStorage.setItem("user", JSON.stringify(userData)); // Stocker dans localStorage
            navigate("/dashboard"); // Redirection après connexion
        } else {
            alert("Identifiants incorrects !");
        }
    };

    // Fonction pour la déconnexion
    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
