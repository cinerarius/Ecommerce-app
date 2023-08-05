import "./home.style.css";
import CardList from "../../components/card-list/card-list.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
    },
    {
      id: 2,
      title: "Sneakers",
    },
    {
      id: 3,
      title: "Jackets",
    },
  ];
  return (
    <div>
      <CardList categoryArray={categories} />
    </div>
  );
};

export default Home;
