import { ProductsCollection } from "./components/ProductsCollection";
import { Filter } from "./components/Filter";
import "./App.css";
import { Routes, Route, useSearchParams } from "react-router-dom";

type Animals = "cat" | "dog";

function App() {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Filter />
      <ProductsCollection />
    </div>
  );
}

export default App;
