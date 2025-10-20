export default function FormSelect({
  label,
  name,
  value,
  onChange,
  options = [],
}) {
  return (
    <div className="flex flex-col w-full font-sanspro">
      {label && (
        <label
          htmlFor={name}
          className="mb-1 text-base font-medium text-gray-700 font-sanspro"
        >
          {label}
        </label>
      )}
      <select
        id={name}
        name={name}
        defaultValue=""
        className="w-full rounded-lg border border-gray-300 text-gray-900
                   focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-300 transition h-10 p-2 bg-white"
      >
        <option value="">{`Select ${label}`}</option>
        {options.map((option, idx) => (
          <option key={idx} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
