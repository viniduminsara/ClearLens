import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {useToast} from "./ToastContext.tsx";
import {
    addCartItemService,
    addWishlistItemService,
    deleteCartItemService, deleteWishlistItemService,
    userDetailsService
} from "../api/apiServices.ts";

interface AppContextType {
    user: UserObject | null;
    isAuthenticated: boolean,
    token: string,
    login: (jwtToken: string) => void;
    logout: () => void;
    addCartItem: (productId: string) => void;
    deleteCartItem: (productId: string) => void;
    addWishlistItem: (productId: string) => void;
    deleteWishlistItem: (productId: string) => void;
    isInCart: (productId: string | undefined) => boolean;
    isInWishlist: (productId: string | undefined) => boolean;
    cartTotal: number;
}

const defaultContext: AppContextType = {
    user: null,
    isAuthenticated: false,
    token: "",
    login: () => {
    },
    logout: () => {
    },
    addCartItem: () => {
    },
    deleteCartItem: () => {
    },
    addWishlistItem: () => {
    },
    deleteWishlistItem: () => {
    },
    isInCart: () => {
        return false;
    },
    isInWishlist: () => {
        return false;
    },
    cartTotal: 0
};

const AppContext = createContext(defaultContext);

interface AppProviderProps {
    children: ReactNode;
}

export const AppContextProvider: React.FC<AppProviderProps> = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState("");
    const [user, setUser] = useState<UserObject | null>(null);
    const [cartTotal, setCartTotal] = useState(0);
    const {showToast} = useToast();

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
            const response = await userDetailsService(jwtToken);
            if (response.ok) {
                const data = await response.json();
                setUser(data.user);
                setIsAuthenticated(true);
                console.log(data)

                const total = data.user.cart.reduce((acc, item) => acc + item.newPrice, 0);
                setCartTotal(total);
            }

            if (response.status === 403) {
                return;
            }
        } catch (err) {
            return;
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            setToken(token);
            getUserDetails(token);
        }
    }, []);

    const addCartItem = async (productId: string) => {
        try {
            const response = await addCartItemService(productId, token);

            if (response.ok) {
                showToast({type: 'success', message: 'Cart item added successfully.'});
                getUserDetails(token);
            } else {
                const errorData = await response.json();
                if (response.status === 404 || response.status === 409) {
                    showToast({type: 'error', message: errorData.message});
                } else {
                    console.error('Error while occurred', response.statusText);
                }
            }
        } catch (error) {
            console.error('Error occurred', error.message);
        }
    }

    const deleteCartItem = async (productId: string) => {
        try {
            const response = await deleteCartItemService(productId, token);

            if (response.ok) {
                showToast({type: 'success', message: 'Cart item deleted successfully.'});
                getUserDetails(token);
            } else {
                const errorData = await response.json();
                if (response.status === 404) {
                    showToast({type: 'error', message: errorData.message});
                } else {
                    console.error('Error occurred', response.statusText);
                }
            }
        } catch (error) {
            console.error('Error occurred', error.message);
        }
    }

    const addWishlistItem = async (productId: string) => {
        try {
            const response = await addWishlistItemService(productId, token);

            if (response.ok) {
                showToast({type: 'success', message: 'Wishlist item added successfully.'});
                getUserDetails(token);
            } else {
                const errorData = await response.json();
                if (response.status === 404 || response.status === 409) {
                    showToast({type: 'error', message: errorData.message});
                } else {
                    console.error('Error occurred', response.statusText);
                }
            }
        } catch (error) {
            console.error('Error occurred', error.message);
        }
    }

    const deleteWishlistItem = async (productId: string) => {
        try {
            const response = await deleteWishlistItemService(productId, token);

            if (response.ok) {
                showToast({type: 'success', message: 'Wishlist item deleted successfully.'});
                getUserDetails(token);
            } else {
                const errorData = await response.json();
                if (response.status === 404) {
                    showToast({type: 'error', message: errorData.message});
                } else {
                    console.error('Error occurred', response.statusText);
                }
            }
        } catch (error) {
            console.error('Error occurred', error.message);
        }
    }

    const isInCart = (productId: string | undefined) => {
        return user?.cart.some((item) => item._id === productId);
    }

    const isInWishlist = (productId: string | undefined) => {
        return user?.wishlist.some((item) => item._id === productId);
    }

    return (
        <AppContext.Provider
            value={{
                user,
                isAuthenticated,
                token,
                login,
                logout,
                addCartItem,
                deleteCartItem,
                addWishlistItem,
                deleteWishlistItem,
                isInCart,
                isInWishlist,
                cartTotal
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useApp = (): AppContextType => {
    return useContext(AppContext);
}
