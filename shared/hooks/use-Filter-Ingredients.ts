import { Api } from "@/shared/services/api-client";
import { Ingredient } from "@prisma/client";
import React from "react";
import { useSet } from "react-use";

type ingredientItem = Pick<Ingredient, "id" | "name">;

interface ReturnProps {
  ingredients: ingredientItem[];
  loading: boolean;
  seleectedIngredients: Set<string>;
  onAddId: (id: string) => void;
}

export const useFilterIngredients = (values: string[] = []): ReturnProps => {
  const [ingredients, setIngredints] = React.useState<
    ReturnProps["ingredients"]
  >([]);

  const [loading, setLoading] = React.useState(true);

  const [seleectedIngredients, { toggle }] = useSet(new Set<string>(values));

  React.useEffect(() => {
    async function fetchIngredients() {
      try {
        setLoading(true);
        const ingredients = await Api.ingredients.getAll();
        setIngredints(
          ingredients.map((ingredient) => ({
            id: ingredient.id,
            name: ingredient.name,
          }))
        );
        return ingredients;
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchIngredients();
  }, []);

  return { ingredients, loading, onAddId: toggle, seleectedIngredients };
};
