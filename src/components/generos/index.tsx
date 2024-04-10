import Link from "next/link"
import "./style.css"
import { GeneroInterface } from "@/interface/genero.interface"
import Image from "next/image"
export default function Generos(props: { midia: GeneroInterface[] }) {
    return (
        <div className="Capsula">
            <h1>Gêneros Anime</h1>
            <div className="ContainerGeneros">
                {props.midia.map((objeto) => (
                    <Link className="Card" key={objeto.id} href={`${objeto.href}`} >
                        <span className="title-generos">{objeto.nome}</span>
                        <Image className="card-Images" src={objeto.url} alt="" width={290} height={290} style={{ filter: 'brightness(60%)' }} />
                    </Link>
                ))}
            </div>
        </div>
    )
}