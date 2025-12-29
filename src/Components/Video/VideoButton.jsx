import React from "react";

function WhatsAppButton({ phoneNumber, message = "Hello, I'm interested in your services!" }) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <button 
      className="request-loader" 
      onClick={handleClick}
    >
      <i className="fa-brands fa-whatsapp" style={{ color: '#fff' }}></i>
    </button>
  );
}

export default WhatsAppButton;