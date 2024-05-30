import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { IoSearchSharp } from "react-icons/io5";
import { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}
const GameSearch = ({ onSearch }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();

    if (inputRef.current) {
      onSearch(inputRef.current.value);
    }
  };
  return (
    <form onSubmit={onSubmit} style={{ width: "100%" }}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <IoSearchSharp color="gray.300" />
        </InputLeftElement>
        <Input
          ref={inputRef}
          focusBorderColor="green.200"
          borderRadius={12}
          placeholder="Search game..."
        ></Input>
      </InputGroup>
    </form>
  );
};

export default GameSearch;
