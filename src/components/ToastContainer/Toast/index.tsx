import React, { useEffect } from 'react';

import { FiAlertCircle, FiCheckCircle, FiInfo, FiXCircle } from 'react-icons/fi';

import { Container } from './styles';

import { ToastMessage, useToast } from '../../../hooks/ToastContext';

interface ToastProps {
    toast: ToastMessage;
    style: object;
}

const icons = {
    info: <FiInfo size={24} />,
    error: <FiAlertCircle size={24} />,
    success: <FiCheckCircle size={24} />,
};

const Toast: React.FC<ToastProps> = ({ toast, style }) => {

    const { removeToast } = useToast();

    useEffect(() => {
        const timer = setTimeout(() => {
            removeToast(toast.id);
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, [removeToast, toast.id]);

    return (
        <Container style={style} type={toast.type} hasDescription={!!toast.description}>
            {icons[toast.type || 'info']};
            <div>
                <strong>{toast.title}</strong>
                {toast.description && <p>{toast.description}</p>}
            </div>
            <button>
                <FiXCircle onClick={() => removeToast(toast.id)} size={18} />
            </button>
        </Container>);
}

export default Toast;