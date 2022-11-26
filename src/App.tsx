import { lazy, Suspense } from "react";
import { Filter } from "./components/Filter";
import { Pagination } from "./components/Pagination";
import "./App.css";
import {
  ChakraProvider,
  Flex,
  Center,
  Text,
  Box,
  Spinner,
} from "@chakra-ui/react";
const ProductsCollection = lazy(
  () => import("./components/ProductsCollection")
);

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
        <Center
          position={{
            base: "relative",
            xl: "fixed",
          }}
          bottom={0}
          top={0}
        >
          <Box
            p={{
              base: 8,
              xl: 16,
            }}
            h={"100%"}
          >
            <Filter />
          </Box>
        </Center>
        <Center
          flexBasis={"auto"}
          flexDirection={"column"}
          overflow={"scroll"}
          padding={20}
          margin={"0 auto"}
        >
          <Suspense fallback={<Spinner />}>
            <ProductsCollection />
          </Suspense>
          <Pagination />
        </Center>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
