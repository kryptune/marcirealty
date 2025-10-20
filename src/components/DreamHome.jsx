import FormInput from "./forms/FormInput";
import FormSelect from "./forms/FormSelect";

export default function DreamHome() {
  const locations = [
    "Carson City",
    "Henderson",
    "Las Vegas",
    "North Las Vegas",
    "Reno",
    "Sparks",
  ];
  const types = ["Apartment", "Condo", "House", "Land", "Townhouse"];
  const sortBy = [
    "Newest",
    "Oldest",
    "Least Expensive to Most",
    "Most Expensive to Least",
    "Bedrooms (Low to High)",
    "Bedrooms (High to Low)",
    "Bathrooms (Low to High)",
    "Bathrooms (High to Low)",
  ];

  const bedrooms = ["Any Number", "Studio", "1+", "2+", "3+", "4+", "5+", "6+"];

  const baths = ["Any Number", "1+", "2+", "3+", "4+", "5+", "6+"];

  return (
    <div
      id="listing"
      className="bg-[url('/assets/section-banner.webp')] bg-cover bg-center h-auto flex flex-col text-center p-8 md:p-24 relative"
    >
      <div className="absolute inset-0 bg-black opacity-25"></div>
      <h1 className="font-cinzel text-4xl z-10 md:mb-20 mb-12 mt-6 md:mt-0">
        FIND YOUR DREAM HOME
      </h1>
      <form
        action="submit"
        className="z-10 bg-white flex flex-col text-start md:p-12 p-6 rounded-xl mb-8"
      >
        <h1 className="font-cinzel text-xl md:text-3xl z-10 text-black ">
          SEARCH LISTINGS
        </h1>
        <div className="flex flex-col md:flex-row gap-6 mt-8">
          <div className="flex flex-col w-full md:w-1/3 gap-8">
            <FormSelect label="Location" options={locations} name="locations" />
            <div className="flex gap-6">
              <FormSelect label="Bedrooms" options={bedrooms} name="bedrooms" />
              <FormSelect label="Baths" options={baths} name="baths" />
            </div>
          </div>
          <div className="flex flex-col w-full md:w-1/3  gap-8">
            <FormSelect label="Type" options={types} name="types" />
            <div className="flex gap-6">
              <FormInput
                label="Min Price"
                placeholder="$ Min"
                name="minprice"
              />
              <FormInput
                label="Max Price"
                placeholder="$ Max"
                name="maxprice"
              />
            </div>
          </div>
          <div className="flex flex-col w-full md:w-1/3 gap-9">
            <FormSelect label="Sort By" options={sortBy} name="sortBy" />
            <button className="w-full md:h-1/3 h-[5vh] rounded-full bg-gray-900 hover:bg-blue-500 hover:scale-105 transition-all transition ease-in-out duration-300">
              SEARCH NOW
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
