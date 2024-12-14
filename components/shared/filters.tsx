import React from "react";
import { Title } from "./title";
import { CheckBoxFilterGroup, Filtercheckbox, RangeSlider } from ".";
import { Input } from "../ui";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="фильтрация" size="sm" className="mb-5 font-bold" />
      <div className="flex flex-col gap-4">
        <Filtercheckbox text="можно собирать" value="1" />
        <Filtercheckbox text="новинки" value="2" />
      </div>
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={30}
            defaultValue={0}
          />
          <Input
            type="number"
            placeholder="15"
            min={15}
            max={30}
            defaultValue={15}
          />
        </div>
        <RangeSlider min={0} max={30} step={1} value={[0, 30]} />
      </div>
      <CheckBoxFilterGroup
        title="Ингредиенты"
        className="mt-5"
        limit={6}
        defaultItem={[
          { text: "Томатный соус", value: "1" },
          { text: "Моцарелла", value: "2" },
          { text: "Пепперони", value: "3" },
          { text: "Грибы", value: "4" },
          { text: "Оливки", value: "5" },
          { text: "Пармезан", value: "6" },
          { text: "Бекон", value: "7" },
          { text: "Базилик", value: "8" },
        ]}
        items={[
          { text: "Томатный соус", value: "1" },
          { text: "Моцарелла", value: "2" },
          { text: "Пепперони", value: "3" },
          { text: "Грибы", value: "4" },
          { text: "Оливки", value: "5" },
          { text: "Пармезан", value: "6" },
          { text: "Бекон", value: "7" },
          { text: "Базилик", value: "8" },
        ]}
      />
    </div>
  );
};
