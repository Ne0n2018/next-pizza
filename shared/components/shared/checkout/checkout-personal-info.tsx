import React from "react";
import { WhiteBlock } from "../white-block";
import { FormInput } from "..";
import { cn } from "@/shared/lib/utils";

interface Props {
  className?: string;
}

export const CheckoutPersonalInfo: React.FC<Props> = ({ className }) => {
  return (
    <WhiteBlock title="2. Персональная информация" className={cn(className)}>
      <div className="grid grid-cols-2 gap-5">
        <FormInput name="firstName" className="text-base" placeholder="имя" />
        <FormInput
          name="lastName"
          className="text-base"
          placeholder="фамилия"
        />
        <FormInput name="email" className="text-base" placeholder="email" />
        <FormInput
          name="phone"
          className="text-base"
          placeholder="номер телефона"
        />
      </div>
    </WhiteBlock>
  );
};
