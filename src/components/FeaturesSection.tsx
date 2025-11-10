import iconOnline from "../assets/images/icon-online.svg";
import iconBudgeting from "../assets/images/icon-budgeting.svg";
import iconOnboarding from "../assets/images/icon-onboarding.svg";
import iconApi from "../assets/images/icon-api.svg";

const features = [
  {
    icon: iconOnline,
    title: "Online Banking",
    description:
      "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    icon: iconBudgeting,
    title: "Simple Budgeting",
    description:
      "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
  },
  {
    icon: iconOnboarding,
    title: "Fast Onboarding",
    description:
      "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    icon: iconApi,
    title: "Open API",
    description:
      "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-neutral-gray100 py-20 md:py-28 sm:-z-200 sm:relative">
      <div className="container mx-auto px-6 md:px-10 max-w-6xl">
        <div className="text-center md:text-left max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-primary-blue mb-4">
            Why choose Easybank?
          </h2>
          <p className="text-neutral-gray600 leading-relaxed">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center md:items-start text-center md:text-left"
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="mb-8 w-16 h-16"
              />
              <h3 className="text-lg font-semibold text-primary-blue mb-4">
                {feature.title}
              </h3>
              <p className="text-neutral-gray600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
