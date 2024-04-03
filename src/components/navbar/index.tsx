import "./style.css"
import Image from "next/image"
import { SetStateAction, useState } from "react"
import Search from "../search"

export default function NavBar() {
    const [inputValue, setInputValue] = useState("")
    const handleChange = (evento: { target: { value: SetStateAction<string> } }) => {
        setInputValue(evento.target.value)
    }
    return (
        <div className="ContainerNavBar" style={{ color: "white" }}>
                <h1 className="Logo">SL</h1>
                <Search/>
                <ul className="ContainerLista">
                    <li>Animes</li>
                    <li>Mangás</li>
                    <li>Notícias</li>
                </ul>
                <div className="ContainerProfile">
                    <Image src={'/icons/profile.svg'} alt="oi" width={35} height={35} />
                </div>
        </div>
    )
}