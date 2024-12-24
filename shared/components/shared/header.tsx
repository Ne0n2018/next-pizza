import { cn } from "@/shared/lib/utils";
import React from "react";
import { Container } from "./container";
import Image from "next/image";
import { Button } from "../ui/button";

import Link from "next/link";
import { SearchInput } from "./search-input";
import { User } from "lucide-react";
import { CartButton } from "./cart-button";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        {/* левая часть */}
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="logo" width={35} height={35}></Image>
            <div>
              <h1 className="text-2xl uppercase font-black">Next pizza</h1>
              <p className="text-sm text-gray-400 leading-3">
                вкуснее уже некуда
              </p>
            </div>
          </div>
        </Link>
        {/* поиск */}
        <div className="mx-10 flex-1">
          <SearchInput />
        </div>
        {/* правая часть */}
        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <User size={16} />
            Войти
          </Button>
          <CartButton />
        </div>
      </Container>
    </header>
  );
};
