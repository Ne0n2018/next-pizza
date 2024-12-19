import { instance } from "./instance";
import { ApiRoutes } from "./constans";
import { Ingredient } from "@prisma/client";

export const getAll = async (): Promise<Ingredient[]> => {
  return (await instance.get<Ingredient[]>(ApiRoutes.INGREDIENTS)).data;
};
