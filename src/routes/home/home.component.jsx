import "./home.style.css";
import CardList from "../../components/card-list/card-list.component";
import Header from "../../components/header/header.component";

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
      <h1 className="title">Ecommerce App</h1>
      <Header />
      <CardList categoryArray={categories} />
    </div>
  );
};

export default Home;
