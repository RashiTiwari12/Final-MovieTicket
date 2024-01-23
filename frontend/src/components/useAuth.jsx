import { useContext } from 'react';
import { AuthContext } from './AuthContextProvider'; // Adjust the path

// Create a custom hook to use the authentication context
export const useAuth = () => {
    return useContext(AuthContext);
};
