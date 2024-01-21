export default function SearchInput({ children, inputRef, ...props }) {
  return (
    <input
      className="w-full h-8 p-2 border-2 border-blue-300 rounded-t-md bg-sky-50 focus:outline-none"
      autoFocus
      placeholder="search user name..."
      id="query"
      name="query"
      ref={inputRef}
      {...props}
    />
  );
}
