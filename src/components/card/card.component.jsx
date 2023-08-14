import { useNavigate } from "react-router-dom";

import "../card/card.style.css";

const Card = ({ categories }) => {
  const { id, title, imageUrl, route } = categories;
  const navigate = useNavigate();

  const onNavigateHandller = () => navigate(route);
  return (
    <div className="group" key={id} onClick={onNavigateHandller}>
      <img src={imageUrl} alt="" className="category-image" />
      <div className="flex flex-col items-center justify-center">
        <div className="bg-slate-300 absolute mb-28 p-3 outline outline-1 opacity-70 group-hover:opacity-100 group-hover:scale-110 hover:invert duration-200">
          <h2 className="font-sans font-semibold text-xl text-center">
            {title}
          </h2>
          <p className="shop-now">Shop Now</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
