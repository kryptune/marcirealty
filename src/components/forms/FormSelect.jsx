export default function FormSelect({
  label,
  name,
  value,
  onChange,
  options = [],
}) {
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label
          htmlFor={name}
          className="mb-1 text-base font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <select
        id={name}
        name={name}
        defaultValue=""
        className="w-full rounded-lg border border-gray-300 text-gray-900
                   focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-300 transition h-10 py-2"
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
