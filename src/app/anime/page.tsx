"use client"
import NavBar from "@/components/navbar"
import Footer from "@/components/footer"
import Generos from "@/components/generos"
import { AnimeGenero } from "@/data/animeGenero"
export default function Anime() {
    return(
        <div style={{  overflowX: "hidden", maxWidth: "100vw"}}>
            <NavBar/>
            <Generos key={1} midia={AnimeGenero}/>
            <Footer/>
        </div>
    )
}