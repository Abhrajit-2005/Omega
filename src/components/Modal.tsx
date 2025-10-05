'use client';

import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-4xl max-h-[90vh] flex flex-col"
            >
                <button
                    onClick={onClose}
                    className="absolute -top-3 -right-3 bg-white text-black rounded-full h-8 w-8 flex items-center justify-center text-lg font-bold z-20 border shadow-lg"
                    aria-label="Close modal"
                >
                    &times;
                </button>
                <div className="overflow-y-auto rounded-3xl">
                    {children}
                </div>
            </div>
        </div>
    );
};