import { useState } from "react";
import type { Subscription, Animal, SearchParams } from "../hooks/useProducts";
import { useQueryParam } from "../hooks/useQueryParam";
import {
  Heading,
  Radio,
  RadioGroup,
  Stack,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

const SliderPrice = ({ defaultPrice }: { defaultPrice: number }) => {
  return (
    <FormControl id="price" mb={5}>
      <FormLabel htmlFor="price-range">Price</FormLabel>
      <input
        id="price-range"
        type="range"
        min={0}
        max={200}
        step={5}
        name="price"
        defaultValue={defaultPrice}
      />
    </FormControl>
  );
};

const RadioAnimal = () => {
  const [animal, setAnimal] = useState<Animal>("All");
  return (
    <FormControl as="fieldset" mb={5}>
      <FormLabel as="legend">Tags</FormLabel>
      <RadioGroup
        onChange={() =>
          setAnimal((event?.target as HTMLInputElement)?.value as Animal)
        }
        value={animal}
      >
        <Stack direction="row">
          <Radio value="All" name="animal">
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
  const [sub, setSub] = useState<Subscription>("All");
  return (
    <FormControl as="fieldset">
      <FormLabel>Subscription</FormLabel>
      <RadioGroup
        onChange={() =>
          setSub((event?.target as HTMLInputElement)?.value as Subscription)
        }
        value={sub}
      >
        <Stack direction="row">
          <Radio value="All" name="subscription">
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
  let [filters, setFilters] = useQueryParam<SearchParams>("filters");

  if (!filters) {
    filters = { animal: ["All"], price: 200, subscription: "All" };
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
      <form onChange={handleChange}>
        <Heading as="h2" size="lg" marginBottom={3} noOfLines={1}>
          Filters
        </Heading>
        <RadioAnimal />
        <SliderPrice defaultPrice={filters.price} />
        <RadioSubscription />
      </form>
    </div>
  );
};

export { Filter };
