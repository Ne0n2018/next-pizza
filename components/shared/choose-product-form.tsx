import { cn } from "@/lib/utils";
import React from "react";
import { ProductImage } from "./product-image";
import { Title } from "./title";
import { Button } from "../ui";

interface Props {
  imageUrl: string;
  name: string;
  ingredients: any[];
  items?: any[];
  onClickAdd?: VoidFunction;
  className?: string;
}

export const ChooseProductForm: React.FC<Props> = ({
  className,
  name,
  imageUrl,
  ingredients,
  items,
  onClickAdd,
}) => {
  const textDetails = "30cm, традиционное тесто 30";
  const totalPrice = 10;
  return (
    <div className={cn("flex flex-1", className)}>
      <img
        src={imageUrl}
        alt={name}
        className="relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]"
      />
      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <p className="text-gray-400">{textDetails}</p>
        <Button className="h-[55px] px-10 text-base rounded-[18px] w-full">
          Добавить в карзину за {totalPrice} Br
        </Button>
      </div>
    </div>
  );
};
