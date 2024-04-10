import Link from "next/link"
import "./style.css"
import Image from "next/image"
import { GeneroInterfaceList } from "@/interface/genero.interface"

export default function GeneroList(props: {objeto: GeneroInterfaceList[]}) {
    return(
        <div>
            <div>
                {props.objeto.map((objeto) => 
                    <div key={objeto.id}>
                        <Link href={"#"}>
                            <Image src={objeto.url}  alt="" width={290} height={290}/> 
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}