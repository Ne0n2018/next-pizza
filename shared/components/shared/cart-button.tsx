"use client";

import { cn } from "@/shared/lib/utils";
import React, { useEffect, useState } from "react";
import { Button } from "../ui";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { CartDrawer } from "./cart-drawer";
import { useCartStore } from "@/shared/store/cart";

interface Props {
  className?: string;
}

export const CartButton: React.FC<Props> = ({ className }) => {
  const cartState = useCartStore(); // Получаем ссылку на стор
  const [totalAmount, setTotalAmount] = useState(0);
  const [itemsCount, setItemsCount] = useState(0);
  const [loading, setLoading] = useState(false);

  // Синхронизация состояния стора с локальным состоянием
  useEffect(() => {
    setTotalAmount(cartState.totalAmount ?? 0);
    setItemsCount(cartState.items?.length ?? 0);
    setLoading(cartState.loading ?? false);
  }, [cartState.totalAmount, cartState.items, cartState.loading]);

  return (
    <CartDrawer>
      <Button
        loading={loading}
        className={cn("group relative", { "w-[105px]": loading }, className)}
      >
        <b>{totalAmount} Br</b>
        <span className="h-full w-[1px] bg-white/30 mx-3" />
        <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
          <ShoppingCart size={16} className="relative" strokeWidth={2} />
          <b>{itemsCount}</b>
        </div>
        <ArrowRight
          size={20}
          className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
        />
      </Button>
    </CartDrawer>
  );
};
