import { CartDTO } from "../services/dto/cart.dto";
import { calcCartItemTotalPrice } from "./calc-cart-item-total-price";

export type CartStateItem = {
  id: number;
  quantity: number;
  name: string;
  imageUrl: string;
  price: number;
  disabled?: boolean;
  pizzaSize?: number | null;
  pizzaType?: number | null;
  ingredients: Array<{ name: string; price: number }>;
};

interface ReturnProps {
  items: CartStateItem[];
  totalAmount: number;
}

export const getCartDetails = (data: CartDTO): ReturnProps => {
  if (!data || !Array.isArray(data.items)) {
    return { items: [], totalAmount: 0 };
  }

  const items: CartStateItem[] = data.items.map((item) => ({
    id: item.id,
    quantity: item.quantity,
    name: item.productItem?.product?.name || "Неизвестный продукт",
    imageUrl: item.productItem?.product?.imageUrl || "",
    price: calcCartItemTotalPrice(item),
    pizzaSize: item.productItem?.size ?? null,
    pizzaType: item.productItem?.pizzaType ?? null,
    disabled: item.quantity === 0, // если quantity = 0, товар выключен
    ingredients: (item.ingredients || []).map((ingredient) => ({
      name: String(ingredient.name),
      price: Number(ingredient.price),
    })),
  }));

  return {
    items,
    totalAmount: Number(data.totalAmount) || 0,
  };
};
