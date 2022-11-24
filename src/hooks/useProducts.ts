import { useEffect, useMemo, useCallback, useState } from "react";
//@ts-ignore
//import { useQueryParam } from "./useQueryParam";
import { useParams, useSearchParams } from "react-router-dom";

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
  const [searchParams, setSearchParams] = useSearchParams();
  const tag = searchParams.get("tag");
  const price = searchParams.get("price");
  const subscription = searchParams.get("subscription");

  console.log("tag", tag);
  console.log("price", price);
  console.log("subscription", subscription);

  const buildURI = useCallback(() => {
    let fetchURL = `${import.meta.env.VITE_API_ENDPOINT}/products?`;
    if (tag && tag !== "All") fetchURL += `&tags_like=${tag}`;

    if (subscription && subscription !== "All") {
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
