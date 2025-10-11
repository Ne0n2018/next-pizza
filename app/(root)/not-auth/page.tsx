import { InfoBlock } from "@/shared/components/shared";

export default function UnauthorizedPage() {
  return (
    <div className="flex flex-col items-center justify-center mt-40">
      <InfoBlock
        title="доступ запрещен"
        text="Данную страницу могут просматривать только авторизованные пользователи"
        imageUrl="/assets/lock.png"
      />
    </div>
  );
}
