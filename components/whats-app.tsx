"use client";
import Image from "next/image";

const WhatsApp = () => {
  return (
    <div className="fixed bottom-10 right-5 block">
      <a href="{whatsAppUrl}" target="_blank" rel="noreferrer">
        <Image
          src="/images/whatsapp.svg"
          width={50}
          height={50}
          alt="whatsApp"
          className="object-fill"
        />
      </a>
    </div>
  );
};

export default WhatsApp;
