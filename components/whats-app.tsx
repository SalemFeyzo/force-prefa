"use client";
import Image from "next/image";

const WhatsApp = () => {
  return (
    <div className="block fixed right-5 bottom-10  ">
      <a href="{whatsAppUrl}" target="_blank" rel="noreferrer">
        <Image
          src="/images/whatsapp.svg"
          width={50}
          height={50}
          alt="whatsApp"
          className=" object-fill"
        />
      </a>
    </div>
  );
};

export default WhatsApp;
