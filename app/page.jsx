import Image from "next/image";
import Slider from "./(home)/Slider";
import FeaturedProducts from "./(home)/FeaturedProducts";

export default function Home() {
  return (
    <div className=" min-h-screen   font-sans">
      <Slider />
      <FeaturedProducts />
    </div>
  );
}
