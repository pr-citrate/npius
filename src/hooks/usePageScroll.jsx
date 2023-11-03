import { useScroll } from "@/react-spring/web";

export default function usePageScroll(currentPage, totalPage) {
  const { scrollYProgress } = useScroll();

  return scrollYProgress / (currentPage / totalPage);
}
