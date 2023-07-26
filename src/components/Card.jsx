import Confetti from "../../public//images/image-confetti.jpg";

const Card = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg">
      <div>
        <img src={Confetti} alt="" className="rounded-t-lg" />
      </div>
      <div className="p-6 space-y-3">
        <span className="text-xs font-semibold opacity-60">
          By Claire Robinson
        </span>
        <h2 className="text-lg font-semibold">
          Receive money in any currency with no fees
        </h2>
        <p className="text-base opacity-70">
          The world is getting smaller and we're becoming more mobile. So why
          should you be forced to only receive money in a single...
        </p>
      </div>
    </div>
  );
};

export default Card;
