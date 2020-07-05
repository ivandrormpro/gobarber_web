import React, { InputHTMLAttributes, useEffect, useRef, useCallback, useState } from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi'

// import { IconBaseProps } from 'react-icons';
// import { useField } from '@unform/core';

import { Container, Toast } from './styles';

// interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
//     name: string;
//     icon: React.ComponentType<IconBaseProps>;
// }

const ToastContainer: React.FC = () => {

    return (
        <Container>
            <Toast hasDescription>
                <FiAlertCircle size={20} />
                <div>
                    <strong>Aconteceu um erro</strong>
                    <p>Nao foi possivel fazer o login</p>
                </div>
                <button>
                    <FiXCircle size={18} />
                </button>
            </Toast>

            <Toast type="success" hasDescription={false}>
                <FiAlertCircle size={20} />
                <div>
                    <strong>Aconteceu um erro</strong>
                    <p>Nao foi possivel fazer o login</p>
                </div>
                <button>
                    <FiXCircle size={18} />
                </button>
            </Toast>

            <Toast type="error" hasDescription>
                <FiAlertCircle size={20} />
                <div>
                    <strong>Aconteceu um erro</strong>
                    <p>Nao foi possivel fazer o login</p>
                </div>
                <button>
                    <FiXCircle size={18} />
                </button>
            </Toast>

        </Container>
    );
}

export default ToastContainer;