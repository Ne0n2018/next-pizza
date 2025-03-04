import {
  CheckoutItem,
  CheckoutItemDetails,
  Container,
  Title,
  WhiteBlock,
} from "@/shared/components/shared";
import { Button, Input, Textarea } from "@/shared/components/ui";
import { ArrowRight, Package, Percent, Truck } from "lucide-react";

export default function checkoutPage() {
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
              <CheckoutItem
                id={0}
                imageUrl={
                  "https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp"
                }
                details={
                  "Маринованные огурчики, Свежие томаты, Красный лук, Сочные ананасы, Итальянские травы, Сладкий перец, Кубики брынзы, Митболы"
                }
                name={"Чоризо фреш"}
                price={5}
                quantity={1}
              />
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
        <div className="w-[450px]">
          <WhiteBlock className="p-6 sticky top-4">
            <div className="flex flex-col gap-1">
              <span className="text-xl">Итого:</span>
              <span className="text-[34px] font-extrabold">{3} Br</span>
            </div>

            <CheckoutItemDetails
              title={
                <div className="flex items-center">
                  <Package size={18} className="mr-2 text-gray-400" />
                  Стоимость товаров:
                </div>
              }
              value={35}
            />
            <CheckoutItemDetails
              title={
                <div className="flex items-center">
                  <Percent size={18} className="mr-2 text-gray-400" />
                  налоги:
                </div>
              }
              value={35}
            />
            <CheckoutItemDetails
              title={
                <div className="flex items-center">
                  <Truck size={18} className="mr-2 text-gray-400" />
                  доставка:
                </div>
              }
              value={35}
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
      </div>
    </Container>
  );
}
