type QueryParams = {
  page: string | null;
  limit: string | null;
  search: string | null;
  tag: string | null;
  price: string | null;
  subscription: boolean | null;
};

const getQueryParams = (): QueryParams => {
  const params = new URLSearchParams(window.location.search);

  return {
    page: params.get("_page") || null,
    limit: params.get("_limit") || null,
    search: params.get("search"),
    tag: params.get("tag"),
    price: params.get("price"),
    subscription: params.get("subscription") === "true",
  };
};

export { getQueryParams };
