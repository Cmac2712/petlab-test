import { useProducts } from "../hooks/useProducts";
import { Spinner } from "@chakra-ui/react";
import {
  Box,
  Text,
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Image,
} from "@chakra-ui/react";

const ProductsCollection = () => {
  const { products } = useProducts();

  if (!products) {
    return <Spinner />;
  }

  return (
    <Box>
      <Text textAlign={"center"} mb={4}>
        {products.length} product{products.length > 1 ? "s" : ""} found
      </Text>
      <TableContainer width={"auto"}>
        <Table variant="striped" colorScheme="teal">
          <Tbody>
            {products.length
              ? products.map((product) => (
                  <Tr key={`product-id-${product?.id}`}>
                    <Td>
                      <Image
                        boxSize={"50px"}
                        objectFit={"cover"}
                        src={product?.image_src}
                        alt={product?.title}
                      />
                    </Td>
                    <Td width={500}>{product?.title}</Td>
                    <Td>
                      <Text as="b">£{product?.price.toFixed(2)}</Text>
                    </Td>
                  </Tr>
                ))
              : null}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ProductsCollection;
