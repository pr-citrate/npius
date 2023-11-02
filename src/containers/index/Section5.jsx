import Background from "@components/common/Background";
import Heading from "@components/index/Heading";
import Station3 from "@components/index/stations/Station3";

export default function Section5() {
  const offset = 5;
  return (
    <>
      <Background
        offset={offset}
        className="bg-gradient-to-b from-blue-950 to-indigo-950"
      />
      <Heading offset={offset}>station 3</Heading>
      <Station3 offset={offset} speed={2} />
    </>
  );
}
