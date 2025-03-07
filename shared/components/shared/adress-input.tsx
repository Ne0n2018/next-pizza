"use client";

import React from "react";
import { AddressSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";

interface Props {
  onChange?: (value?: string) => void;
}

export const AdressInput: React.FC<Props> = ({ onChange }) => {
  return (
    <AddressSuggestions
      token="4d99acc8145c25665b768fdee60ba17ce84fead7"
      onChange={(data) => onChange?.(data?.value)}
    />
  );
};
