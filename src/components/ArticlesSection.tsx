import imgCurrency from "../assets/images/image-currency.jpg";
import imgRestaurant from "../assets/images/image-restaurant.jpg";
import imgPlane from "../assets/images/image-plane.jpg";
import imgConfetti from "../assets/images/image-confetti.jpg";

const articles = [
  {
    img: imgCurrency,
    author: "By Claire Robinson",
    title: "Receive money in any currency with no fees",
    description:
      "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single currency?",
  },
  {
    img: imgRestaurant,
    author: "By Wilson Hutton",
    title: "Treat yourself without worrying about money",
    description:
      "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month.",
  },
  {
    img: imgPlane,
    author: "By Wilson Hutton",
    title: "Take your Easybank card wherever you go",
    description:
      "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad.",
  },
  {
    img: imgConfetti,
    author: "By Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    description:
      "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site today.",
  },
];

const ArticlesSection = () => {
  return (
    <section className="bg-neutral-gray50 py-20 md:py-28">
      <div className="container mx-auto px-6 md:px-10 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-medium text-primary-blue mb-12 text-center md:text-left">
          Latest Articles
        </h2>

        {/* articles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {articles.map((article, index) => (
            <article
              key={index}
              className="bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={article.img}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col gap-2">
                <p className="text-xs text-neutral-gray600">{article.author}</p>
                <h3 className="text-lg font-semibold text-primary-blue hover:text-primary-green transition-colors cursor-pointer">
                  {article.title}
                </h3>
                <p className="text-neutral-gray600 text-sm leading-relaxed">
                  {article.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
