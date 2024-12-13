"use client";
import React from "react";
import { useIntersection } from "react-use";
import { ProductCard, Title } from ".";
import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";

interface Props {
  title: string;
  items: unknown[];
  listClassName?: string;
  className?: string;
  categoryId: number;
}

export const ProductGropList: React.FC<Props> = ({
  title,
  items,
  listClassName,
  className,
  categoryId,
}) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [categoryId, intersection?.isIntersecting, setActiveCategoryId, title]);
  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {items.map((product) => (
          <ProductCard
            id={product.id}
            key={product.id}
            name={product.name}
            price={product.items[0].price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};
