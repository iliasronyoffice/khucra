import Image from "next/image";
import Slider from "./(home)/Slider";
import FeaturedProducts from "./(home)/FeaturedProducts";
import BestDeals from "./(home)/BestDeals";

export default function Home() {
  return (
    <div className=" min-h-screen   font-sans">
      <Slider />
      <FeaturedProducts />
      <BestDeals />
    </div>
  );
}
