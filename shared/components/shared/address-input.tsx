"use client";

import React from "react";
import dynamic from "next/dynamic";
import "react-dadata/dist/react-dadata.css";

interface Props {
  onChange?: (value?: string) => void;
}

const AddressSuggestions = dynamic(
  () =>
    import("react-dadata").then((mod) => ({ default: mod.AddressSuggestions })),
  { ssr: false }
);

export const AddressInput: React.FC<Props> = ({ onChange }) => {
  return (
    <AddressSuggestions
      token="4d99acc8145c25665b768fdee60ba17ce84fead7"
      onChange={(data) => onChange?.(data?.value)}
      filterLocations={[
        {
          country: "Беларусь",
        },
      ]}
    />
  );
};
