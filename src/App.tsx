import ArticlesSection from "./components/ArticlesSection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

const App = () => {
  return (
    <main className="w-full min-h-screen mx-auto">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ArticlesSection />
      <Footer />
    </main>
  );
};

export default App;
