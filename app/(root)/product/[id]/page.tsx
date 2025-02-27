import { prisma } from "@/prisma/prisma-client";
import { Container } from "@/shared/components/shared";
import { ProductForm } from "@/shared/components/shared/product-form";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: PageProps) {
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
      category: {
        include: {
          products: {
            include: {
              items: true,
            },
          },
        },
      },
      items: true,
    },
  });

  if (!product) {
    return notFound();
  }

  return (
    <Container className="flex flex-col my-10">
      <ProductForm product={product} />
    </Container>
  );
}
