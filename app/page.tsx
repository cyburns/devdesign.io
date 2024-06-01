import About from "@/components/home/about";
import Contact from "@/components/home/contact";
import InfiniteWords from "@/components/home/infinite";
import Intro from "@/components/home/intro";
import Payment from "@/components/home/payment";
import { Reviews } from "@/components/home/reviews";
import SectionDivider from "@/components/home/section-divider";
import Services from "@/components/home/services";
import Works from "@/components/home/works";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <InfiniteWords />
      <Services />
      <Works />
      <Payment />
      <Reviews />
      <Contact />
    </main>
  );
}
