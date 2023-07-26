import Confetti from "../../public//images/image-confetti.jpg";

const Card = ({ vendor, title, description, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg">
      <div>
        <img src={image} alt="" className="rounded-t-lg" />
      </div>
      <div className="p-6 space-y-3">
        <span className="text-xs font-semibold text-gray-400">{vendor}</span>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-base text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default Card;
