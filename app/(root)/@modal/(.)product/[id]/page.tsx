import { ChooseProductModal } from "@/shared/components/shared";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductModalPage({ params }: PageProps) {
  const resolvedParams = await params; // Дожидаемся params

  if (!resolvedParams?.id) {
    return notFound();
  }

  const productId = Number(resolvedParams.id);

  if (isNaN(productId)) {
    return notFound();
  }

  const product = await prisma.product.findFirst({
    where: { id: productId },
    include: {
      ingredients: true,
      items: true,
    },
  });

  if (!product) {
    return notFound();
  }

  return <ChooseProductModal product={product} />;
}
