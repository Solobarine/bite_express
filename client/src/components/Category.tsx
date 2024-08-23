import { Link } from "react-router-dom";

const Category = ({ name, image }: { name: string; image: string }) => {
  return (
    <Link
      to={`/categories/${name}`}
      className="grid place-content-center min-w-20 gap-2"
    >
      <img
        src={image}
        alt={name}
        className="w-12 mx-auto aspect-square object-cover rounded-full"
      />
      <p className="font-semibold text-center">{name}</p>
    </Link>
  );
};

export default Category;
