export default function CredentialFormInput({
  children,
  className,
  id,
  inputRef,
  ...props
}) {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-2">
      <label
        htmlFor={id}
        className="block w-full text-sm text-left text-slate-800"
      >
        {children}
      </label>
      <input
        className={`w-full px-4 py-2 rounded-md focus:border focus:ring focus:ring-blue-300 bg-sky-50 focus:ring-opacity-40 focus:border-blue-400 focus:outline-none text-slate-800 ${className}`}
        ref={inputRef}
        id={id}
        {...props}
      />
    </div>
  );
}
