import { useState } from "react";
import type { Subscription, Animal } from "../hooks/useProducts";
import {
  Heading,
  Radio,
  RadioGroup,
  Stack,
  FormControl,
  FormLabel,
  Input
} from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";

const SearchInput = () => {
  const [params, setParams] = useSearchParams();
  const [search, setSearch] = useState();

  return (
    <FormControl id="search">
      <FormLabel>Search</FormLabel>
      <Input
        mb={5}
        placeholder='Search'
        onChange={(event) => {
          const value = event.target.value; 
           setSearch(search);

            setParams({ 
              q: value,
              subscription: (params.get("subscription") as Subscription) || "All",
              price: (params.get("price") as Subscription) || "200",
              tag: (params.get("tag") as Animal) || "All",
            });
        }}
      />
      </FormControl>
  );
}

const SliderPrice = () => {
  const [params, setParams] = useSearchParams();
  const [price, setPrice] = useState(200);

  return (
    <FormControl id="price" mb={5}>
      <FormLabel htmlFor="price-range">Price £{price}</FormLabel>
      <input
        id="price-range"
        type="range"
        min={0}
        max={200}
        step={5}
        name="price"
        defaultValue={params.get("price") || 200}
        onChange={(e) => {
          setPrice(parseInt(e.target.value));
        }}
        onMouseUp={(e) => {
          setParams({
            subscription: (params.get("subscription") as Subscription) || "All",
            price: (e.target as HTMLInputElement).value,
            tag: (params.get("tag") as Animal) || "All",
            q: (params.get("q") as string) || "",
          });
        }}
      />
    </FormControl>
  );
};

const RadioAnimal = () => {
  const [params, setParams] = useSearchParams();

  return (
    <FormControl as="fieldset" mb={5}>
      <FormLabel as="legend">Tags</FormLabel>
      <RadioGroup
        onChange={(value) => {
          setParams({
            subscription: (params.get("subscription") as Subscription) || "All",
            price: (params.get("price") as Subscription) || "200",
            tag: value,
            q: (params.get("q") as string) || "",
          });
        }}
        value={params.get("tag") as Animal}
      >
        <Stack direction="row">
          <Radio value="All" name="animal" defaultChecked={true}>
            All
          </Radio>
          <Radio value="Dog" name="animal">
            Dog
          </Radio>
          <Radio value="Cat" name="animal">
            Cat
          </Radio>
        </Stack>
      </RadioGroup>
    </FormControl>
  );
};

const RadioSubscription = () => {
  const [params, setParams] = useSearchParams();

  return (
    <FormControl as="fieldset">
      <FormLabel>Subscription?</FormLabel>
      <RadioGroup
        onChange={(value: Subscription) =>
          setParams({
            subscription: value,
            price: (params.get("price") as string) || "200",
            tag: (params.get("tag") as Animal) || "All",
            q: (params.get("q") as string) || "",
          })
        }
        value={params.get("subscription") as Subscription}
      >
        <Stack direction="row">
          <Radio value="All" name="subscription" defaultChecked={true}>
            All
          </Radio>
          <Radio value="On" name="subscription">
            Yes
          </Radio>
          <Radio value="Off" name="subscription">
            No
          </Radio>
        </Stack>
      </RadioGroup>
    </FormControl>
  );
};

const Filter = () => {
  return (
    <div>
      <form onSubmit={e => e.preventDefault()}>
        <Heading as="h2" size="lg" marginBottom={3} noOfLines={1}>
          Filters
        </Heading>
      <SearchInput 
      />
        <RadioAnimal />
        <SliderPrice />
        <RadioSubscription />
      </form>
    </div>
  );
};

export { Filter };
