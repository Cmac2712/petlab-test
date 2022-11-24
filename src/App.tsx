import { ProductsCollection } from "./components/ProductsCollection";
import { Filter } from "./components/Filter";
import "./App.css";
import { ChakraProvider, Flex, Center, Text, Box } from "@chakra-ui/react";

type Animals = "cat" | "dog";

function App() {
  return (
    <ChakraProvider>
      <Text
        fontSize={"4xl"}
        fontWeight={"bold"}
        textAlign={"center"}
        marginTop={3}
      >
        PetLab Store
      </Text>
      <Flex>
        <Center position={"fixed"} bottom={0} top={0}>
          <Box p={16} h={"100%"}>
            <Filter />
          </Box>
        </Center>
        <Center
          flexBasis={"auto"}
          overflow={"scroll"}
          padding={20}
          margin={"0 auto"}
        >
          <ProductsCollection />
        </Center>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
