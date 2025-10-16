"use client";

/**
 * Floating WhatsApp button
 * - Uses inline styles (no Tailwind) so size is consistent on your site
 * - Opens WhatsApp chat to the configured number
 * - Small, fixed button in the bottom-right
 */
export default function WhatsAppButton() {
  // ✅ Use full international format, no + or spaces
  const number = "447722471841"; // <-- your number
  // Optional: prefill a message
  const text = encodeURIComponent("Hi, I'm interested in a vehicle on Motorea.");

  return (
    <a
      href={`https://wa.me/${number}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      style={{
        position: "fixed",
        right: "20px",
        bottom: "20px",
        width: "56px",
        height: "56px",
        backgroundColor: "#25D366",
        color: "#ffffff",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
        zIndex: 99999,
        textDecoration: "none",
        cursor: "pointer",
        overflow: "hidden" // ensure inner svg can't expand
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        aria-hidden="true"
        style={{
          width: "26px",
          height: "26px",
          maxWidth: "26px",
          maxHeight: "26px",
          display: "block",
          flex: "none"
        }}
        preserveAspectRatio="xMidYMid meet"
        fill="currentColor"
      >
        <path d="M19.11 17.19c-.27-.14-1.6-.79-1.84-.88-.25-.09-.43-.14-.62.14-.18.27-.71.88-.87 1.06-.16.18-.32.2-.59.07-.27-.14-1.12-.41-2.13-1.31-.79-.7-1.32-1.56-1.48-1.83-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.62-1.49-.85-2.05-.22-.53-.45-.46-.62-.46-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.98 2.66 1.12 2.84.14.18 1.93 2.95 4.7 4.14.66.29 1.18.46 1.59.59.67.21 1.28.18 1.76.11.54-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32zM16.02 3.2c-7.08 0-12.8 5.72-12.8 12.8 0 2.26.59 4.38 1.63 6.22L3.2 28.8l6.75-1.61a12.72 12.72 0 0 0 6.07 1.56c7.08 0 12.8-5.72 12.8-12.8s-5.72-12.8-12.8-12.8zm0 23.1c-2.2 0-4.24-.72-5.91-1.94l-.42-.3-4.01.96.96-3.91-.31-.43a9.77 9.77 0 0 1-1.96-5.88c0-5.42 4.41-9.83 9.83-9.83s9.83 4.41 9.83 9.83-4.41 9.83-9.83 9.83z"/>
      </svg>
    </a>
  );
}
