import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = async (username, password) => {
        try {
            // Your login logic here
            const response = await fetch("http://127.0.0.1:8000/api/login/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            const responseData = await response.json();

            if (!responseData.access_token) {
                alert("Login Failed");
            } else {
                localStorage.setItem("access_token", responseData.access_token);
                localStorage.setItem("refresh_token", responseData.refresh_token);
                setUser(responseData.user); // Assuming your API provides user information
            }
        } catch (error) {
            console.error("Error logging in:", error);
        }
    };

    const logout = () => {
        // Your logout logic here
        setUser(null);
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
