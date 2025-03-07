"use client";
import {
  CheckoutAdressInfo,
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

const VAT = 15;
const DELIVERY = 10;
export default function checkoutPage() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { totalAmount, updateItemQuantity, items, removeCartItem } = useCart();
  const VATprice = (totalAmount * VAT) / 100;
  const totalPrice = totalAmount + VATprice + DELIVERY;
  // eslint-disable-next-line react-hooks/rules-of-hooks
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
    console.log(data);
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
        text={"оформление заказа"}
        className="font-extrabold mb-8 text-[36px]"
      />

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex gap-10">
            {/*left */}
            <div className="flex flex-col flex-1 gap-10 mb-20">
              <CheckoutCart
                items={items}
                onClickCountButton={onClickCountButton}
                removeCartItem={removeCartItem}
              />
              <CheckoutPersonalInfo />
              <CheckoutAdressInfo />
            </div>
            {/*right */}
            <CheckoutSideBar
              totalPrice={totalPrice}
              totalAmount={totalAmount}
              VATprice={VATprice}
              DELIVERY={DELIVERY}
            />
          </div>
        </form>
      </FormProvider>
    </Container>
  );
}
