import {
  Container,
  Filters,
  ProductGropList,
  Title,
  TopBar,
} from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductGropList
                title="Пицца"
                items={[
                  {
                    id: 1,
                    name: "Маргарита",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5EDBB090A79F2FE1F49438FAE8.avif",
                    price: 24,
                    items: [{ price: 25 }],
                  },
                  {
                    id: 2,
                    name: "Маргарита",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5EDBB090A79F2FE1F49438FAE8.avif",
                    price: 24,
                    items: [{ price: 25 }],
                  },
                  {
                    id: 3,
                    name: "Маргарита",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5EDBB090A79F2FE1F49438FAE8.avif",
                    price: 24,
                    items: [{ price: 25 }],
                  },
                  {
                    id: 4,
                    name: "Маргарита",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5EDBB090A79F2FE1F49438FAE8.avif",
                    price: 24,
                    items: [{ price: 25 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductGropList
                title="Суши"
                items={[
                  {
                    id: 1,
                    name: "Маргарита",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5EDBB090A79F2FE1F49438FAE8.avif",
                    price: 24,
                    items: [{ price: 25 }],
                  },
                  {
                    id: 2,
                    name: "Маргарита",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5EDBB090A79F2FE1F49438FAE8.avif",
                    price: 24,
                    items: [{ price: 25 }],
                  },
                  {
                    id: 3,
                    name: "Маргарита",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5EDBB090A79F2FE1F49438FAE8.avif",
                    price: 24,
                    items: [{ price: 25 }],
                  },
                  {
                    id: 4,
                    name: "Маргарита",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5EDBB090A79F2FE1F49438FAE8.avif",
                    price: 24,
                    items: [{ price: 25 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
