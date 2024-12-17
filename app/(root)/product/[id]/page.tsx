import {
  Container,
  GroupVariants,
  ProductImage,
  Title,
} from "@/components/shared";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await prisma.product.findFirst({
    where: {
      id: Number(id),
    },
  });
  if (!product) {
    return notFound();
  }
  return (
    <Container className="flex flex-col my-10">
      <div className="flex flex-1">
        <ProductImage src={product.imageUrl} className="" size={40} />

        <div className="w-[590px] bg-[#FCFCFC] p-7">
          <Title
            text={product.name}
            size="md"
            className="font-extrabold mb-1"
          />
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
            necessitatibus porro iste debitis distinctio recusandae tenetur,
            praesentium animi sapiente aut sequi deleniti dolor ab impedit illo
            quaerat. Voluptate, fuga laboriosam.
          </p>

          <GroupVariants
            selectedValue="2"
            items={[
              {
                name: "маленькая",
                value: "1",
              },
              {
                name: "средняя",
                value: "2",
              },
              {
                name: "большая",
                value: "3",
                disabled: true,
              },
            ]}
          />
        </div>
      </div>
    </Container>
  );
}
