"use client";

export default function ReserveButton({
  amount = 99,
  description = "Vehicle Deposit",
  vehicleId,
}) {
  const handleClick = async () => {
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, description, vehicleId }),
      });

      const data = await res.json();
      if (data?.url) {
        window.location.href = data.url; // Go to Stripe Checkout
      } else {
        alert(data?.error || "Checkout error");
      }
    } catch (e) {
      alert("Network error starting checkout");
    }
  };

  return (
    <button
      onClick={handleClick}
      style={{
        width: "100%",
        padding: "12px 16px",
        background: "#111827",
        color: "#fff",
        borderRadius: 10,
        border: "none",
        fontWeight: 700,
        cursor: "pointer",
      }}
    >
      Reserve for £{amount}
    </button>
  );
}