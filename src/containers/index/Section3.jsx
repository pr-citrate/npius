import Background from "@/components/common/Background";
import Heading from "@/components/index/Heading";
import Station2 from "@/components/index/stations/Station2";

export default function Section3() {
  const offset = 3;
  return (
    <>
      <Background
        offset={offset}
        className="bg-gradient-to-b from-blue-500 to-blue-700"
      />
      <Heading offset={offset}>station 2</Heading>
      <Station2 offset={offset} speed={2} />
    </>
  );
}
