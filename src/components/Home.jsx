import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Home() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div
      id="home"
      className="bg-[url('/assets/bg-hero.webp')] bg-cover bg-center h-auto bg-fixed relative "
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="h-auto md:h-screen">
        <Header setShowSidebar={setShowSidebar} />
        {showSidebar && <Sidebar setShowSidebar={setShowSidebar} />}
      </div>
      <div className="flex flex-col text-center justify-center items-center gap-8 text-white relative z-10 mt-20 md:my-0">
        <h2 className="text-lg md:text-2xl font-sanspro font-normal">
          MARCI METZGER - THE RIDGE REALTY GROUP
        </h2>
        <h1 className="text-6xl font-cinzel">PAHRUMP REALTOR</h1>
        <button className="bg-white text-black p-4 rounded-full w-40 md:mb-12 mb-16 font-bold hover:bg-blue-500 hover:scale-105 hover:text-white transition-all transition ease-in-out duration-300">
          CALL NOW
        </button>
      </div>
    </div>
  );
}
