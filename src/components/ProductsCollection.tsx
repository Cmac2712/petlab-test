import { useProducts } from "../hooks/useProducts";

const ProductsCollection = () => {
  const { products } = useProducts();

  return (
    <div>
      <ul>
        {products.length
          ? products.map((product) => (
              <li key={product?.id}>{product?.title}</li>
            ))
          : null}
      </ul>
      <p>{products.length} products</p>
    </div>
  );
};

export { ProductsCollection };
