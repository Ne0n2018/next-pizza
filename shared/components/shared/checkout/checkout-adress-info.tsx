import React from "react";
import { FormTextarea, WhiteBlock } from "..";
import { Input } from "../../ui";

interface Props {
  className?: string;
}

export const CheckoutAdressInfo: React.FC<Props> = ({ className }) => {
  return (
    <WhiteBlock title="3. адрес доставки" className={className}>
      <div className="flex flex-col gap-5">
        <Input name="adress" className="text-base" placeholder="адрес" />
        <FormTextarea
          className="text-base"
          placeholder="комментарий к заказу "
          rows={5}
          name={"comment"}
        />
      </div>
    </WhiteBlock>
  );
};
