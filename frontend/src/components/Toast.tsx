import {useEffect, useState} from "react";
import {FaRegCheckCircle} from "react-icons/fa";
import {MdErrorOutline} from "react-icons/md";
import {IoWarningOutline} from "react-icons/io5";
import {IoMdInformationCircleOutline} from "react-icons/io";

interface ToastProps {
    data: Toast;
}

const Toast = ({ data }: ToastProps) => {
    const [isShowing, setIsShowing] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsShowing(false);
        }, 3000)
    }, []);

    const getIcon = () => {
        if (data.type === 'success'){
            return <FaRegCheckCircle />
        }else if (data.type === 'error'){
            return <MdErrorOutline />
        }else if (data.type === 'warning'){
            return <IoWarningOutline />
        }else if (data.type === 'info'){
            return <IoMdInformationCircleOutline />
        }
    }

    return (
        <div role="alert" className={`alert bg-neutral text-${data.type} ${isShowing ? '' : 'hidden'}`}>
            {getIcon()}
            <span>{data.message}</span>
        </div>
    )
}

export default Toast;
