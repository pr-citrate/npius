export default function AuthFormButton({ children, className, ...props }) {
  return (
    <button
      className={`w-full px-4 py-2 text-lg bg-blue-600 rounded-lg hover:bg-blue-700 text-sky-100 text-bold focus:border focus:ring focus:ring-blue-300 focus:ring-opacity-40 focus:border-blue-400 focus:outline-none ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
