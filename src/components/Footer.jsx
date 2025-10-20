import socials from "../data/socials.json";
export default function Footer() {
  const contactElements = socials.map((contact) => (
    <a
      key={contact.id}
      href={contact.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i
        className={`${contact.icon} text-xl md:text-3xl cursor-pointer hover:text-blue-500 transition duration-200`}
      ></i>
    </a>
  ));
  return (
    <div className="flex flex-col justify-center items-center p-8 md:p-12">
      <div className="flex text-white gap-8 justify-center items-center my-2 md:my-6 ">
        {contactElements}
      </div>
      <p className="font-sanspro text-gray-500 text-[10px] md:text-xs">
        COPYRIGHT © 2023 MARCI METZGER HOMES - ALL RIGHTS RESERVED
      </p>
    </div>
  );
}
