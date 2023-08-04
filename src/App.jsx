import "./App.css";

const App = () => {
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
      <header className="heading">
        <div className="navbar">
          <h2>Add To Cart</h2>
          <h2>Sign In</h2>
        </div>
      </header>
      <div className="card-list">
        <div className="category-container">
          {categories.map((category) => {
            return (
              <div className="group" key={category.id}>
                <img
                  src={`./src/assets/image${category.id}.png`}
                  alt=""
                  className="category-image"
                />
                <div className="category-body-container">
                  <div className="content">
                    <h2 className="category-title">{category.title}</h2>
                    <p className="shop-now">Shop Now</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
