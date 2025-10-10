"use client";
import { SessionProvider } from "next-auth/react";
import React, { PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";
import NextTopLoader from "nextjs-toploader";

export const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <NextTopLoader />
      <SessionProvider>{children}</SessionProvider>
      <Toaster />
    </>
  );
};
