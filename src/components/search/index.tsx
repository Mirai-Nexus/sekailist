import "./style.css"
import Image from "next/image"
export default function Search(){
    return(
        <div className="ContainerInput">
            <input type="search" placeholder="Pesquise por um anime,mangá..." className="InputSearch"/>
            <button type="submit" className="buttonSearch">
                <Image src={"/icons/search.svg"} alt="pesquisar" width={20} height={20} className="icon-search"/>
            </button>
        </div>
    )
}