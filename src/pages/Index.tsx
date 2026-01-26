import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCategories from "@/components/ProductCategories";
import WhyChooseUs from "@/components/WhyChooseUs";
import FeaturedGear from "@/components/FeaturedGear";
import UseCases from "@/components/UseCases";
import BrandStory from "@/components/BrandStory";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProductCategories />
      <FeaturedGear />
      <WhyChooseUs />
      <UseCases />
      <BrandStory />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;