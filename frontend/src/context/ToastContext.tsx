import { createContext, ReactNode, useContext, useState } from "react";

interface ToastContextType {
    showToast: (toast: Toast) => void;
    toasts: Toast[];
}

const defaultContext: ToastContextType = {
    showToast: () => {},
    toasts: []
};

const ToastContext = createContext<ToastContextType>(defaultContext);

interface ToastProviderProps {
    children: ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const showToast = (toast: Toast) => {
        setToasts(prevState => [...prevState, toast]);
    };

    return (
        <ToastContext.Provider value={{ showToast, toasts }}>
            {children}
        </ToastContext.Provider>
    );
};

export const useToast = (): ToastContextType => {
    return useContext(ToastContext);
};
