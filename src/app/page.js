import Banner from "@/components/Banner";
import PopularItem from "@/components/PopularItem";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner/>
      <PopularItem/>
      <Footer/>
    </>
  );
}
