function FormInput({
  label,
  type,
  placeholder,
  icon: Icon,
  register,
  name,
  error,
}) {
  return (
    <div>
      <label className="text-sm text-slate-600">
        {label}
      </label>

      <div className="mt-2 flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4">
        <Icon
          size={18}
          className="text-violet-500"
        />

        <input
          type={type}
          placeholder={placeholder}
          {...register(name)}
          className="w-full py-4 outline-none bg-transparent"
        />
      </div>

      {error && (
        <p className="text-red-500 text-sm mt-1">
          {error.message}
        </p>
      )}
    </div>
  );
}

export default FormInput;