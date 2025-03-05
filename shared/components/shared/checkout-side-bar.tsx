import React from "react";
import { WhiteBlock } from "./white-block";
import { Package, Percent, Truck, ArrowRight } from "lucide-react";
import { Button } from "../ui";
import { CheckoutItemDetails } from "./checkout-item-details";
import { cn } from "@/shared/lib/utils";

interface Props {
  totalPrice: number;
  totalAmount: number;
  VATprice: number;
  DELIVERY: number;
  className?: string;
}

export const CheckoutSideBar: React.FC<Props> = ({
  className,
  totalPrice,
  totalAmount,
  VATprice,
  DELIVERY,
}) => {
  return (
    <div className={cn("w-[450px]", className)}>
      <WhiteBlock className="p-6 sticky top-4">
        <div className="flex flex-col gap-1">
          <span className="text-xl">Итого:</span>
          <span className="text-[34px] font-extrabold">{totalPrice} Br</span>
        </div>

        <CheckoutItemDetails
          title={
            <div className="flex items-center">
              <Package size={18} className="mr-2 text-gray-400" />
              Стоимость товаров:
            </div>
          }
          value={totalAmount}
        />
        <CheckoutItemDetails
          title={
            <div className="flex items-center">
              <Percent size={18} className="mr-2 text-gray-400" />
              налоги:
            </div>
          }
          value={VATprice}
        />
        <CheckoutItemDetails
          title={
            <div className="flex items-center">
              <Truck size={18} className="mr-2 text-gray-400" />
              доставка:
            </div>
          }
          value={DELIVERY}
        />

        <Button
          type="submit"
          className="w-full h-14 rounded-2xl mt-6 text-base font-bold"
        >
          перейти к оплате
          <ArrowRight className="w-5 ml-2" />
        </Button>
      </WhiteBlock>
    </div>
  );
};
