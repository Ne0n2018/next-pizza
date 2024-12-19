import { cn } from "@/shared/lib/utils";
import React from "react";
import { Title } from "./title";
import { Button } from "../ui";
import { PizzaImage } from "./pizza-image";
import { GroupVariants } from "./group-variants";
import {
  mapPizzaType,
  PizzaSize,
  pizzaSizes,
  PizzaType,
  pizzaTypes,
} from "@/shared/constants/pizza";
import { Ingredient, ProductItem } from "@prisma/client";
import { IngredientItem } from "./ingredient-item";
import { useSet } from "react-use";

interface Props {
  imageUrl: string;
  name: string;
  ingredients: Ingredient[];
  onClickAddCart?: VoidFunction;
  items: ProductItem[];
  className?: string;
}

export const ChoosePizzaForm: React.FC<Props> = ({
  className,
  name,
  imageUrl,
  ingredients,
  items,
  onClickAddCart,
}) => {
  const [size, setSize] = React.useState<PizzaSize>(20);
  const [type, setType] = React.useState<PizzaType>(1);
  const [selectedIngredients, { toggle: addIngredient }] = useSet(
    new Set<number>([])
  );

  const pizzaPrice = items.find(
    (item) => item.pizzaType === type && item.size === size
  )!.price;
  const totalIngredientPrice = items
    .filter((item) => selectedIngredients.has(item.id))
    .reduce((acc, item) => acc + item.price, 0);

  const textDetails = `${size} см, ${mapPizzaType[type]} тесто`;
  const totalPrice = pizzaPrice + totalIngredientPrice;

  const handleCLickAdd = () => {
    onClickAddCart?.();
    console.log({
      size,
      type,
      ingredients: selectedIngredients,
    });
  };
  return (
    <div className={cn("flex flex-1 ", className)}>
      <PizzaImage src={imageUrl} size={size} />
      <div className="w-[490px] bg-[#f7f6f5] p-7 ">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <p className="text-gray-400">{textDetails}</p>
        <div className="flex flex-col gap-4 my-5">
          <GroupVariants
            items={pizzaSizes}
            Value={String(size)}
            onClick={(value) => setSize(Number(value) as PizzaSize)}
          />
          <GroupVariants
            items={pizzaTypes}
            Value={String(type)}
            onClick={(value) => setType(Number(value) as PizzaType)}
          />
        </div>
        <Title text="Добавьте ингредиенты" size="md" />
        <div className="bg-gray-50 p-5 rounded-md h-[280px] overflow-auto scrollbar mt-5">
          <div className="grid grid-cols-3 gap-3">
            {ingredients.map((ingredient) => (
              <IngredientItem
                key={ingredient.id}
                imageUrl={ingredient.imageUrl}
                name={ingredient.name}
                price={ingredient.price}
                active={selectedIngredients.has(ingredient.id)}
                onClick={() => addIngredient(ingredient.id)}
              />
            ))}
          </div>
        </div>
        <Button
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
          onClick={handleCLickAdd}
        >
          Добавить в карзину за {totalPrice} Br
        </Button>
      </div>
    </div>
  );
};
