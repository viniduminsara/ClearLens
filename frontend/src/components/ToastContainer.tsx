import {useToast} from "../context/ToastContext.tsx";
import Toast from "./Toast.tsx";

const ToastContainer = () => {
    const {toasts} = useToast();

    return (
        <div id="toast" className=" toast toast-end">
            {toasts.map((value, index) => (
                <Toast key={index} data={value}/>
            ))}
        </div>
    )
}

export default ToastContainer;
