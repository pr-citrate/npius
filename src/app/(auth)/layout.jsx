export default function AuthLayout({ children }) {
  return (
    <main className="w-full h-full">
      <div className="flex flex-col items-center justify-center w-full h-full bg-sky-100">
        <form className="flex flex-col items-center justify-evenly p-12 space-y-4 border rounded-xl bg-sky-200 border-sky-300 min-w-[25%] min-h-[40%]">
          {children}
        </form>
      </div>
    </main>
  );
}
