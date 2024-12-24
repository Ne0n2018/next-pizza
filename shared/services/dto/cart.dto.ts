import {
  Card,
  CardItem,
  Ingredient,
  Product,
  ProductItem,
} from "@prisma/client";

export type CartItemDTO = CardItem & {
  productItem: ProductItem & {
    product: Product;
  };
  ingredients: Ingredient[];
};

export interface CartDTO extends Card {
  items: CartItemDTO[];
}

export interface CreateCartItemValues {
  productItemId: number;
  ingredients?: number[];
}
