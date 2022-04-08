import React from "react";
declare type ModalProps = React.HTMLAttributes<HTMLDivElement> & {
    isOpen: boolean;
    children: React.ReactNode;
    closeModal: () => void;
    removeFooter?: boolean;
    title: string;
};
declare const Modal: React.FC<ModalProps>;
export default Modal;
