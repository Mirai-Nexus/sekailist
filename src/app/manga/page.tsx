"use client"
import NavBar from "@/components/navbar"
import Footer from "@/components/footer"
import Generos from "@/components/generos"
import { MangaGenero } from "@/data/mangaGenero"
export default function Manga(){
    return(
        <div style={{  overflowX: "hidden", maxWidth: "100vw"}}>
            <NavBar />
            <Generos key={1} midia={MangaGenero}/>
            <Footer/> 
        </div>
    )
}