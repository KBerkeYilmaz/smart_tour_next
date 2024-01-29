import HeroForm from "./forms/HeroForm";

const HeroTitle = () => {
  return (
    <section
      className="w-full min-h-screen max-w-screen flex flex-col justify-end items-center"
      style={{
        backgroundImage: `url('/hero-bg.webp')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
        backgroundSize: "100% auto",
      }}
    >
        
      <HeroForm />
    </section>
  );
};

export default HeroTitle;