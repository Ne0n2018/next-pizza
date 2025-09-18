"use client";

import {
  CheckoutAddressInfo,
  CheckoutCart,
  checkoutFormSchem,
  CheckoutFormValues,
  CheckoutPersonalInfo,
  CheckoutSideBar,
  Container,
  Title,
} from "@/shared/components/shared";
import { useCart } from "@/shared/hooks/use-cart";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/shared/lib/utils";
import { createOrder } from "@/app/actions";

const VAT = 10;
const DELIVERY = 2;

export default function CheckoutPage() {
  const { totalAmount, updateItemQuantity, items, removeCartItem, loading } =
    useCart();

  const VATprice = (totalAmount * VAT) / 100;
  const totalPrice = totalAmount + VATprice + DELIVERY;

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchem),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      adress: "",
      comment: "",
    },
  });

  const onSubmit = (data: CheckoutFormValues) => {
    createOrder(data);
    console.log(form);
  };

  const onClickCountButton = (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };

  return (
    <Container className="mt-10">
      <Title
        text="оформление заказа"
        className="font-extrabold mb-8 text-[36px]"
      />

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex gap-10">
            {/* left */}
            <div className="flex flex-col flex-1 gap-10 mb-20">
              <CheckoutCart
                items={items}
                loading={loading}
                onClickCountButton={onClickCountButton}
                removeCartItem={removeCartItem}
              />
              <CheckoutPersonalInfo
                className={cn(loading && "opacity-40 pointer-events-none")}
              />
              <CheckoutAddressInfo
                className={cn(loading && "opacity-40 pointer-events-none")}
              />
            </div>
            {/* right */}
            <CheckoutSideBar
              totalPrice={totalPrice}
              totalAmount={totalAmount}
              VATprice={VATprice}
              DELIVERY={DELIVERY}
              loading={loading}
            />
          </div>
        </form>
      </FormProvider>
    </Container>
  );
}
