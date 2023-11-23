import Layer from "@/components/common/spring/Layer";
import Header from "@/components/common/Header";

export default function HeaderSpring({ className, ...props }) {
  return (
    <Layer className={`z-50`} speed={3} {...props}>
      <Header />
    </Layer>
  );
}
