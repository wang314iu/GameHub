import { Spinner, Box } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { useGames } from "../hooks";

interface Props {
  onLoadNextPage: () => void;
}

const LoadMore = ({ onLoadNextPage }: Props) => {
  const pageEndRef = useRef(null);
  // const { loading } = useGames();
  console.log("loadmore");

  useEffect(() => {
    if (pageEndRef.current) {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          onLoadNextPage();
        }
      });
      observer.observe(pageEndRef.current);
      return () => observer.disconnect();
    }
  }, [LoadMore]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="flex-end"
      height="100px"
    >
      <Box ref={pageEndRef} height="20px" />
      <Spinner thickness="5px" size="lg" color="#cc99ff" />
    </Box>
  );
};
export default LoadMore;
