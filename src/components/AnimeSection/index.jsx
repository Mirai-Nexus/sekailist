import "./style.css"
import Image from "next/image"

export default function AnimeSection() {
    return (
        <section className="SectionAnimeContainer">
            <h2 className="TituloSection">Animes da Temporada</h2>
            <Image src={"/icons/arrow-left.svg"} alt="Voltar" width={40} height={40} />
            <Image src={"/icons/arrow-right.svg"} alt="Avançar" width={40} height={40} />
        </section>
    )
}