import "./style.css"
import Image from "next/image"
import { SetStateAction, useState } from "react"
import Search from "../search"

export default function NavBar() {
    const [inputValue, setInputValue] = useState("")
    const [Menu, setMenu] = useState('none')

    const clickMenu = () => {
        if(Menu === 'none'){
            setMenu('block')
        }else{
            setMenu('none')
        }
    }

    const handleChange = (evento: { target: { value: SetStateAction<string> } }) => {
        setInputValue(evento.target.value)
    }
    return (
        <div className="ContainerNavBar" style={{ color: "white" }}>
            <div className="ContainerMenuHamburguer" onClick={clickMenu}>
                <Image src={"/icons/hamburguer.svg"} alt="menu hamburguer" width={40} height={40} />
            </div>
            <h1 className="Logo">SL</h1>
            <Search />
            <ul className="ContainerLista">
                <li>Animes</li>
                <li>Mangás</li>
                <li>Notícias</li>
            </ul>
            <div className="ContainerProfile">
                <Image src={'/icons/profile.svg'} alt="oi" width={35} height={35} />
            </div>
            <div className="MenuEscondido" style={{display: Menu}}>
                <ul className="ContainerListaMob" style={{ display: 'block' }}>
                    <li>Animes</li>
                    <li>Mangás</li>
                    <li>Notícias</li>
                </ul>
            </div>
        </div>
    )
}