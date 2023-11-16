import Background from "@/components/common/spring/Background";
import StationName from "@/components/index/StationName";
import Station2 from "@/components/index/stations/Station2";

export default function Section3() {
  const offset = 3;
  return (
    <>
      <Background
        offset={offset}
        className="bg-gradient-to-b from-blue-500 to-blue-700"
      />
      <StationName offset={offset}>station 2</StationName>
      <Station2 offset={offset} speed={2} />
    </>
  );
}
