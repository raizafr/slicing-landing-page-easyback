import Card from "./Card";
import ItemGroup from "./ItemGroup";

const Section = () => {
  return (
    <>
      <section className="lg:px-24 px-8 py-24 bg-[#F4F5F7]">
        <div className="space-y-6 text-center md:text-left">
          <div className="text-4xl font-semibold">Why choose Easybank?</div>
          <p className="opacity-70">
            We leverage Open Banking to turn your bank account into your
            financial hub. <br /> Control your finances like never before
          </p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 mt-20 gap-3 space-y-10 md:space-y-0">
          <ItemGroup />
          <ItemGroup />
          <ItemGroup />
          <ItemGroup />
        </div>
      </section>
      <section className="lg:px-24 px-8 py-24 bg-[#FAFAFA]">
        <h1 className="text-4xl font-semibold text-center md:text-left">
          Latest Articles
        </h1>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-5 mt-16">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </>
  );
};

export default Section;
