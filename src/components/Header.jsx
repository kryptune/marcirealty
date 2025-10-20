import { RxHamburgerMenu } from "react-icons/rx";

export default function Header({ setShowSidebar }) {
  const handleClick = () => {
    setShowSidebar((prev) => !prev);
  };
  return (
    <header className="flex p-4 md:px-24 md:p-6 bg-white items-center justify-center relative">
      <RxHamburgerMenu
        className="absolute right-[63%] md:right-[80%] text-2xl text-black ml-12 mr-24 cursor-pointer hover:text-blue-500 transition duration-200"
        onClick={handleClick}
      />
      <img
        src="/logo/header-logo.webp"
        alt="Realty Logo"
        className="w-3/5 md:w-[37%] h-auto"
      />
    </header>
  );
}
