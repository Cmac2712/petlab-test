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
  const [searchParams, setSearchParams] =
    useQueryParam<SearchParams>("filters");
  const { animal, price, subscription } = searchParams || {
    animal: null,
    price: null,
    subscription: "All",
  };
  const buildURI = useCallback(() => {
    let fetchURL = `${import.meta.env.VITE_API_ENDPOINT}/products?`;
    if (animal && animal[0] !== "All") fetchURL += `&tags_like=${animal}`;

    if (subscription !== "All") {
      fetchURL += `&subscription_like=${
        subscription === "On" ? "true" : "false"
      }`;
    }

    if (price !== null) fetchURL += `&price_lte=${price}`;

    return fetchURL;
  }, [animal, price, subscription]);

  useEffect(() => {
    const fetchURL = buildURI();
    fetch(fetchURL)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [animal, price, subscription]);

  return { products, searchParams, setSearchParams };
};

export { useProducts };
