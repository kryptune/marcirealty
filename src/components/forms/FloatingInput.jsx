import { useState } from "react";

export default function FloatingInput({ label, name, type = "text" }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const validate = (val) => {
    if (type === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!val) {
        setError("Email is required");
      } else if (!emailRegex.test(val)) {
        setError("Please enter a valid email address");
      } else {
        setError("");
      }
    } else {
      if (!val) {
        setError(`${label.replace("*", "")} is required`);
      } else {
        setError("");
      }
    }
  };

  const handleBlur = () => {
    validate(value);
  };

  return (
    <div className="relative w-full font-sanspro">
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={handleBlur}
        placeholder=" "
        className={`peer w-full border-gray-300 border px-4 pt-6 pb-2 text-white bg-transparent transition-all duration-300 
          ${
            error
              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
              : "border-white focus:border-[#5B3E40] focus:ring-white"
          }`}
      />
      <label
        htmlFor={name}
        className={`absolute left-4 top-2 text-sm transition-all font-medium
          peer-placeholder-shown:top-4 peer-placeholder-shown:text-white peer-placeholder-shown:text-sm
          peer-focus:top-1 peer-focus:text-sm
          ${
            error
              ? "text-red-500 peer-focus:text-red-500"
              : "text-white peer-focus:text-white"
          }`}
      >
        {label}
      </label>
      {error && <p className="mt-1 text-xs text-red-300">{error}</p>}
    </div>
  );
}
