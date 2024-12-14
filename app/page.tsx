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
                    name: "Пепперони",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5EDBB090A79F2FE1F49438FAE8.avif",
                    price: 26,
                    items: [{ price: 27 }],
                  },
                  {
                    id: 2,
                    name: "Пепперони",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5EDBB090A79F2FE1F49438FAE8.avif",
                    price: 26,
                    items: [{ price: 27 }],
                  },
                  {
                    id: 3,
                    name: "Пепперони",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5EDBB090A79F2FE1F49438FAE8.avif",
                    price: 26,
                    items: [{ price: 27 }],
                  },
                  {
                    id: 4,
                    name: "Пепперони",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5EDBB090A79F2FE1F49438FAE8.avif",
                    price: 26,
                    items: [{ price: 27 }],
                  },
                ]}
                categoryId={1}
              />

              <ProductGropList
                title="Суши"
                items={[
                  {
                    id: 1,
                    name: "Четыре сыра",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5EDBB090A79F2FE1F49438FAE8.avif",
                    price: 28,
                    items: [{ price: 29 }],
                  },
                  {
                    id: 2,
                    name: "Четыре сыра",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5EDBB090A79F2FE1F49438FAE8.avif",
                    price: 28,
                    items: [{ price: 29 }],
                  },
                  {
                    id: 3,
                    name: "Четыре сыра",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5EDBB090A79F2FE1F49438FAE8.avif",
                    price: 28,
                    items: [{ price: 29 }],
                  },
                  {
                    id: 4,
                    name: "Четыре сыра",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5EDBB090A79F2FE1F49438FAE8.avif",
                    price: 28,
                    items: [{ price: 29 }],
                  },
                ]}
                categoryId={2}
              />

              <ProductGropList
                title="Напитки"
                items={[
                  {
                    id: 1,
                    name: "Гавайская",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5EDBB090A79F2FE1F49438FAE8.avif",
                    price: 30,
                    items: [{ price: 31 }],
                  },
                  {
                    id: 2,
                    name: "Гавайская",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5EDBB090A79F2FE1F49438FAE8.avif",
                    price: 30,
                    items: [{ price: 31 }],
                  },
                  {
                    id: 3,
                    name: "Гавайская",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5EDBB090A79F2FE1F49438FAE8.avif",
                    price: 30,
                    items: [{ price: 31 }],
                  },
                  {
                    id: 4,
                    name: "Гавайская",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5EDBB090A79F2FE1F49438FAE8.avif",
                    price: 30,
                    items: [{ price: 31 }],
                  },
                ]}
                categoryId={3}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
