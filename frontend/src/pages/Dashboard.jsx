import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-3xl font-bold">Bienvenue {user?.full_name} !</h1>
            <p className="text-gray-600">Votre rôle : {user?.role}</p>
            <button 
                onClick={logout}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
                Se déconnecter
            </button>
        </div>
    );
};

export default Dashboard;
