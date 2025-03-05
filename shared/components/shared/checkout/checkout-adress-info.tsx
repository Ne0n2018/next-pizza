import React from "react";
import { WhiteBlock } from "..";
import { Input, Textarea } from "../../ui";

interface Props {
  className?: string;
}

export const CheckoutAdressInfo: React.FC<Props> = ({ className }) => {
  return (
    <WhiteBlock title="3. адрес доставки" className={className}>
      <div className="flex flex-col gap-5">
        <Input name="adress" className="text-base" placeholder="адрес" />
        <Textarea
          className="text-base"
          placeholder="комментарий к заказу "
          rows={5}
        />
      </div>
    </WhiteBlock>
  );
};
