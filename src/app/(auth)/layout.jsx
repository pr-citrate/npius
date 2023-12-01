export default function AuthLayout({ children }) {
  return (
    <main className="w-full h-full">
      <div className="flex flex-col items-center justify-center w-full h-full bg-sky-100">
        <form className="flex flex-col items-center justify-center p-12 space-y-4 border rounded-xl bg-sky-200 border-sky-300 min-w-[25%]">
          {children}
        </form>
      </div>
    </main>
  );
}
