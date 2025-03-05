"use client";
import {
  CheckoutItem,
  CheckoutSideBar,
  Container,
  Title,
  WhiteBlock,
} from "@/shared/components/shared";
import { Input, Textarea } from "@/shared/components/ui";
import { PizzaSize, PizzaType } from "@/shared/constants/pizza";
import { useCart } from "@/shared/hooks/use-cart";
import { getCartItemDetails } from "@/shared/lib/get-cart-item-details";

const VAT = 15;
const DELIVERY = 10;
export default function checkoutPage() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { totalAmount, updateItemQuantity, items, removeCartItem } = useCart();
  const VATprice = (totalAmount * VAT) / 100;
  const totalPrice = totalAmount + VATprice + DELIVERY;

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

      <div className="flex gap-10">
        {/*left */}
        <div className="flex flex-col flex-1 gap-10 mb-20">
          <WhiteBlock title="1. Ваша корзина">
            <div className="flex flex-col gap-5">
              {items.map((item) => (
                <CheckoutItem
                  key={item.id}
                  id={item.id}
                  imageUrl={item.imageUrl}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  onClickCountButton={(type) =>
                    onClickCountButton(item.id, item.quantity, type)
                  }
                  onClickRemove={() => removeCartItem(item.id)}
                  details={getCartItemDetails(
                    item.ingredients,
                    item.pizzaType as PizzaType,
                    item.pizzaSize as PizzaSize
                  )}
                />
              ))}
            </div>
          </WhiteBlock>

          <WhiteBlock title="2. Персональная информация">
            <div className="grid grid-cols-2 gap-5">
              <Input name="firstName" className="text-base" placeholder="имя" />
              <Input
                name="lastName"
                className="text-base"
                placeholder="фамилия"
              />
              <Input name="email" className="text-base" placeholder="email" />
              <Input
                name="phone"
                className="text-base"
                placeholder="номер телефона"
              />
            </div>
          </WhiteBlock>
          <WhiteBlock title="3. адрес доставки">
            <div className="flex flex-col gap-5">
              <Input name="adress" className="text-base" placeholder="адрес" />
              <Textarea
                className="text-base"
                placeholder="комментарий к заказу "
                rows={5}
              />
            </div>
          </WhiteBlock>
        </div>
        {/*right */}
        <CheckoutSideBar
          totalPrice={totalPrice}
          totalAmount={totalAmount}
          VATprice={VATprice}
          DELIVERY={DELIVERY}
        />
      </div>
    </Container>
  );
}
