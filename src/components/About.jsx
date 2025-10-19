export default function About() {
  return (
    <div
      id="about"
      className="flex flex-col justify-center bg-[#1A1A1A] h-3/4 md:h-screen flex flex-col text-center items-center justify-center py-8 md:py-2 md:my-12"
    >
      <h1 className="text-white font-cinzel md:text-4xl text-6xl mt-8 mb-10 md:mb-14 ">
        MARCI METZGER
      </h1>
      <img
        src="/assets/marci-metzger-hd.jpg"
        alt="Marci Metzger"
        className="md:w-[55vh] md:h-[55vh] w-[40vh] h-[40vh] p-2 rounded-full object-cover mb-6"
      />
      <h2 className="text-white font-sanspro text-2xl mb-7">
        REALTOR FOR NEARLY 3 DECADES
      </h2>
      <h3 className="text-white font-sanspro text-2xl mb-4">206-919-6886</h3>
    </div>
  );
}
