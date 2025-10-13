"use client";
import { cn } from "@/shared/lib/utils";
import React from "react";
import { Container } from "../container";
import Link from "next/link";
import Image from "next/image";
import { ProfileButton } from "../profile-button";
import { AuthModal } from "../auth-modal";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  const [isAuthOpen, setIsAuthOpen] = React.useState(false);
  return (
    <header className={cn(className, "border-b ")}>
      <Container className="flex items-center justify-between py-8">
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="logo" width={35} height={35} />
            <div>
              <h1 className="text-2xl uppercase font-black">Next pizza</h1>
              <p className="text-sm text-gray-400 leading-3">
                вкуснее уже некуда
              </p>
            </div>
          </div>
        </Link>
        <div className="flex items-center gap-3">
          <AuthModal
            open={isAuthOpen}
            onClose={() => {
              setIsAuthOpen(false);
            }}
          />
          <ProfileButton onClickSignIn={() => setIsAuthOpen(true)} />
        </div>
      </Container>
    </header>
  );
};
