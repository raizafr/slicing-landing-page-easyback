import { ReactSVG } from "react-svg";
import Online from "../../public/images/icon-online.svg";
const ItemGroup = () => {
  return (
    <div className="w-full space-y-6 px-2 text-center md:text-left">
      <div className="flex justify-center md:justify-start">
        <ReactSVG src={Online} />
      </div>
      <h2 className="font-semibold text-lg">Online Banking</h2>
      <p className="text-base opacity-70">
        Our modern web and mobile applications allow you to keep track of your
        finances wherever you are in tehe world
      </p>
    </div>
  );
};

export default ItemGroup;
