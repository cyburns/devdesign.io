import About from "@/components/about";
import InfiniteWords from "@/components/infinite";
import Intro from "@/components/intro";
import Payment from "@/components/payment";
import { Reviews } from "@/components/reviews";
import SectionDivider from "@/components/section-divider";
import Services from "@/components/services";
import Works from "@/components/works";

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
    </main>
  );
}
