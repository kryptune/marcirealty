export default function FloatingTextArea({ label, name, type = "text" }) {
  return (
    <div className="relative w-full">
      <textarea
        type={type}
        name={name}
        id={name}
        placeholder=" "
        className="peer w-full border border-white px-4 pt-6 pb-2 text-white bg-transparent 
                   focus:outline-none focus:border-white focus:ring-1 focus:ring-[#5B3E40] transition-all duration-300"
      />
      <label
        htmlFor={name}
        className="absolute left-4 top-3 text-white text-sm transition-all 
                   peer-placeholder-shown:top-4 peer-placeholder-shown:text-white peer-placeholder-shown:text-sm 
                   peer-focus:top-2 peer-focus:text-sm peer-focus:text-white font-medium"
      >
        {label}
      </label>
    </div>
  );
}
