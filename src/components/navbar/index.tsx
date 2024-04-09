import "./style.css"
import Image from "next/image"
import { SetStateAction, useState } from "react"
import Search from "../search"

export default function NavBar() {
    const [inputValue, setInputValue] = useState("")
    const [Menu, setMenu] = useState('none')
    const [MenuFase2, setMenuFase2] = useState("block")

    const clickMenu = () => {
        if (Menu === 'none') {
            setMenu('block')
            setMenuFase2('none')
        } else {
            setMenu('none')
            setMenuFase2('block')
        }
    }
    return (
        <div className="ContainerNavBar" style={{ color: "white" }}>
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

            <div className="ContainerMenuHamburguer" onClick={clickMenu}>
                <Image src={"/icons/hamburguer.svg"} alt="menu hamburguer" width={40} height={40} style={{ display: MenuFase2 }} />
            </div>
            <div className="MenuEscondido" style={{ display: Menu }}>
                <div className="BoxMenuEscondido">
                <Image src={"/icons/back.svg"} style={{ display: Menu }} alt="menu hamburguer" width={40} height={40} onClick={clickMenu} className="IconMenuAberto" />
                    <div className="BoxProfile">
                        <Image src={"/icons/profile.svg"} alt="menu hamburguer" width={40} height={40} className="ImagemPerfilMobile"/>
                        <span>Login/Cadastro</span>
                    </div>
                    <div className="LinhaDivisa"></div>
                    <ul className="ContainerListaMob" style={{ display: Menu }}>
                        <li>Animes</li>
                        <li>Mangás</li>
                        <li>Notícias</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}