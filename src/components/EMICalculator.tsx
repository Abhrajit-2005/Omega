'use client';

import React, { useState, useMemo } from 'react';

export default function EMICalculator() {
    const [loanAmount, setLoanAmount] = useState(1326000);
    const [interestRate, setInterestRate] = useState(9.5);
    const [tenure, setTenure] = useState(60);

    const calculateEMI = () => {
        if (loanAmount <= 0 || interestRate <= 0 || tenure <= 0) {
            return { emi: 0, totalPayment: 0, totalInterest: 0 };
        }
        const monthlyRate = interestRate / (12 * 100);
        const emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) / (Math.pow(1 + monthlyRate, tenure) - 1);
        const totalPayment = emi * tenure;
        const totalInterest = totalPayment - loanAmount;

        return {
            emi: Math.round(emi),
            totalPayment: Math.round(totalPayment),
            totalInterest: Math.round(totalInterest)
        };
    };

    const result = useMemo(calculateEMI, [loanAmount, interestRate, tenure]);
    const principalPercentage = (loanAmount / result.totalPayment) * 100;
    const interestPercentage = (result.totalInterest / result.totalPayment) * 100;

    return (
        <div className="w-full max-w-4xl mx-auto p-8 bg-white rounded-3xl shadow-2xl border border-gray-200/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-50 via-indigo-50 to-transparent opacity-60 rounded-full blur-3xl -z-0"></div>

            <div className="text-center mb-8 relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                </div>
                <h2 className="text-4xl font-black text-gray-900 mb-2">EMI Calculator</h2>
                <p className="text-gray-600 font-medium">Plan your car loan payments</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 relative z-10">
                <div className="space-y-6">
                    <div className="group">
                        <label htmlFor="loanAmount" className="flex items-center justify-between text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">
                            <span>Loan Amount</span>
                            <span className="text-blue-600 text-lg">₹{loanAmount.toLocaleString('en-IN')}</span>
                        </label>
                        <input
                            type="range"
                            id="loanAmount"
                            min="100000"
                            max="5000000"
                            step="10000"
                            value={loanAmount}
                            onChange={(e) => setLoanAmount(Number(e.target.value))}
                            className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer accent-blue-600 hover:accent-indigo-600 transition-all"
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-2 font-semibold">
                            <span>₹1L</span>
                            <span>₹50L</span>
                        </div>
                    </div>

                    <div className="group">
                        <label htmlFor="interestRate" className="flex items-center justify-between text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">
                            <span>Interest Rate</span>
                            <span className="text-blue-600 text-lg">{interestRate}% p.a.</span>
                        </label>
                        <input
                            type="range"
                            id="interestRate"
                            min="5"
                            max="20"
                            step="0.1"
                            value={interestRate}
                            onChange={(e) => setInterestRate(Number(e.target.value))}
                            className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer accent-blue-600 hover:accent-indigo-600 transition-all"
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-2 font-semibold">
                            <span>5%</span>
                            <span>20%</span>
                        </div>
                    </div>
                    <div className="group">
                        <label htmlFor="tenure" className="flex items-center justify-between text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">
                            <span>Loan Tenure</span>
                            <span className="text-blue-600 text-lg">{tenure} months ({Math.round(tenure / 12)} years)</span>
                        </label>
                        <input
                            type="range"
                            id="tenure"
                            min="12"
                            max="84"
                            step="6"
                            value={tenure}
                            onChange={(e) => setTenure(Number(e.target.value))}
                            className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer accent-blue-600 hover:accent-indigo-600 transition-all"
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-2 font-semibold">
                            <span>1 year</span>
                            <span>7 years</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="p-6 bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-600 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-transform duration-300">
                        <p className="text-sm font-bold uppercase tracking-wider opacity-90 mb-2">Monthly EMI</p>
                        <p className="text-5xl font-black mb-1">₹{result.emi.toLocaleString('en-IN')}</p>
                        <p className="text-sm opacity-80">per month for {Math.round(tenure / 12)} years</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-5 bg-gradient-to-br from-white to-gray-50 rounded-xl border-2 border-gray-100 hover:border-blue-200 transition-all shadow-sm hover:shadow-md">
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Principal</p>
                            <p className="text-2xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                ₹{(loanAmount / 100000).toFixed(2)}L
                            </p>
                        </div>

                        <div className="p-5 bg-gradient-to-br from-white to-gray-50 rounded-xl border-2 border-gray-100 hover:border-blue-200 transition-all shadow-sm hover:shadow-md">
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Interest</p>
                            <p className="text-2xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                ₹{(result.totalInterest / 100000).toFixed(2)}L
                            </p>
                        </div>
                    </div>
                    <div className="p-5 bg-gradient-to-br from-gray-50 to-white rounded-xl border-2 border-gray-200 shadow-inner">
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 text-center">Total Payment</p>
                        <p className="text-3xl font-black text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            ₹{result.totalPayment.toLocaleString('en-IN')}
                        </p>
                    </div>
                    <div className="p-5 bg-gradient-to-br from-white to-gray-50 rounded-xl border-2 border-gray-100">
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Payment Breakdown</p>
                        <div className="flex h-4 rounded-full overflow-hidden shadow-inner mb-3">
                            <div
                                className="bg-blue-400 transition-all duration-500"
                                style={{ width: `${principalPercentage}%` }}
                            ></div>
                            <div
                                className="bg-indigo-600 transition-all duration-500"
                                style={{ width: `${interestPercentage}%` }}
                            ></div>
                        </div>
                        <div className="flex justify-between text-xs">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                                <span className="font-semibold text-gray-600">Principal {principalPercentage.toFixed(1)}%</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-indigo-600"></div>
                                <span className="font-semibold text-gray-600">Interest {interestPercentage.toFixed(1)}%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}