"use client"
import AnimeSection from "@/components/AnimeSection"
import NavBar from "@/components/navbar";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <main style={{overflowX: "hidden"}}>
      <NavBar/>
      <Banner/>
      <AnimeSection/>
    </main>
  );
}
