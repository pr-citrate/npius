import Background from "@/components/common/spring/Background";
import StationName from "@/components/index/StationName";
import Station from "@/components/index/stations/Station";
import Core from "@/components/common/spring/Core";

import station1 from "@public/images/stations/station1.png";

export default function Section2() {
  const offset = 2;
  return (
    <>
      <Background
        offset={offset}
        className="bg-gradient-to-b from-blue-400 to-blue-500"
      />
      <StationName offset={offset}>station 1</StationName>
      <Station offset={offset} speed={2} src={station1} />
      <Core offset={offset} className={"bg-gray-400"} />
    </>
  );
}
