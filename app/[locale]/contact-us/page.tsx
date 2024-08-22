import ContactForm from "@/components/contact-form";
import { unstable_setRequestLocale } from "next-intl/server";

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
            <a href="mailto:info@form-prefabrik.com">
              info@force-prefabrik.com
            </a>
          </div>
          <br />
          <div className="flex items-baseline justify-start gap-2">
            <h2 className="text-lg">Phone Number:</h2>
            <a href="tel:+905526100173" dir="ltr">
              +90 552 610 01 73
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
