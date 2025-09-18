"use server";

import { CheckoutFormValues } from "@/shared/components/shared";

export async function createOrder(data: CheckoutFormValues) {
  console.log(data);
}
