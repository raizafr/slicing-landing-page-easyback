import { ReactSVG } from "react-svg";
import Online from "../../public/images/icon-online.svg";
const ItemGroup = ({ title, description, icon }) => {
  return (
    <div className="w-full space-y-6 px-2 text-center md:text-left">
      <div className="flex justify-center md:justify-start">
        <ReactSVG src={icon} />
      </div>
      <h2 className="font-semibold text-xl">{title}</h2>
      <p className="text-base text-gray-500">{description}</p>
    </div>
  );
};

export default ItemGroup;
