import { useEffect, useMemo, useCallback, useState } from "react";
//@ts-ignore
import { useQueryParam } from "./useQueryParam";

export type Subscription = "On" | "Off" | "All";

export interface Product {
  id: number;
  slug: string;
  title: string;
  image_src: string;
  price: number;
  vendor: string;
  tags: string[];
}

export type Animal = "Cat" | "Dog" | "All";

export interface SearchParams {
  animal: Animal[] | "All";
  price: number;
  subscription: Subscription;
}

const useProducts = () => {
  const [products, setProducts] = useState<Product[] | []>([]);
  // const [searchParams, setSearchParams] =
  //   useQueryParam<SearchParams>("filters");
  // const { animal, price, subscription } = searchParams || {
  //   animal: null,
  //   price: null,
  //   subscription: "All",
  // };
  const [tag] = useQueryParam<Animal[] | "All">("tag");
  const [price] = useQueryParam<number>("price");
  const [subscription] = useQueryParam<Subscription>("subscription");

  const buildURI = useCallback(() => {
    let fetchURL = `${import.meta.env.VITE_API_ENDPOINT}/products?`;
    if (tag && tag !== "All") fetchURL += `&tags_like=${tag}`;

    if (subscription !== "All") {
      fetchURL += `&subscription_like=${
        subscription === "On" ? "true" : "false"
      }`;
    }

    if (price !== null) fetchURL += `&price_lte=${price}`;

    return fetchURL;
  }, [tag, price, subscription]);

  useEffect(() => {
    const fetchURL = buildURI();
    fetch(fetchURL)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [tag, price, subscription]);

  return { products };
};

export { useProducts };
