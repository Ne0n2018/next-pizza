import React from "react";
import { WhiteBlock } from "../white-block";
import { Input } from "../../ui";
import { FormInput } from "..";

interface Props {
  className?: string;
}

export const CheckoutPersonalInfo: React.FC<Props> = ({ className }) => {
  return (
    <WhiteBlock title="2. Персональная информация" className={className}>
      <div className="grid grid-cols-2 gap-5">
        <Input name="firstName" className="text-base" placeholder="имя" />
        <Input name="lastName" className="text-base" placeholder="фамилия" />
        <Input name="email" className="text-base" placeholder="email" />
        <FormInput
          name="phone"
          className="text-base"
          placeholder="номер телефона"
        />
      </div>
    </WhiteBlock>
  );
};
