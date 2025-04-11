'use client';
import { useState } from "react";

const Email = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("coriusdev2025@gmail.com");
    setShowTooltip(true);

    // Hide tooltip after 2 seconds
    setTimeout(() => {
      setShowTooltip(false);
    }, 2000);
  };

  return (
    <div className="relative">
      <a
        className="group transition-all duration-300 ease-in-out"
        href="mailto:coriusdev2025@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleCopyEmail}
      >
        <span className="bg-left-bottom bg-gradient-to-r from-green-500 to-green-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
          Contact Us
        </span>
      </a>
      {showTooltip && (
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-2 py-1 rounded text-sm whitespace-nowrap">
          Email copied!
        </div>
      )}
    </div>
  );
};

export default Email;
