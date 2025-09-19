import React from "react";

interface Props {
  orderId: number;
  totalAmount: number;
  paymentUrl: string;
}

export function PayOrderTemplate({ orderId, totalAmount, paymentUrl }: Props) {
  return (
    <div>
      <h1>заказ № {orderId}!</h1>
      <p>
        оплатите заказм на сумму {totalAmount} Br. Перейдите по
        <a href={paymentUrl}>этой</a> ссылке для оплаты заказа.
      </p>
    </div>
  );
}
