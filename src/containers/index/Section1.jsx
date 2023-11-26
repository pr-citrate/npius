import Daehando from "@/components/index/Daehando";
import Background from "@/components/common/spring/Background";

export default function Section1() {
  const offset = 1;
  return (
    <>
      <Background offset={offset} factor={0.4} className="bg-sky-300" />
      <Background offset={offset + 0.4} factor={0.6} className="bg-blue-400" />
      <Daehando
        offset={offset + 0.3}
        speed={1.1}
        width={1440}
        height={1024}
        layout={"fixed"}
      />
    </>
  );
}
