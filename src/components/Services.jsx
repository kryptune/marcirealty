import services from "../data/services.json";
export default function Services() {
  const servicesElement = services.map((service) => (
    <div
      key={service.id}
      className="flex flex-col text-center justify-center items-center rounded-xl w-full md:w-1/3 h-full p-6 text-black font-sanspro border-black-900 border-2 shadow-xl hover:shadow-3xl hover:scale-105 transition-all transition ease-in-out duration-300 cursor-pointer"
    >
      <h1 className="mb-6 text-2xl border-b-2 border-gray-300">
        {service.title}
      </h1>
      <img
        src={service.img}
        alt={service.alt}
        className="h-64 w-64 rounded-full mb-8"
      />
      <h2 className=" text-xl mb-6">{service.Oneline}</h2>
      <p className="mb-4 text-lg">{service.desc}</p>
    </div>
  ));
  return (
    <div
      id="services"
      className="flex  flex-col text-center bg-white p-8 md:p-16 "
    >
      <h1 className="font-cinzel text-4xl text-black my-6 md:mb-12 ">
        OUR SERVICES
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 h-[60%] mb-8">
        {servicesElement}
      </div>
    </div>
  );
}
