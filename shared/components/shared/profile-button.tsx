"use client";
import { useSession } from "next-auth/react";
import React from "react";
import { Button } from "../ui";
import { CircleUser, User } from "lucide-react";
import Link from "next/link";

interface Props {
  onClickSignIn?: () => void;
  className?: string;
}

export const ProfileButton: React.FC<Props> = ({
  className,
  onClickSignIn,
}) => {
  const { data: session } = useSession();
  return (
    <div className={className}>
      {!session ? (
        <Button
          variant="outline"
          className="flex items-center gap-2"
          onClick={onClickSignIn}
        >
          <User size={16} />
          Войти
        </Button>
      ) : (
        <Link href="/profile">
          <Button className="flex items-center gap-2" variant="secondary">
            <CircleUser size={18} />
            профиль
          </Button>
        </Link>
      )}
    </div>
  );
};
