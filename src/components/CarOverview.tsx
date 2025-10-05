'use client';

import React, { useState } from 'react';
import { Modal } from './Modal';
import EMICalculator from './EMICalculator';

export default function CarOverview() {
    const [is3DModalOpen, setIs3DModalOpen] = useState(false);
    const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

    return (
        <>
            <div className="w-full max-w-2xl mx-auto p-8 bg-white rounded-3xl shadow-2xl border border-gray-200/50 hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-50 via-indigo-50 to-transparent opacity-60 rounded-full blur-3xl -z-0"></div>
                <div className="flex justify-center mb-6 relative z-10">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        Collector&apos;s Edition
                    </span>
                </div>
                <div className="text-center mb-8 relative z-10">
                    <h1 className="text-3xl md:text-3xl font-black text-gray-900 tracking-tight mb-3 leading-tight">1994 Toyota Supra Mk IV</h1>
                    <div className="flex items-center justify-center gap-3 text-gray-600">
                        <span className="flex items-center gap-1.5 text-sm font-semibold"><svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>Petrol</span>
                        <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                        <span className="text-sm font-semibold">2JZ-GE Engine</span>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-5 mb-8 relative z-10">
                    <div className="group relative p-2 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-indigo-600/0 group-hover:from-blue-600/5 group-hover:to-indigo-600/5 rounded-2xl transition-all duration-300"></div>
                        <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-2 relative z-10">Year</p>
                        <p className="font-black text-3xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent relative z-10">1994</p>
                    </div>
                    <div className="group relative p-2 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-indigo-600/0 group-hover:from-blue-600/5 group-hover:to-indigo-600/5 rounded-2xl transition-all duration-300"></div>
                        <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-2 relative z-10">Mileage</p>
                        <p className="font-black text-3xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent relative z-10">18 mpg</p>
                    </div>
                </div>
                <div className="text-center mb-8 p-2 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-100 relative z-10 shadow-inner">
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-3 flex items-center justify-center gap-2"><span className="w-8 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></span>Fixed On-Road Price<span className="w-8 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></span></p>
                    <p className="text-6xl md:text-5xl font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent leading-none">₹13.26L</p>
                    <p className="text-sm text-gray-500 font-medium mt-2">All-inclusive pricing</p>
                </div>

                <div className="relative z-10 flex flex-col gap-3">
                    <button
                        onClick={() => setIs3DModalOpen(true)}
                        className="group relative w-full py-4 px-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 flex items-center justify-center gap-3 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 group-hover:rotate-180 transition-transform duration-700 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
                        <span className="relative z-10 tracking-wide">View 360° Interactive Model</span>
                    </button>

                    <button
                        onClick={() => setIsCalculatorOpen(true)}
                        className="w-full py-4 px-6 bg-blue-50 text-blue-600 font-bold rounded-xl hover:bg-blue-100 transition-all duration-300 flex items-center justify-center gap-3 border border-blue-100"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" /></svg>
                        Calculate EMI
                    </button>
                </div>
            </div>

            <Modal isOpen={is3DModalOpen} onClose={() => setIs3DModalOpen(false)}>
                <div className="relative w-full h-[75vh] bg-black/90 rounded-2xl overflow-hidden">
                    <iframe
                        title="1994 Toyota Supra MK IV"
                        frameBorder="0"
                        allowFullScreen
                        allow="autoplay; fullscreen; xr-spatial-tracking"
                        src="https://sketchfab.com/models/126c185845724e0eadb35229677ba44b/embed"
                        className="w-full h-full rounded-md"
                    ></iframe>
                </div>
            </Modal>

            <Modal isOpen={isCalculatorOpen} onClose={() => setIsCalculatorOpen(false)}>
                <EMICalculator />
            </Modal>
        </>
    );
}