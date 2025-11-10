import mockups from "../assets/images/image-mockups.png";

const HeroSection = () => {
  return (
    <section className="w-full flex flex-col-reverse lg:flex-row mx-0 pb-16   sm:items-center sm:justify-between">
      {/* text section */}
      <div className="flex flex-col gap-6 text-center lg:text-left max-w-lg w-full lg:w-1/2 sm:items-center sm:justify-around sm:pl-15 sm:pt-15">
        <h1 className="text-5xl sm:text-5xl font-medium font-font-display text-primary-blue leading-tight">
          Next generation digital banking
        </h1>
        <p className="text-neutral-gray600 text-xl px-4">
          Take your financial life online. Your Digitalbank account will be a
          one-stop shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <button className="bg-linear-to-bl from-primary-green to-primary-cyan text-white font-medium rounded-full text-sm px-8 py-3 w-fit mx-auto lg:mx-0 hover:opacity-90 transition sm:text-left sm:self-start">
          Request Invite
        </button>
      </div>

      {/*image*/}
      <div className="w-full sm:w-1/2 mb-10 lg:mb-0 sm:relative">
        <img
          src={mockups}
          alt="mobile mockups"
          className={`w-full custom-bg`}
        />
      </div>
    </section>
  );
};

export default HeroSection;
