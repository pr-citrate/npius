import Background from "@/components/common/spring/Background";
import StationName from "@/components/index/StationName";
import Station1 from "@/components/index/stations/Station1";

export default function Section2() {
  const offset = 2;
  return (
    <>
      <Background
        offset={offset}
        className="bg-gradient-to-b from-blue-400 to-blue-500"
      />
      <StationName offset={offset}>station 1</StationName>
      <Station1 offset={offset} speed={2} />
    </>
  );
}
