import {createContext, ReactNode, useContext, useEffect, useState} from "react";

interface AppContextType {
    user: UserObject | null;
    isAuthenticated: boolean,
    token: string,
    login: (jwtToken: string) => void;
    logout: () => void;
}

const defaultContext: AppContextType = {
    user: null,
    isAuthenticated: false,
    token: "",
    login: () => {},
    logout: () => {}
};

const AppContext = createContext(defaultContext);

interface AppProviderProps {
    children: ReactNode;
}

export const AppContextProvider: React.FC<AppProviderProps> = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState("");
    const [user, setUser] = useState<UserObject | null>(null);

    const login = async (jwtToken: string) => {
        setToken(jwtToken);
        await getUserDetails(jwtToken);
        localStorage.setItem("token", jwtToken);
        setIsAuthenticated(true);
    }

    const logout = () => {
        setToken("");
        localStorage.removeItem("token");
        setIsAuthenticated(false);
    }

    const getUserDetails = async (jwtToken) => {
        try {
            const response = await fetch('http://localhost:3000/api/v1/users', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${jwtToken}`,
                },
            });
            if (response.ok){
                const data = await response.json();
                setUser(data.user);
                console.log(data)
            }
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("token");

        if(token) {
            setIsAuthenticated(true);
            setToken(token);
            getUserDetails(token);
        }
    }, []);

    return (
        <AppContext.Provider value={{user, isAuthenticated, token, login, logout}}>
            {children}
        </AppContext.Provider>
    )
}

export const useApp = (): AppContextType => {
    return useContext(AppContext);
}
