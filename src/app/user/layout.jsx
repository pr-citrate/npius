import Header from "@/components/common/Header";

export default function userLayout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      {children}
    </div>
  );
}
