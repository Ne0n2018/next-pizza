"use client";
import { Filtercheckbox, FilterCheckboxProps } from "./filter-checkbox";
import { Input, Skeleton } from "../ui";
import React from "react";

type FilterItem = FilterCheckboxProps; // Изменил название типа

interface Props {
  title: string;
  items: FilterItem[];
  defaultItem?: FilterItem[];
  limit?: number;
  loading?: boolean;
  searchInputPlaceholder?: string;
  onClickCheckBox: (id: string) => void;
  defaultValue?: string[];
  selectedIds?: Set<string>;
  name: string;
  className?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  defaultItem,
  limit = 5, // Добавил значение по умолчанию
  loading,
  searchInputPlaceholder = "поиск...",
  onClickCheckBox,
  name,
  selectedIds,
  className,
}) => {
  const [showAll, setShowAll] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  if (loading) {
    return (
      <div className={className}>
        <p className="font-bold mb-3">{title}</p>
        {Array.from({ length: limit }).map((_, index) => (
          <Skeleton key={index} className="h-6 mb-4 rounded-[8px]" />
        ))}
        <Skeleton className="h-6 mb-4 rounded-[8px] w-28" />
      </div>
    );
  }

  const list = showAll
    ? items.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLowerCase())
      )
    : (defaultItem || items).slice(0, limit);

  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>
      {showAll && (
        <div className="mb-5">
          <Input
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder={searchInputPlaceholder}
            className="bg-gray-50 border-none"
          />
        </div>
      )}
      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {list.map((item, index) => (
          <Filtercheckbox
            key={index}
            text={item.text}
            value={item.value}
            endAdorment={item.endAdorment}
            checked={selectedIds?.has(item.value)}
            onCheckedChange={() => onClickCheckBox?.(item.value)}
            name={name}
          />
        ))}
      </div>
      {items.length > limit && (
        <div className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}>
          <button
            className="text-primary text-sm mt-5"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Скрыть" : " + Показать все"}
          </button>
        </div>
      )}
    </div>
  );
};
