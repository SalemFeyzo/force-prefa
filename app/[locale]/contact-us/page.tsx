import ContactForm from "@/components/contact-form";
import { unstable_setRequestLocale } from "next-intl/server";
import {
  FaXTwitter,
  FaFacebook,
  FaTelegram,
  FaYoutube,
  FaWhatsapp,
  FaTiktok,
} from "react-icons/fa6";

export default function ContactUs({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <div className="flex flex-col gap-3 bg-gray-800 text-gray-50">
      <div className="flex h-full w-full flex-col gap-3 bg-gray-800 text-gray-50 md:flex-row">
        <div className="w-full p-5">
          <h1 className="border-b-2 pb-2 text-xl font-bold">
            Contact Information
          </h1>
          <br />
          <h2 className="text-lg">Address:</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non atque
            nostrum expedita? Numquam ipsum rem exercitationem dolor eveniet
            laudantium, esse ipsa nulla quae quidem? Dicta suscipit eos sed at
            sequi?
          </p>
          <br />
          <div className="flex items-baseline justify-start gap-2">
            <h2 className="text-lg">Email:</h2>
            <a href="mailto:info@form-prefabrik.com">info@forceprefabrik.com</a>
          </div>
          <br />
          <div className="flex items-baseline justify-start gap-2">
            <h2 className="text-lg">Phone Number:</h2>
            <a href="tel:+905526100173" dir="ltr">
              +90 552 610 01 73
            </a>
          </div>
          <br />
          <div className="flex items-center justify-start gap-2 md:flex-row">
            <h2 className="text-lg">Social Links:</h2>
            <a
              href="https://wa.me/905526100173"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp className="h-7 w-7 text-green-500" />
            </a>
            <a href="https://telegram.com/" target="_blank" rel="noreferrer">
              <FaTelegram className="h-7 w-7 text-blue-500" />
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noreferrer">
              <FaFacebook className="h-7 w-7 text-blue-700" />
            </a>
            <a href="https://x.com/" target="_blank" rel="noreferrer">
              <FaXTwitter className="h-7 w-7 text-black" />
            </a>

            <a href="https://youtube.com/" target="_blank" rel="noreferrer">
              <FaYoutube className="h-10 w-10 text-red-700" />
            </a>
            <a href="https://tiktok.com/" target="_blank" rel="noreferrer">
              <FaTiktok className="h-7 w-7 text-gray-950" />
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1948.1981648288775!2d36.13483627777435!3d36.237723319118984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1724329884052!5m2!1sen!2s"
        className="w-full"
        height="300"
        // style="border:0;"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
