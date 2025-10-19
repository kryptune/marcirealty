import { VscChromeClose } from "react-icons/vsc";
import links from "../data/links";
import socials from "../data/socials.json";

export default function Sidebar({ setShowSidebar }) {
  const contactElements = socials.map((contact) => (
    <a
      key={contact.id}
      href={contact.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i
        className={`${contact.icon} text-2xl md:text-4xl cursor-pointer hover:text-blue-500 transition duration-200`}
      ></i>
    </a>
  ));
  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const linkElements = links.map((link) => (
    <a
      key={link.id}
      onClick={() => handleScrollToSection(link.id)}
      className="gap-3"
    >
      <h1 className="font-sanspro text-base md:text-lg pl-8 md:pl-12 pr-6 cursor-pointer hover:text-blue-500">
        {link.title}
      </h1>
    </a>
  ));
  const handleClick = () => {
    setShowSidebar((prev) => !prev);
  };

  return (
    <nav className="flex flex-col bg-[#EEEEEE] h-2/3 md:h-screen w-1/2 md:w-1/5 text-black fixed top-0 left-0 z-20 md:pt-12 pt-6 pb-6">
      <div className="flex flex-col mb-auto">
        <VscChromeClose
          onClick={handleClick}
          className="md:text-2xl text-xl text-black ml-auto mr-6 md:mr-12 cursor-pointer hover:text-blue-500 transition duration-200"
        />
        <div className="flex flex-col mt-8 ml-4 mr-auto gap-6">
          {linkElements}
        </div>
      </div>
      <div className="flex text-black gap-5 justify-center items-center">
        {contactElements}
      </div>
    </nav>
  );
}
