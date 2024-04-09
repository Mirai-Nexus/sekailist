import "./style.css"
import Image from "next/image"

export default function Footer() {
    return (
        <footer className="Footer">
            <div style={{ color: 'white' }} />
            <div className="Titulos">
                <ul className="Elementos">
                    <p>Navegação</p>
                    <li>Séries Populares</li>
                    <li>Séries em Simulcast</li>
                    <li>Calendário de Lançamentos</li>
                </ul>
                <ul className="Elementos">
                    <p>Desenvolvedor</p>
                    <li >
                        <Image src={"/icons/github.png"} alt="github" width={24} height={24} />
                        GitHub
                    </li>
                    <li >
                        <Image src={"/icons/youtube.png"} alt="youtube" width={24} height={24} />
                        YouTube
                    </li>
                    <li>
                        <Image src={"/icons/facebook.png"} alt="facebook" width={24} height={24} />
                        Facebook
                    </li>
                    <li>
                        <Image src={"/icons/twitter.png"} alt="twitter" width={24} height={24} />
                        Twitter
                    </li>
                    <li>
                        <Image src={"/icons/instagram.png"} alt="instagram" width={24} height={24} />
                        Instagram
                    </li>
                    <li>
                        <Image src={"/icons/discord.png"} alt="discord" width={24} height={24} />
                        discord
                    </li>
                </ul>
                <ul className="Elementos">
                    <p>Sekai List</p>
                    <li>Sobre</li>
                    <li>Ajuda/FAQ</li>
                    <li>Termos de Uso</li>
                    <li>Política de Privacidade</li>
                    <li>Baixe o App</li>
                </ul>
                <ul className="Elementos">
                    <p>Conta</p>
                    <li>Criar Conta</li>
                    <li>Login</li>
                </ul>
            </div>
        </footer>
    )
}
