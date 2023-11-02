import Background from "@components/common/Background";
import Box from "@components/index/Box";
import SubTitle from "@components/index/SubTitle";
import Title from "@components/index/Title";

export default function Section0() {
  const offset = 0;
  return (
    <>
      <Background
        offset={offset}
        className="bg-gradient-to-b from-sky-500 to-sky-300"
      />
      <Box
        className={"p-8 border-4 border-white bg-blue-600/20 backdrop-blur-xl"}
        offset={offset}
        speed={2}
      >
        <Title speed={offset} className={"text-cyan-50"}>
          npius
          {/* title */}
        </Title>
        <hr className="m-2" />
        <SubTitle offset={offset} className={"text-cyan-50"}>
          north pacific international undersea station
          {/* subtitle */}
        </SubTitle>
      </Box>
    </>
  );
}
