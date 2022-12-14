import { useEffect, useMemo, useCallback, useState } from "react";
import { useSearchParams } from "react-router-dom";

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
  const [searchParams] = useSearchParams();
  const tag = searchParams.get("tag");
  const price = searchParams.get("price");
  const subscription = searchParams.get("subscription");
  const search = searchParams.get("q");
  const page = searchParams.get("_page");

  const buildURL = useCallback(() => {
    let fetchURL = `${import.meta.env.VITE_API_ENDPOINT}/products?`;

    if (tag && tag !== "All") {
      fetchURL += `&tags_like=${tag}`;
    }

    if (subscription && subscription !== "All") {
      fetchURL += `&subscription_like=${
        subscription === "On" ? "true" : "false"
      }`;
    }

    if (price !== null) {
      fetchURL += `&price_lte=${price}`;
    }

    if (search !== null && search !== "") {
      fetchURL += `&q=${search}`;
    }

    fetchURL += `&_page=${page || "1"}&_limit=12`;

    return fetchURL;
  }, [tag, price, subscription, search, page]);

  useEffect(() => {
    const fetchURL = buildURL();

    fetch(fetchURL)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [tag, price, subscription, search, page]);

  return { products };
};

export { useProducts };
