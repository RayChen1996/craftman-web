import Banner from "@/components/Page/home/Banner";
import Intro from "@/components/Page/home/Intro";
import LearnMore from "@/components/Page/home/LearnMore";
import Products from "@/components/Page/home/Products";
import Subscribe from "@/components/Page/home/Subscribe";

export default function Home() {
  return (
    <main>
      <Banner />
      <LearnMore />
      <Intro />
      <Products />
      <Subscribe />
    </main>
  );
}
