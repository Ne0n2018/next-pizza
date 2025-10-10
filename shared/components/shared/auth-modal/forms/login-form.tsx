"use clent";
import React from "react";

import { formLoginSchema, TFormLoginValues } from "./schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Title } from "../../title";
import { FormInput } from "../../form";
import { Button } from "@/shared/components/ui";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { FormProvider, useForm } from "react-hook-form";
import Image from "next/image";
interface Props {
  onClose?: VoidFunction;
}

export const LoginForm: React.FC<Props> = ({ onClose }) => {
  const form = useForm<TFormLoginValues>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: TFormLoginValues) => {
    try {
      const resp = await signIn("credentials", {
        ...data,
        redirect: false,
      });

      if (!resp?.ok) {
        throw Error();
      }
      toast.success("Вы успешно вошли в аккаунт", {
        icon: "✅",
      });
      onClose?.();
    } catch (error) {
      console.error("Error [Login]", error);
      toast.error("Не удалось войти в аккаунт", {
        icon: "🔐",
      });
    }
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
      >
        <div className="flex justify-between items-center">
          <div className="mr-2">
            <Title text="вход в аккаунт" size="md" className="font-bold" />
            <p className="text-gray-400">
              Введите свою почту чтобы войти в аккаунт
            </p>
          </div>
          <Image
            src={"/public/assets/phone-icon.png"}
            alt={""}
            width={60}
            height={60}
          />
        </div>

        <FormInput name="email" label="E-mail" required />
        <FormInput name="password" label="Пароль" type="password" required />

        <Button
          className="h-12 text-base"
          type="submit"
          loading={form.formState.isSubmitting}
        >
          войти
        </Button>
      </form>
    </FormProvider>
  );
};
