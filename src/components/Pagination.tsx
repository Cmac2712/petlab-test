import { Button, ButtonGroup, Text } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import type { Subscription, Animal } from "../hooks/useProducts";
import { useProducts } from "../hooks/useProducts";

const Pagination = () => {
  const [params, setParams] = useSearchParams();
  const page = parseInt(params.get("_page") as string) || 1;
  const { products } = useProducts();

  if (products.length < 12 && page === 1) return null;

  return (
    <ButtonGroup mt={4} spacing={4} alignItems={"center"}>
      <Button
        onClick={() => {
          setParams({
            subscription: (params.get("subscription") as Subscription) || "All",
            price: (params.get("price") as Subscription) || "200",
            tag: (params.get("tag") as Animal) || "All",
            _page: (page - 1).toString(),
          });
        }}
        disabled={page === 1}
      >
        Previous
      </Button>
      <Text>Page: {page}</Text>
      <Button
        disabled={page === 2}
        onClick={() => {
          setParams({
            subscription: (params.get("subscription") as Subscription) || "All",
            price: (params.get("price") as Subscription) || "200",
            tag: (params.get("tag") as Animal) || "All",
            _page: (page + 1).toString(),
          });
        }}
      >
        Next
      </Button>
    </ButtonGroup>
  );
};

export { Pagination };
