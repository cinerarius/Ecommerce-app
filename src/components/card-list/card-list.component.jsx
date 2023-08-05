import Card from "../card/card.component";
import "../card-list/card-list.style.css";

const CardList = ({ categoryArray }) => {
  return (
    <div>
      <div className="card-list">
        <div className="category-container">
          {categoryArray.map((category) => {
            return <Card key={category.id} categories={category} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CardList;
