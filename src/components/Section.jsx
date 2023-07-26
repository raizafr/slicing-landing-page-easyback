import Card from "./Card";
import ItemGroup from "./ItemGroup";
import Online from "../../public/images/icon-online.svg";
import Api from "../../public/images/icon-api.svg";
import budgeting from "../../public/images/icon-budgeting.svg";
import onboarding from "../../public/images/icon-onboarding.svg";
import confetti from "../../public/images/image-confetti.jpg";
import currency from "../../public/images/image-currency.jpg";
import plane from "../../public/images/image-plane.jpg";
import restaurant from "../../public/images/image-restaurant.jpg";
const Section = () => {
  return (
    <>
      <section className="lg:px-24 px-8 py-24 bg-[#F4F5F7]">
        <div className="space-y-6 text-center md:text-left">
          <div className="text-4xl font-semibold">Why choose Easybank?</div>
          <p className="text-gray-500">
            We leverage Open Banking to turn your bank account into your
            financial hub. <br /> Control your finances like never before
          </p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 mt-20 gap-3 space-y-10 md:space-y-0">
          <ItemGroup
            title={"Online Banking"}
            icon={Online}
            description={
              "Our modern web and mobile applications allow you to keep track of your finances wherever you are in tehe world."
            }
          />
          <ItemGroup
            title={"Simple Budgeting"}
            icon={budgeting}
            description={
              "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits."
            }
          />
          <ItemGroup
            title={"Fast Onboarding"}
            icon={onboarding}
            description={
              "We dont't do branches. Open your account in minutes online and start taking control of your dinances right away."
            }
          />
          <ItemGroup
            title={"Open API"}
            icon={Api}
            description={
              "Manage your savings, investments, pension, and much from one account. Tracking your money has never been easier."
            }
          />
        </div>
      </section>
      <section className="lg:px-24 px-8 py-24 bg-[#FAFAFA]">
        <h1 className="text-4xl font-semibold text-center md:text-left">
          Latest Articles
        </h1>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-5 mt-16">
          <Card
            vendor={"By Claire Robinson"}
            title={"Receive money in any currency with no fees"}
            description={
              "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single..."
            }
            image={currency}
          />
          <Card
            vendor={"By Wilson Hutton"}
            title={"Treat yourself without worrying about money"}
            description={
              "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you..."
            }
            image={restaurant}
          />
          <Card
            vendor={"By Wilson Hutton"}
            title={"Take you Easybank card wherever you go"}
            description={
              "We want you to enjoy your travels. This is why we don't any fees on purchases while you're abroad. We'll even show you..."
            }
            image={plane}
          />
          <Card
            vendor={"By Claire Robinson"}
            title={"Our invite-only Beta accounts are now live!"}
            description={
              "After a lot of hard work by the whole team, we're excited to launch our closed beta. it's easy to request an invite through the sute..."
            }
            image={confetti}
          />
        </div>
      </section>
    </>
  );
};

export default Section;
