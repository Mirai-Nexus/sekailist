import Link from "next/link"
import "./style.css"
import { GeneroInterface } from "@/interface/genero.interface"
export default function Generos(props: { midia: GeneroInterface[] }) {
    return (
        <div className="Capsula">
            <h1>Gêneros Anime</h1>
            <div className="ContainerGeneros">
                {props.midia.map((objeto) => (
                    <Link key={objeto.id} href={`${objeto.href}`}>
                        <div style={{ width: '290px', height: "290px" }}>
                            <h3 className="title-generos">{objeto.nome}</h3>
                            <div className="card-genero" style={{ backgroundImage: `url(${objeto.url})`, filter: 'brightness(60%)' }} ></div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}