import ImageMockup from "../../public/images/image-mockups.png";

const Header = () => {
  return (
    <header className="w-full min-h-full bg-[#FAFAFA] -z-20 -mt-20 md:mt-0 md:flex md:flex-row-reverse">
      <div className="w-full bg-mobile md:bg-desktop px-5 bg-cover md:w-1/2">
        <img src={ImageMockup} alt="" className="" />
      </div>
      <div className="md:w-1/2 md:px-5 md:flex md:flex-col justify-center lg:px-24">
        <h1 className="text-5xl text-center mt-7 md:text-left">
          Next generation digital banking
        </h1>
        <p className="mt-7 text-center text-gray-500 md:text-left">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending. saving, budgeting, investing, and much
          more.
        </p>
        <div className="flex justify-center mt-7 md:justify-start">
          <button className="button">Request Invite</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
