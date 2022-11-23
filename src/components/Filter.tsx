import * as React from "react";
// @ts-ignore
import * as JSURL from "jsurl";
import type { NavigateOptions } from "react-router-dom";
import type { Subscription, Animal, SearchParams } from "../hooks/useProducts";
import { useQueryParam } from "../hooks/useQueryParam";
import { Routes, Route, Link, useSearchParams } from "react-router-dom";

const Filter = () => {
  let [filters, setFilters] = useQueryParam<SearchParams>("filters");

  if (!filters) {
    filters = { animal: ["All"], price: 200, subscription: "All" };
    //setFilters({ animal: ["All"], price: 200, subscription: "All" });
  }

  const handleChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    const formData = new FormData(form);

    const filters: SearchParams = {
      animal: formData.getAll("animal") as Animal[],
      price: parseFloat(formData.get("price") as string) as number,
      subscription: formData.get("subscription") as Subscription,
    };

    setFilters(filters, { replace: true });
  };

  return (
    <div>
      <form onDragEnd={() => console.log("dragend")} onChange={handleChange}>
        <p>Filters</p>

        <p>
          <label>
            <input
              defaultChecked={filters.animal.includes("All")}
              type="radio"
              name="animal"
              value="All"
            />{" "}
            All
          </label>
          <label>
            <input
              defaultChecked={filters.animal.includes("Dog")}
              type="radio"
              name="animal"
              value="Dog"
            />{" "}
            Dog
          </label>
          <br />
          <label>
            <input
              defaultChecked={filters.animal.includes("Cat")}
              type="radio"
              name="animal"
              value="Cat"
            />{" "}
            Cat
          </label>
        </p>

        <p>
          <label>
            <input
              type="range"
              name="price"
              min="0"
              max="200"
              defaultValue={filters.price}
            />{" "}
            Price £{filters.price}
          </label>
        </p>

        <p>
          Subscription?
          <label>
            <input
              type="radio"
              name="subscription"
              value="On"
              defaultChecked={filters.subscription.includes("On")}
            />{" "}
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="subscription"
              value="Off"
              defaultChecked={filters.subscription.includes("Off")}
            />{" "}
            No
          </label>
          <label>
            <input
              type="radio"
              name="subscription"
              value="All"
              defaultChecked={filters.subscription.includes("All")}
            />{" "}
            All
          </label>
        </p>
      </form>

      <hr />
    </div>
  );
};

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export { Filter };
