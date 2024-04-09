"use client"
import AnimeSection from "@/components/animeSection"
import NavBar from "@/components/navbar";
import Banner from "@/components/Banner";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main style={{overflowX: "hidden"}}>
      <NavBar/>
      <Banner/>
      <div style={{marginTop:"70vh"}}>
        <AnimeSection id={"1"} />
        <AnimeSection id={"2"} />
      </div>
      <Footer/>
    </main>
  );
}
