export default function FormInput({
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  error,
}) {
  return (
    <div className="flex flex-col mb-4">
      {label && (
        <label
          htmlFor={name}
          className="mb-1 text-base font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 placeholder-gray-400
                   focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-300 transition h-10"
      />
      {error && <span className="text-xs text-red-500 mt-1">{error}</span>}
    </div>
  );
}
