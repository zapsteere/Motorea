"use client";

import React from "react";

/**
 * ReserveButton component for car reservations
 * @param {number} amount - The deposit amount in pounds
 * @param {string} description - Description of the deposit
 */
export default function ReserveButton({ amount = 99, description = "Deposit" }) {
  const handleReserve = () => {
    // TODO: Implement reservation logic
    // This could open a modal, redirect to a form, or handle payment
    console.log(`Reserving with deposit of £${amount} - ${description}`);
    
    // For now, we'll show an alert as a placeholder
    alert(`Reserve with £${amount} deposit - ${description}`);
  };

  return (
    <button
      onClick={handleReserve}
      className="theme-btn bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
      type="button"
    >
      Reserve for £{amount}
    </button>
  );
}