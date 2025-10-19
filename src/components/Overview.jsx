import overview from "../data/overview.json";

export default function Overview() {
  const overviewElements = overview.map((overviewDetails) => (
    <div
      key={overviewDetails.id}
      className={`flex flex-col md:flex-row md:justify-between  md:h-[300px] my-8 ${
        overviewDetails.id % 2 === 0 ? "md:flex-row-reverse" : ""
      }`}
    >
      <img
        src={overviewDetails.img}
        alt="Image 1"
        className="md:w-[48%] w-full h-full rounded-lg mb-6 shadow-2xl"
      />
      <div className="flex flex-col text-center items-center justify-center font-sanspro w-full md:w-1/2 h-full text-black ">
        <h1 className="text-2xl mb-8">{overviewDetails.title}</h1>
        <div>
          {overviewDetails.desc.split("\n").map((line, index) => (
            <p key={index} className="md:text-lg text-base">
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  ));
  return (
    <div className="flex flex-col justify-center items-center md:p-16 p-8 bg-white">
      <h1 className="text-4xl text-black font-cinzel mt-10 my-4 md:my-10">
        GET IT SOLD
      </h1>
      <div className="flex flex-col md:w-full md:px-16 px-4 gap-2 md:gap-2">
        {overviewElements}
      </div>
    </div>
  );
}
