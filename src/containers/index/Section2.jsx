import Background from "@/components/common/Background";
import Heading from "@/components/index/Heading";
import Station1 from "@/components/index/stations/Station1";

export default function Section2() {
  const offset = 2;
  return (
    <>
      <Background
        offset={offset}
        className="bg-gradient-to-b from-blue-400 to-blue-500"
      />
      <Heading offset={offset}>station 1</Heading>
      <Station1 offset={offset} speed={2} />
    </>
  );
}
