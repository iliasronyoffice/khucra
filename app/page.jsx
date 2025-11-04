import Image from "next/image";
import Slider from "./(home)/Slider";
import FeaturedProducts from "./(home)/FeaturedProducts";
import BestDeals from "./(home)/BestDeals";
import SecondBanner from "./(home)/SecondBanner";
import JustForYou from "./(home)/JustForYou";
import TopSellers from "./(home)/TopSellers";

export default function Home() {
  return (
    <div className=" min-h-screen   font-sans">
      <Slider />
      <FeaturedProducts />
      <SecondBanner />
      <BestDeals />
      <JustForYou />
      <TopSellers />

    </div>
  );
}
