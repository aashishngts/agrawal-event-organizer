import React from "react";

const WhatsAppFloat = () => {
  const phoneNumber = "919999999999"; 
  const message = "Hello, I want to enquire about your event services.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="20"
          height="20"
          fill="white"
        >
          <path d="M16 .5C7.4.5.5 7.4.5 16c0 2.8.7 5.5 2 7.8L.5 31.5l7.9-2c2.2 1.2 4.7 1.8 7.6 1.8 8.6 0 15.5-6.9 15.5-15.5S24.6.5 16 .5zm0 28.3c-2.4 0-4.6-.6-6.6-1.7l-.5-.3-4.7 1.2 1.2-4.6-.3-.5c-1.1-2-1.7-4.3-1.7-6.6 0-7.1 5.8-12.9 12.9-12.9S28.9 8.9 28.9 16 23.1 28.8 16 28.8zm7.2-9.7c-.4-.2-2.3-1.1-2.7-1.2-.4-.2-.7-.2-1 .2-.3.4-1.1 1.2-1.4 1.4-.3.2-.5.3-.9.1-.4-.2-1.7-.6-3.2-2-1.2-1-2-2.2-2.3-2.6-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.5-.7.2-.3.1-.6 0-.8-.1-.2-1-2.4-1.4-3.3-.3-.7-.6-.6-1-.6h-.9c-.3 0-.8.1-1.2.6-.4.5-1.5 1.4-1.5 3.4s1.5 4 1.7 4.3c.2.3 3 4.6 7.2 6.5 1 .4 1.8.7 2.4.9 1 .3 1.9.3 2.6.2.8-.1 2.3-.9 2.6-1.7.3-.8.3-1.5.2-1.7-.1-.2-.4-.3-.8-.5z" />
        </svg>
      </div>
    </a>
  );
};

export default WhatsAppFloat;
