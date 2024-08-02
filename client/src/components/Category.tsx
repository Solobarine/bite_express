import { Link } from "react-router-dom";

const Category = ({
  name,
  imageURI,
  link,
}: {
  name: string;
  imageURI: string;
  link: string;
}) => {
  return (
    <Link to={link} className="grid place-content-center min-w-20 gap-4">
      <img
        src={imageURI}
        alt={name}
        className="w-16 mx-auto aspect-square object-contain rounded-full"
      />
      <p className="font-semibold text-center">{name}</p>
    </Link>
  );
};

export default Category;
