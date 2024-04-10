import Link from "next/link"
import "./style.css"
import Image from "next/image"
import { GeneroInterfaceList } from "@/interface/genero.interface"

export default function GeneroList(props: { objeto: GeneroInterfaceList[], generoName: string | null }) {
    return (
        <div className="CapsulaList">
            <h1>{props.generoName}</h1>
            <div className="ContainerList">
                {props.objeto.map((objeto) =>
                    <Link href={"#"} key={objeto.id}>
                        <Image className="card" src={objeto.url} alt="" width={290} height={290} />
                    </Link>
                )}
            </div>
        </div>
    )
}