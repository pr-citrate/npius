import Background from "@/components/common/spring/Background";
import StationName from "@/components/index/StationName";
import Station5 from "@/components/index/stations/Station5";

export default function Section11() {
  const offset = 11;
  return (
    <>
      <Background offset={offset} className="bg-slate-950" />
      <StationName offset={offset}>station 5</StationName>
      <Station5 offset={offset} speed={2} />
    </>
  );
}
