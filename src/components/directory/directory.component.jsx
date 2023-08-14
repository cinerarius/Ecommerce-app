import Card from "../card/card.component";

const categories = [
  {
    id: 1,
    title: "Hats",
    route: "shop/hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
  },
  {
    id: 2,
    title: "Sneakers",
    route: "shop/sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
  },
  {
    id: 3,
    title: "Jackets",
    route: "shop/jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
  },
];

const Directory = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 p-5 md:gap-5">
        {categories.map((category) => {
          return <Card key={category.id} categories={category} />;
        })}
      </div>
    </div>
  );
};

export default Directory;
